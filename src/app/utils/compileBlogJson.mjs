import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'
import pkg from '@next/env'

//Load Next.js env vars
const { loadEnvConfig } = pkg;
const projectDir = process.cwd();
const dev = process.env.NODE_ENV !== 'production';
loadEnvConfig(projectDir, dev);


import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const fetchBlogPostDB = async () => {
    const query = `{
      posts(where: {status: PUBLISH}) {
        edges {
          node {
            id
            title
            uri
            date
            modified
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
            excerpt
            categories {
              nodes {
                name
              }
            }
            tags {
              nodes {
                name
              }
            }
          }
        }
      }
}`;

    const response = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(query)}`, { next: { revalidate: 60 } });
    if (!response.ok) {
        throw new Error('Blog post DB construction failed at initial fetch');
    }

    const data = await response.json(); 

    const posts = data.data.posts.edges;

    const filteredPosts = posts.filter(post =>
        !post.node.categories.nodes.some(category => category.name === 'MDX')
    );

    for (var post in filteredPosts) {
        if (filteredPosts[post].node.featuredImage) {
            var newUrl = replaceImageUrls(filteredPosts[post].node.featuredImage.node.sourceUrl)
            filteredPosts[post].node.featuredImage.node.sourceUrl = newUrl;
        }

    }

    //Save to /public/data
    const postSavePath = path.join(__dirname, '../../../public/static/data/blogPosts.json');


    const dir = path.dirname(postSavePath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    await fs.writeFileSync(postSavePath, JSON.stringify(filteredPosts, null, 4))

    //const posts = data.data.posts.nodes.map((post: { slug: string }) => post.slug);

};


function replaceImageUrls(content) {
    if (!content) return '';


    const imageUrlRegex = /(?:http:\/\/analytictalesmithheadlesscms.local\/wp-content\/uploads\/\d{4}\/\d{2}\/)([^",]+)/g;
    const imageFilenameRegex = /^(.+?)(?:-\d+x\d+)?(\.\w+)$/;

    const replacedContent = content.replace(imageUrlRegex, (match, imagePath) => {
        const imageName = imagePath.replace(imageFilenameRegex, "$1$2");
        return `${imageName}`;
    });

    return replacedContent;
}


const fetchWordpressPosts = async () => {
    const query = `{
                      posts(where: {status: PUBLISH}, first: 99999) {
                        edges {
                          node {
                            id
                            title
                            slug
                            date
                            modified
                            featuredImage {
                              node {
                                sourceUrl
                                altText
                              }
                            }
                            excerpt
                            categories {
                              nodes {
                                name
                              }
                            }
                            tags {
                              nodes {
                                name
                              }
                            }
                            relatedPosts {
                              nodes {
                                slug
                              }
                            }
                          }
                        }
                      }
                    }`;

    const response = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(query)}`, { next: { revalidate: 60 } });
    if (!response.ok) {
        throw new Error('Blog post DB construction failed at initial fetch');
    }

    const data = await response.json();
    const posts = data.data.posts.edges;

    const filteredPosts = posts.filter(post =>
        !post.node.categories.nodes.some(category => category.name === 'MDX')
    );

    for (var post in filteredPosts) {
        if (filteredPosts[post].node.featuredImage) {
            var newUrl = replaceImageUrls(filteredPosts[post].node.featuredImage.node.sourceUrl)
            filteredPosts[post].node.featuredImage.node.sourceUrl = newUrl;
        }
    }

    return (filteredPosts)

};

async function fetchPostCloneFromSlug(slug) {
    const query = ` {
                        post(id: "${slug.toLowerCase()}", idType:SLUG){
                            id
                            date
                            modified
                            relatedPosts {
                                nodes {
                                slug
                                }
                            }
                    }}`

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(query)}`,
        { next: { revalidate: 60 } }
    );

    const postJson = await response.json();
    const post = postJson.data?.post;

    return post;
}
function mdxListToNodes(inJSON) {
    let nodes = []

    for (const element of inJSON) {
        nodes.push({ "name": element})
    }

    return(nodes)

}

async function loadAllMDXPosts() {
    const mdxDirectory = path.join(process.cwd(), '/src/app/(mdxPosts)');
    let mdxPost = []

    const files = fs.readdirSync(mdxDirectory);
    for (const file of files) {
        const filePath = path.join(mdxDirectory, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { content, data } = matter(fileContent);

        if (data && data.status == "Publish") {
            const cloneData = await fetchPostCloneFromSlug(data.slug)
            if (!cloneData) {
                console.error("Unable to load post clone");
            }
            else {
                let cats = mdxListToNodes(data.categories);
                let tags = mdxListToNodes(data.tags);
                let postData =
                    {
                        "node": {
                            "id": cloneData.id,
                            "title": data.title,
                            "slug": `${data.slug}`,
                            "date": cloneData.date,
                            "modified": cloneData.modified,
                            "featuredImage": {
                                "node": {
                                    "sourceUrl": data.featuredImageUrl,
                                    "altText": data.featuredImageAlt
                                }
                            },
                            "excerpt": data.excerpt,
                            "categories": {
                                "nodes": cats
                            },
                            "tags": {
                                "nodes": tags
                            },
                            "relatedPosts": {
                                "nodes": cloneData.relatedPosts.nodes
                            }
                        }
                }
                mdxPost.push(postData);
                //return posts.sort((a: Post, b: Post) => {
                //    if (a.date < b.date) {
                //        return 1;
                //    } else {
                //        return -1;
                //    }
                //}
            }
        }
        else {
            console.log("Skipped post that is not published")
        }

        //await createOrUpdatePost(postData);
    }
    return(mdxPost)
}

async function combineAndSortPosts(WPPosts, MDXPosts) {
    let finPostList = WPPosts;
    for (const mdxPost in MDXPosts) {
        finPostList.push(MDXPosts[mdxPost])
    }

    finPostList.sort((a, b) => {
        if (a.node.date < b.node.date) {
            return 1;
        } else {
            return -1;
        }
    });

    return(finPostList);
}

async function savePostDBList(sortedPostData) {
    const postSavePath = path.join(process.cwd(), '/public/static/data/blogPosts.json');


    const dir = path.dirname(postSavePath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    await fs.writeFileSync(postSavePath, JSON.stringify(sortedPostData, null, 4))
}

const compilePostDB = async () => {
    let WPPosts = await fetchWordpressPosts();
    console.log("So fetch - wordpress");
    let MDXPosts = await loadAllMDXPosts();
    console.log("So fetch - mdx");
    let sortedPosts = await combineAndSortPosts(WPPosts, MDXPosts);
    savePostDBList(sortedPosts);
}


compilePostDB()
    .then(() => {
        console.log('Posts fetched, compiled, and saved successfully');
    })
    .catch((error) => {
        console.error('Error generating blog DB:', error);
    });