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

async function PaginatedBlogPosts({ startIndex, endIndex }: { startIndex: number, endIndex: number }): Promise<React.JSX.Element> {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const postIndeces = Array.from(
                { length: endIndex - startIndex + 1 },
                (_, i) => startIndex + i);
            console.log(postIndeces);
        }

        fetchData()


    })

    //useEffect(() => {
    //    const fetchData = async () => {
    //        const postsData = await getSortedPostsData();
    //        setPosts(postsData);
    //    };

    //    fetchData();
    //}, []);

    return (
        <div>
            <Breadcrumb />
            <Container>
                <BrutHeading className="rounded-top" />
                Testing
            </Container>
        </div>
    )
};

//function Pagination(): React.JSX.Element {
//    const [page, setPage] = useState(1);
//    const [category, setCategory] = useState('');
//    const searchParams = useSearchParams();

//    useEffect(() => {
//        var pageParam = Number(searchParams.get('page'));
//        if (!pageParam) {
//            pageParam = 1
//        }
//        const categoryParam = searchParams.get('category');

//        if (pageParam) {
//            setPage(pageParam);
//        }

//        if (categoryParam) {
//            setCategory(categoryParam);
//        }

//    }, [searchParams]);


//    return (< BlogPagination currentPage={page ? Number(page) : 1} totalPages={10} />);
//}

async function PaginationWrapper({ postCount, postsPerPage = 10, maxPageNumbersToShow = 5 }: { postCount: number, postsPerPage?: number; maxPageNumbersToShow?: number}) {
    const [page, setPage] = useState(1);
    const [category, setCategory] = useState('');
    const searchParams = useSearchParams();

    /* Handle identifying post indicies */
    const totalPages = Math.ceil(postCount / postsPerPage);
    const currentPage = Math.max(1, Math.min(totalPages, page))
    const startPostIndex = (Math.max(0, currentPage - 1)) * postsPerPage;
    const endPostIndex = Math.min(postCount - 1, startPostIndex + (postsPerPage - 1));
    const numPostOnPage = endPostIndex - startPostIndex + 1;
    

    useEffect(() => {
        var pageParam = Number(searchParams.get('page'));
        if (!pageParam) {
            pageParam = 1;
        }
        const categoryParam = searchParams.get('category');

        if (pageParam) {
            setPage(pageParam);
        }

        if (categoryParam) {
            setCategory(categoryParam);
        }

    }, [searchParams]);


    return (<>
        <h3>Pagination stats</h3>
        <h6>Consants</h6>
        Posts per page: {postsPerPage}<br/>
        Number of posts: {postCount}<br/>
        Needed pages: {totalPages}<br />
        Max page numbers to show: {maxPageNumbersToShow}<br/>
        Show pages: {maxPageNumbersToShow - ((maxPageNumbersToShow + 1) % 2)}<br/>
        Page radius: {Math.floor((maxPageNumbersToShow - ((maxPageNumbersToShow + 1) % 2))/2)}
        <h6>Page Specific</h6>

        Current page: {currentPage}<br />
        Post indeces to fetch: [{startPostIndex}, {endPostIndex}]
        <BlogPagination currentPage={page ? Number(currentPage) : 1} totalPages={totalPages} maxPageNumbersToShow={maxPageNumbersToShow} rootUrl={'/params'} />
        <PaginatedBlogPosts startIndex={startPostIndex} endIndex={endPostIndex}/></>);


}

export default function SearchBar() {
    return(<Suspense fallback={ <PageQuery /> }>
        < Page />
        < PaginationWrapper postCount={100} postsPerPage={10} maxPageNumbersToShow={5} />
    </Suspense>)
}
