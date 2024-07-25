// @/app/components/(blog elements)/BlogPostHorizontalCard/index.tsx


import Link from 'next/link';
import Image from 'next/image';
import BlogPost from '@/app/components/(blog elements)/BlogPost';
import CategoryBadge from '@/app/components/(blog elements)/CategoryBadge';
import InlineRow from '@/app/components/(containers)/InlineRow';
import * as staticPost from '@/app/utils/staticPosts';

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

const BlogPostHorizontalCard: React.FC<Post> = (post) => {
    const { id, title, uri, date, featuredImage, excerpt, categories, tags } = post;

    return (
        <div className=" p-4 mt-8 lg:flex lg:items-center bg-surface-container border border-black  border-r-4 border-b-4 rounded-b-lg rounded-r-lg">
            {featuredImage && featuredImage.node.sourceUrl && (
                <Image className="mb-6 lg:mb-0 border-r border-b border-black object-cover w-full lg:mx-6 lg:w-1/2 rounded h-72 lg:h-96" width={0} height={0} src={featuredImage.node.sourceUrl} alt={featuredImage.node.altText} />
            )}
                <div className="mb-auto lg:w-fit lg:mx-6">
                {staticPost.ifPostIsCategorized(post) && (
                    <InlineRow className="mb-4">
                        {staticPost.getCategoryList(post).map((category, index) => (
                        < CategoryBadge key = { index } label = { category } />
                        ))}
                    </InlineRow>
                )}

                <Link href={`/blog${uri}`} className="group py-1 px-2 my-2 block text-4xl font-semibold text-on-surface md:text-3xl font-spaceGrotesk
                        cursor-pointer relative before:absolute before:bg-surface-container-low before:bottom-0 before:left-0
                        before:h-full before:w-full before:origin-bottom before:scale-y-[0.3] hover:before:scale-y-100
                        before:transition-transform before:ease-out before:duration-500
                        border-l-4 border-secondary focus:ring-4 focus:ring-secondary focus:rounded">
                    <h3 className="relative text-on-surface group-hover:text-tertiary ease-in-out duration-500 group-hover:underline">{post.title}</h3>
                    </Link>

                    <p className="mt-3 text-sm text-on-surface">
                        <BlogPost htmlContent={post.excerpt} />
                    </p>

                {/*<a href="#" className="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Read more</a>*/}
                
                </div>
        </div>

    )
}

export default BlogPostHorizontalCard;