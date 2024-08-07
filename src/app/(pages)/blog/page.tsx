'use client';

import { useEffect, useState } from 'react';
import HorizontalCard from '@/app/components/(blog elements)/BlogPostHorizontalCard';
import * as staticPosts from '@/app/utils/staticPosts';
import BlogPagination from '@/app/components/(blog elements)/BlogPagination';
import CategoryFilter from '@/app/components/(blog elements)/CategoryFilter';
import SearchParam from '@/app/components/(blog elements)/SearchParam';
import Container from '@/app/components/(main elements)/Container';
import Breadcrumb from '@/app/components/(blog elements)/Breadcrumbs';
import BrutHeading from '@/app/components/(headers)/NeoBrutHeading';

async function loadPostData() {
    const postData = await staticPosts.LoadPostDBJSON();
    return postData;
}

export default function HybridBlogPost({ }) {
    const [posts, setPosts] = useState<Post[]>([]);
    const [page, setPage] = useState(1);
    const [category, setCategory] = useState('');
    const postsPerPage = 5;

    useEffect(() => {
        async function fetchData() {
            const postData = await loadPostData();
            setPosts(postData);
        }
        fetchData();
    }, []);


    const filteredPosts = category !== ''
        ? posts.filter(post => staticPosts.ifPostHasCategory(post, category))
        : posts;

    const postCount = filteredPosts.length;
    const totalPages = Math.ceil(postCount / postsPerPage);
    const currentPage = Math.max(1, Math.min(totalPages, page));
    const startPostIndex = (currentPage - 1) * postsPerPage;
    const endPostIndex = startPostIndex + postsPerPage;
    const displayedPosts = filteredPosts.slice(startPostIndex, endPostIndex);

    return (
        <div>
            <Breadcrumb />{postCount > postsPerPage && currentPage > 1 && (
                <BlogPagination
                    currentPage={currentPage}
                    currentCategory={category}
                    totalPages={totalPages}
                    maxPageNumbersToShow={5}
                    rootUrl={'/blog'}
                    className="mb-12"
                />
            )}
            <Container className="mt-12">
                <BrutHeading className="rounded-top" />
                <SearchParam setPage={setPage} setCategory={setCategory} />
                <div className="container px-6 py-10 mx-auto">

                    {category !== "" && (
                        <CategoryFilter category={category} rootURL="/blog" />)}
                    {displayedPosts.map((post) => (
                        <HorizontalCard key={post.id} {...post} />
                    ))}
                </div>
            </Container>
            {postCount > postsPerPage && (
                <BlogPagination
                    currentPage={currentPage}
                    currentCategory={category}
                    totalPages={totalPages}
                    maxPageNumbersToShow={5}
                    rootUrl={'/blog'}
                    className="mt-12"
                />
            )}
        </div>
    );
}


export interface Post {
    id: string;
    title: string;
    uri: string;
    date: Date;
    featuredImage: FeaturedImage | null;
    excerpt: string;
    categories: Categories;
    tags: Tags;
}

interface Categories {
    nodes: CategoryElement[];
}

interface CategoryElement {
    name: string;
}

interface FeaturedImage {
    node: FeaturedImageNode;
}

interface FeaturedImageNode {
    sourceUrl: string;
    altText: string;
}

interface Tags {
    nodes: TagElement[];
}

interface TagElement {
    name: string;
}