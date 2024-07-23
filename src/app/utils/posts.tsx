import { replaceImageUrls, replaceNonimageUrls } from '@/app/utils/urls';

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


type PostsSlugData = {
    slug: string;
    content: string;
};

export const fetchAllBlogSlugs = async (): Promise<string[]> => {
    const query = `{
        posts {
            nodes {
                slug
            }
        }
    }`;

    const response = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(query)}`, { next: { revalidate: 60 } });
    const data = await response.json();
    const slugs = data.data.posts.nodes.map((post: { slug: string }) => post.slug);

    return slugs;
};


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
    const query = `{
                    posts {
                        nodes {
                          slug
                          }
                        }
                    }`;

    const response = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(query)}`, { next: { revalidate: 60 } })
    const postList = await response.json();
    const posts = postList.data.posts.nodes;

    return posts.map((post: any) => ({
        slug: post.slug
    }));
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


export async function getSortedPostsData(): Promise<Post[]> {
    const query = `
              {
          posts {
            edges {
              node {
                id
                title
                uri
                date
                featuredImage {
                  node {
                    sourceUrl
                    altText
                  }
                }
                excerpt
              }
            }
          }
        }
      `;

    const postRes = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(query)}`, { next: { revalidate: 60 } })
        .then((res) => res.json())
    
    const posts = postRes.data.posts.edges.map((edge: { node: Post; }) => edge.node);

    return posts.sort((a: Post, b: Post) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });

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