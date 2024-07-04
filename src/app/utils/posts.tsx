export async function getPostBySlug(slug: string) {
    const query = ` {
                    post(id: "${slug}", idType:SLUG){
                      title
                      content
                    }}`

    const postJson = fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(query)}`)
        .then((res) => res.json())
        .then((resJson) => resJson.data.post);

    return postJson;

}


type PostsSlugData = {
    slug: string;
};

export async function getPostsForStaticNav() {
    const query = `{
                    posts {
                        nodes {
                          slug
                          }
                        }
                    }`

    const postJson = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(query)}`)
        .then((res) => res.json())
        .then((resJson) => resJson.data.posts.nodes);

    return postJson.map((post: PostsSlugData) => ({
        slug: post.slug,
    }))
}

type Post = {
    posts: {
        edges: {
            node: {
                id: string,
                title: string,
                content: string,
                uri: string,
                date: string
            }[]
        }
    }
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
    
    const json: { data: any } = await res.json();
    const posts = json.data.posts.edges.map((edge: { node: any; }) => edge.node);

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