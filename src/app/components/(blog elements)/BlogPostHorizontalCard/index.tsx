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
    const color = ["primary", "secondary", "tertiary"];

    const r1 = Math.floor(Math.random() * color.length);
    const r2 = Math.floor(Math.random() * color.length);
    const r3 = Math.floor(Math.random() * color.length);

    return (
        //<div className="relative flex flex-column overflow-hidden border-2 border-b-4 bg-surface-container-highest border-black w-auto h-fit border rounded-2xl">
        //    <Link href={`/blog${uri}`}>
        //        {featuredImage && featuredImage.node.sourceUrl && (
        //            <Image
        //                src={featuredImage.node.sourceUrl}
        //                width={0}
        //                height={0}
        //                className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
        //                alt={featuredImage.node.altText}
        //            />
        //        )}
        //        <div className="relative inset-0 h-fit p-2 pt-8 z-10">
        //            <h4 className="my-auto font-bold ">
        //                <mark className="bg-primary-container rounded text-on-primary-container">{title}</mark>
        //            </h4>
        //            <div className="static mt-4 mb-0 bottom-0 bg-surface-container-high text-on-surface-container-high border-2 flex-none w-full border border-black rounded-xl p-4">
        //                <BlogPost htmlContent={excerpt} />
        //            </div>
        //        </div>
        //    </Link>
        //</div>
        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center bg-surface-container border border-black  border-r-4 border-b-4 rounded-b-lg rounded-r-lg p-4">
            {featuredImage && featuredImage.node.sourceUrl && (
                <Image className=" border-r border-b border-black object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" width={0} height={0} src={featuredImage.node.sourceUrl} alt={featuredImage.node.altText} />
            )}
                <div className="mt-6 lg:w-fit lg:mt-0 lg:mx-6 ">
                {categories.nodes[0].name !== "Uncategorized" && (<p className="text-sm text-secondary uppercase">{categories.nodes[0].name}</p>)}

                <div className="block mt-4 text-2xl font-semibold text-on-surface md:text-3xl font-spaceGrotesk">
                    <Link href={`/blog${uri}`} className="hover:underline hover:text-primary-container">{post.title}</Link>
                    </div>

                    <p className="mt-3 text-sm text-on-surface">
                        <BlogPost htmlContent={post.excerpt} />
                    </p>

                {/*<a href="#" className="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Read more</a>*/}

                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-on-surface rounded-lg group bg-gradient-to-br from-primary-fixed via-tertiary-fixed to-secondary-fixed focus:ring-4 focus:outline-none focus:ring-primary-fixed">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-surface-container-low rounded-md">
                        <Link href={`/blog${uri}`} className="relative inline-flex items-center justify-center group-hover:text-primary">
                            <p>Read more</p>
                            <svg
                            className="icon icon-tabler icon-tabler-arrow-up-right"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
                            d="M17 7l-10 10"></path><path d="M8 7l9 0l0 9"></path>
                        </svg></Link>
                    </span>
                </button>
                </div>
        </div>

    )
}

export default BlogPostHorizontalCard;