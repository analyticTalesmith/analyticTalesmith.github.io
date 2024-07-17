//import Link from 'next/link';

//interface BlogPostProps {
//    directory: string;
//    key: string;
//    title: string;
//    slug: string;
//}
//interface Post {
//    id: string,
//    title: string,
//    content: string,
//    uri: string,
//    date: string;
//}

//interface GridProps {
//    posts: Post[],
//    directory: string
//}


//const BlogPostCard: React.FC<BlogPostProps> = ({ directory, key, title, slug }) => {
//    return (
//        <div className="border-2 border-b-4 bg-primary border-black w-full flex flex-col border rounded-3xl p-2">
//            <h4 className="m-auto font-bold text-on-primary-container">
//                <mark className="bg-primary-container rounded">{title}</mark>
//            </h4>
//            <div key={key} className="bg-surface border-2 flex-1 w-full border border-black rounded-xl p-4">
//                Blog card: <Link href={`${directory}${slug}`}>{title}</Link>
//            </div>
//        </div>
//    )
//}



//const BlogPostGrid: React.FC<{ params } : GridProps > = ({ posts, }) => {
//    return (
//        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//            {props.posts.map((post) => (
//                <BlogPostCard
//                    key={post.id}
//                    directory={props.directory}
//                    title={post.title}
//                    slug={post.uri}
//                />
//            ))}
//        </div>
//    )
//}

//export default BlogPostGrid;


import Link from 'next/link';
import Image from 'next/image';
import { replaceImageUrls } from '@/app/utils/urls';
import BlogPost from '@/app/components/(blog elements)/BlogPost';

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

const BlogPostCard: React.FC<Post> = ({ id, title, uri, date, featuredImage, excerpt }) => {
    if (featuredImage) {
        featuredImage.node.sourceUrl = replaceImageUrls(featuredImage.node.sourceUrl);
    }

    return (
        <div className="relative flex flex-column overflow-hidden border-2 border-b-4 bg-surface-container-highest border-black w-auto h-fit border rounded-2xl">
            <Link href={`/blog${uri}`}>
                {featuredImage && featuredImage.node.sourceUrl && (
                    <Image
                        src={featuredImage.node.sourceUrl}
                        width={0}
                        height={0}
                        className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
                        alt={featuredImage.node.altText}
                    />
                )}                    
            <div className="relative inset-0 h-fit p-2 pt-8 z-10">
                <h4 className="my-auto font-bold ">
                        <mark className="bg-primary-container rounded text-on-primary-container">{title}</mark>
                </h4>
                <div className="static mt-4 mb-0 bottom-0 bg-surface-container-high text-on-surface-container-high border-2 flex-none w-full border border-black rounded-xl p-4">
                    <BlogPost htmlContent={excerpt} />
                    </div>
            </div>
            </Link>
        </div>
    )
}

const BlogPostGrid: React.FC<{ posts: Post[] }> = ({ posts }) => {
    {
        return (
            <div className="m-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {posts.map((post) => (

                    <BlogPostCard
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        uri={post.uri}
                        date={post.date}
                        featuredImage={post.featuredImage}
                        excerpt={post.excerpt}

                    />
                ))}
            </div>
        )
    }
}

export default BlogPostGrid;