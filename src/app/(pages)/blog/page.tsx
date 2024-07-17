import React from "react";
import { getSortedPostsData } from "@/app/utils/posts";
import Link from "next/link";
import Container from '@/app/components/(main elements)/Container';
import Breadcrumb from '@/app/components/(blog elements)/Breadcrumbs';


async function Blog() {
    const posts = await getSortedPostsData()

    return (
        <div><Breadcrumb />
            <Container>
            <h1>Blog</h1>
            {/*Temporary blog post visualization*/ }
            <div className="mt-16">
                {posts.map((post) => (
                    <div key={post.uri} className="mb-12">
                        <Link href={`blog${post.uri}`}>
                            <h3>{post.title}</h3>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: post.content.slice(0, 200) + "...",
                                }}
                            />
                        </Link>
                    </div>
                ))}
            </div></Container>
        </div>
    )};

export default Blog;