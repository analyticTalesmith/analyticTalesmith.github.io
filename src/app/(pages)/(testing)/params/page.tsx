'use client'

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import React from 'react';
import { getSortedPostsData } from '@/app/utils/posts';
import Link from 'next/link';
import Container from '@/app/components/(main elements)/Container';
import Breadcrumb from '@/app/components/(blog elements)/Breadcrumbs';
import BrutHeading from '@/app/components/(headers)/NeoBrutHeading';
import BlogPostGrid from '@/app/components/(blog elements)/BlogPostCard';
import BlogPagination from '@/app/components/(blog elements)/BlogPagination';



function PageQuery() {
    return (<input placeholder="Search..." />)
}

function Page() {
    const [page, setPage] = useState(1);
    const [category, setCategory] = useState('');
    const searchParams = useSearchParams();

    useEffect(() => {
        var pageParam = Number(searchParams.get('page'));
        if (!pageParam) {
            pageParam = 1
        }
        const categoryParam = searchParams.get('category');
        if (pageParam) {
            setPage(pageParam);
        }

        if (categoryParam) {
            setCategory(categoryParam);
        }

    }, [searchParams]);

    return (<div>
        {page && <div>Page: {page}</div>}
        {category && <div>Category: {category}</div>}
    </div>);
}

export interface Post {
    id: string;
    title: string;
    uri: string;
    date: Date;
    featuredImage: FeaturedImage | null;
    excerpt: string;
}

export interface FeaturedImage {
    node: FeaturedImageNode;
}

export interface FeaturedImageNode {
    sourceUrl: string;
    altText: string;
}

async function BlogPost(): Promise<React.JSX.Element> {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const postsData = await getSortedPostsData();
            setPosts(postsData);
        };

        fetchData();
    }, []);

    return (
        <div>
            <Breadcrumb />
            <Container>
                <BrutHeading className="rounded-top" />
                <BlogPostGrid posts={posts} />
            </Container>
        </div>
    )
};

function Pagination(): React.JSX.Element {
    const [page, setPage] = useState(1);
    const [category, setCategory] = useState('');
    const searchParams = useSearchParams();

    useEffect(() => {
        var pageParam = Number(searchParams.get('page'));
        if (!pageParam) {
            pageParam = 1
        }
        const categoryParam = searchParams.get('category');
        if (pageParam) {
            setPage(pageParam);
        }

        if (categoryParam) {
            setCategory(categoryParam);
        }

    }, [searchParams]);


    return (< BlogPagination currentPage={page ? Number(page) : 1} totalPages={10} />);
}

export default function SearchBar() {
    return(<Suspense fallback={ <PageQuery /> }>
        < Page />
        < Pagination />
        < BlogPost />
    </Suspense>)
}
