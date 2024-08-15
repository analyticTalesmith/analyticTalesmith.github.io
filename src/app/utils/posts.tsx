import { replaceImageUrls, replaceNonimageUrls } from '@/app/utils/urls'
import path from 'path'
import fs from 'fs'

interface GraphQLResponse<T> {
    data: T;
}

interface PostTitleContent {
    title: string;
    content: string;
}

interface PostResponse {
    post: PostTitleContent;
}

export async function getPostBySlug(slug: string): Promise<PostTitleContent | null> {
    const query = ` {
                        post(id: "${slug}", idType:SLUG){
                          title
                          content
                    }}`

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(query)}`,
        { next: { revalidate: 60 } }
    );

    const postJson: GraphQLResponse<PostResponse> = await response.json();
    const post = postJson.data?.post;

    if (post && post.content) {
        post.content = replaceImageUrls(post.content);
        post.content = replaceNonimageUrls(post.content);
    }

    return post || null;

}

export const fetchBlogPostTitle = async (slug: string): Promise<string> => {
    const query = ` {
        post(id: "${slug}", idType:SLUG){
            title
        }
    }`;

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(query)}`,
        { next: { revalidate: 60 } }
    );

    const postJson: GraphQLResponse<PostResponse> = await response.json();
    const post = postJson.data?.post;

    if (post && post.title) { return post.title; }
    else { return ''; }
};

export const fetchBlogPostContent = async (slug: string): Promise<string> => {
    const query = ` {
        post(id: "${slug}", idType:SLUG){
            content
        }
    }`;

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(query)}`,
        { next: { revalidate: 60 } }
    );

    const postJson: GraphQLResponse<PostResponse> = await response.json();
    const post = postJson.data?.post;

    if (post && post.content) { return post.content; }
    else { return ''; }
};

export async function getPostSlugsForStaticNav() {
    const postDBPath = path.join(process.cwd(), '/public/static/data/blogPosts.json');

    if (!fs.existsSync(postDBPath)) {
        console.error("Error getching Post DB for creating static nav - Post DB does not exist")
    }
    else {
        const postDBSource = await fs.readFileSync(postDBPath, 'utf8')
        const postDBJson = await JSON.parse(postDBSource);

        let slugList = [];
        for (const post of postDBJson) {
            slugList.push({ "slug": post.node.slug });
            /*slugList.push({ "slug": post.node.uri });*/
        }
        

        return slugList;
    }





    //const query = `{
    //                posts {
    //                    nodes {
    //                      slug
    //                      }
    //                    }
    //                }`;

    //const response = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(query)}`, { next: { revalidate: 60 } })
    //const postList = await response.json();
    //const posts = postList.data.posts.nodes;

    //const res = posts.map((post: any) => ({
    //    slug: post.slug
    //}));
    //console.log("###################");
    //console.log(res);
    //console.log("###################");

    //return posts.map((post: any) => ({
    //    slug: post.slug
    //}));
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
export async function getPosts() {
    const query = `
      {
          posts {
            edges {
              node {
                id
                title
                content
                uri
                date
              }
            }
          }
        }
      `;

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(
            query
        )}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                // ... any other headers you need to include (like authentication tokens)
            },
            cache: "no-store",
        }
    );


    const json = await res.json();

    if (!json.data) {
        throw new Error('Failed to fetch posts');
    }

    return json.data.posts.edges.map((edge: { node: any }) => edge.node);


}