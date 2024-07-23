//<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
//    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="">
//        <div class="flex flex-col justify-between p-4 leading-normal">
//            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
//            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//        </div>
//</a>



import Link from 'next/link';
import Image from 'next/image';
import BlogPost from '@/app/components/(blog elements)/BlogPost';

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
        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center bg-surface-container border border-black  border-r-4 border-b-4 rounded-b-lg rounded-r-lg p-4">
            {featuredImage && featuredImage.node.sourceUrl && (
                <Image className=" border-r border-b border-black object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" width={0} height={0} src={featuredImage.node.sourceUrl} alt={featuredImage.node.altText} />
            )}
                <div className="mt-6 mb-auto lg:w-fit lg:mt-0 lg:mx-6 ">
                {categories.nodes[0].name !== "Uncategorized" && (<div className="w-fit bg-surface-container-high border border-surface-container-low px-2 py-1 rounded-lg"><p className="text-sm text-outline uppercase">{categories.nodes[0].name}</p></div>)}

                <div className="block mt-4 text-2xl font-semibold text-on-surface md:text-3xl font-spaceGrotesk">
                    <Link href={`/blog${uri}`} className="hover:underline hover:bg-primary-fixed bg-primary-container rounded-sm py-1 px-2 text-on-primary-container">{post.title}</Link>
                    </div>

                    <p className="mt-3 text-sm text-on-surface">
                        <BlogPost htmlContent={post.excerpt} />
                    </p>

                {/*<a href="#" className="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Read more</a>*/}
                
                </div>
        </div>

    )
}

export default BlogPostHorizontalCard;