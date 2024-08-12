import fs from 'fs';
import path from 'path';

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

    const response = await fetch(`http://analytictalesmithheadlesscms.local/graphql?query=${encodeURIComponent(query)}`, { next: { revalidate: 60 } });
    if (!response.ok) {
        throw new Error('Blog post DB construction failed at initial fetch');
    }

    const data = await response.json(); 

    const posts = data.data.posts.edges;

    for (var post in posts) {
        if (posts[post].node.featuredImage) {
            var newUrl = replaceImageUrls(posts[post].node.featuredImage.node.sourceUrl)
            posts[post].node.featuredImage.node.sourceUrl = newUrl;
        }

    }

    //Save to /public/data
    const postSavePath = path.join(__dirname, '../../../public/static/data/blogPosts.json');


    const dir = path.dirname(postSavePath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    await fs.writeFileSync(postSavePath, JSON.stringify(posts, null, 4))

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


fetchBlogPostDB()
    .then(() => {
        console.log('Posts fetched, compiled, and saved successfully');
    })
    .catch((error) => {
        console.error('Error generating blog DB:', error);
    });