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

export async function getPostsForStaticNav() {
    const query = `{
                    posts {
                        nodes {
                          slug
                          content
                          }
                        }
                    }`

    const postJson = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(query)}`, { next: { revalidate: 60 } })
        .then((res) => res.json())
        .then((resJson) => resJson.data.posts.nodes);

    return postJson.map((post: PostsSlugData) => ({
        slug: post.slug,
        content: post.content
    }))
}

type Post = {
    id: string,
    title: string,
    content: string,
    uri: string,
    date: string;
}

export async function getSortedPostsData(): Promise<Post[]> {
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

    const postRes = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(query)}`, { next: { revalidate: 60 } })
        .then((res) => res.json())
    
    const posts = postRes.data.posts.edges.map((edge: { node: any; }) => edge.node);
    console.log(posts);

    return posts.sort((a: any, b: any) => {
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