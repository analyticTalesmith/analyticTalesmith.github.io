import React from 'react';
import { getSortedPostsData } from '@/app/utils/posts';
import Container from '@/app/components/(main elements)/Container';
import Breadcrumb from '@/app/components/(blog elements)/Breadcrumbs';
import BrutHeading from '@/app/components/(headers)/NeoBrutHeading';
import BlogPostGrid from '@/app/components/(blog elements)/BlogPostCard';


async function Blog() {
    const posts = await getSortedPostsData()

    return (
        <div>
            <Breadcrumb />
            <Container>
            <BrutHeading className="rounded-top"/>
                {/*Temporary blog post visualization*/}

                <BlogPostGrid posts={posts} />
            {/*<div className="flex grid grid-cols-1 md:grid-cols-2 gap-4 my-8 px-4">*/}
            {/*        {posts.map((post) => (*/}
            {/*            <BlogPostGrid directory="/blog" key={post.uri} title={post.title} slug={post.uri} />*/}
            {/*    ))}*/}
            {/*    </div>*/}
            </Container>
        </div>
    )};

export default Blog;