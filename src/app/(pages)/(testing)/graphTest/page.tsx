//import Link from "next/link";
//import { Suspense } from "react";
//import Loading from "./loading";

//async function getPosts() {
//    const query = `
//      {
//          posts {
//            edges {
//              node {
//                id
//                title
//                content
//                uri
//                date
//              }
//            }
//          }
//        }
//      `;

//    const res = await fetch(
//        `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(
//            query
//        )}`,
//        {
//            method: "GET",
//            headers: {
//                "Content-Type": "application/json",
//                // ... any other headers you need to include (like authentication tokens)
//            },
//            cache: "no-store",
//        }
//    );

//    const { data } = await res.json();

//    return data.posts.nodes;
//}
//export default async function PostList() {
//    const posts = await getPosts();

//    return (
//        <Suspense fallback={<Loading />}>
//            <div>
//                {posts.map((post) => (
//                    <div key={post.uri} className="card">
//                        <Link href={`postTest${post.uri}`}>
//                            <h3>{post.title}</h3>
//                            <div
//                                dangerouslySetInnerHTML={{
//                                    __html: post.content.slice(0, 200) + "...",
//                                }}
//                            />
//                        </Link>
//                    </div>
//                ))}
//            </div>
//        </Suspense>
//    );
//}

import { getSortedPostsData } from "@/app/utils/posts";
import Link from "next/link";

export default async function PostList() {
    const posts = await getSortedPostsData()

    return (
        <div>
            {posts.map((post) => (
                <div key={post.uri}>
                    <Link href={`postTest${post.uri}`}>
                        <h3>{post.title}</h3>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: post.content.slice(0, 200) + "...",
                            }}
                        />
                    </Link>
                </div>
            ))}
        </div>
    )
}