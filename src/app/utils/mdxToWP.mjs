import { remark } from 'remark'
import remarkMdx from 'remark-mdx'
import remarkHtml from 'remark-html'
import axios from 'axios'
import pkg from '@next/env'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'


console.log("Initiating MDX to WP batch")

//Load Next.js env vars
const { loadEnvConfig } = pkg;
const projectDir = process.cwd();
const dev = process.env.NODE_ENV !== 'production';
loadEnvConfig(projectDir, dev);


//Constants
const wpApiUrl = 'http://analytictalesmithheadlesscms.local/wp-json';
const envUsername = process.env.NEXT_PUBLIC_WP_USERNAME;
const envPassword = process.env.NEXT_PUBLIC_WP_PASS;

async function mdxToHTML(mdxSource) {
    const { content, data } = matter(mdxSource);
    if (data.status != "Publish") {
        return null;
    }

    const file = await remark()
        .use(remarkMdx)
        .use(remarkHtml)
        .process(content);


    const pageData = {
        props: {
            content: String(file),
            frontMatter: data
        },
    }; 
    return pageData;
}

async function pushAllMDXPosts(authToken) {
    const mdxDirectory = path.join(projectDir, '/src/app/(mdxPosts)');

    const files = fs.readdirSync(mdxDirectory);
    for (const file of files) {
        const filePath = path.join(mdxDirectory, file);
        const mdxContent = fs.readFileSync(filePath, 'utf-8');
        const pageData = await mdxToHTML(mdxContent);

        if (pageData) {
            await createOrUpdatePost(pageData, authToken);
        }
        else {
            console.log("Skipped post that is not published")
        }

        //await createOrUpdatePost(postData);
    }
}

async function getAuthToken() {
    try {
        const response = await axios.post(`${wpApiUrl}/jwt-auth/v1/token`, {
            username: envUsername,
            password: envPassword
        });
        console.log("Token fetched successfully");
        return response.data.token; // Return the token
    } catch (error) {
        console.error("Error fetching token:", error.response ? error.response.data : error.message);
        return null;
    }
}

async function testPost(postData, authToken) {

    await axios.post(`${wpApiUrl}/wp/v2/posts`, postData, {
        headers: { 'Authorization': `Bearer ${authToken}`, 'Content-Type': 'application/json' }
    })

        .then(function (response) {
            console.log("Posted successfully");
        })

        .catch(function (error) {
            console.error(error);
        });
}

async function createOrUpdatePost(pageData, authToken) {
    const postData = {
        title: pageData.props.frontMatter.title,
        content: pageData.props.content,
        categories: [50],
        status: 'publish',
        slug: pageData.props.frontMatter.slug
    };
    
    const existingPost = await findPostBySlug(pageData.props.frontMatter.slug, authToken);

    if (existingPost) {
        await axios.put(`${wpApiUrl}/wp/v2/posts/${existingPost.id}`, postData, {
            headers: { 'Authorization': `Bearer ${authToken}`, 'Content-Type': 'application/json' }
        });
        console.log(`Post ${existingPost.id}: ${existingPost.title.rendered} updated successfully`);
    } else {
        await axios.post(`${wpApiUrl}/wp/v2/posts`, postData, {
            headers: { 'Authorization': `Bearer ${authToken}`, 'Content-Type': 'application/json' }
        });
        console.log(`Post created successfully`);
    }
}


async function findPostBySlug(slug, authToken) {
    try {
        const response = await axios.get(`${wpApiUrl}/wp/v2/posts?slug=${slug}`, {
            headers: { 'Authorization': `Bearer ${authToken}` }
        });
        return response.data.length > 0 ? response.data[0] : null;
    } catch (error) {
        console.error('Error fetching post by slug:', error);
    }
}

(async () => {
    const authToken = await getAuthToken();

    if (authToken) {
        pushAllMDXPosts(authToken);
    } else {
        console.error("No auth token, cannot post.");
    }
})();


//async function mdxToHtml(mdxContent) {
//  const file = await remark().use(html).process(await mdx(mdxContent));
//  return String(file);
//}

//async function findPostBySlug(slug) {
//    try {
//        const response = await axios.get(`${wpApiUrl}/posts?slug=${slug}`, {
//            headers: { 'Authorization': `Basic ${token}` }
//        });
//        return response.data.length > 0 ? response.data[0] : null;
//    } catch (error) {
//        console.error('Error fetching post by slug:', error);
//    }
//}

//async function createOrUpdatePost(postData) {
//    const existingPost = await findPostBySlug(postData.slug);

//    if (existingPost) {
//        await axios.put(`${wpApiUrl}/posts/${existingPost.id}`, postData, {
//            headers: { 'Authorization': `Basic ${token}`, 'Content-Type': 'application/json' }
//        });
//        console.log(`Post ${existingPost.id} updated successfully`);
//    } else {
//        await axios.post(`${wpApiUrl}/posts`, postData, {
//            headers: { 'Authorization': `Basic ${token}`, 'Content-Type': 'application/json' }
//        });
//        console.log(`Post created successfully`);
//    }
//}

//async function automateMdxPosts() {
//    const mdxDirectory = path.join(__dirname, 'your-mdx-files-dir');

//    const files = fs.readdirSync(mdxDirectory);
//    for (const file of files) {
//        const filePath = path.join(mdxDirectory, file);
//        const mdxContent = fs.readFileSync(filePath, 'utf-8');
//        const convertedHtml = await mdxToHtml(mdxContent);

//        const postData = {
//            title: file.replace('.mdx', ''),
//            content: convertedHtml,
//            categories: [mdxCategoryId],
//        };

//        await createOrUpdatePost(postData);
//    }
//}

/*automateMdxPosts();*/