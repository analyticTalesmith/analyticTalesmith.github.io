// app/utils/staticPosts.tsx

import posts from '../../../public/static/data/blogPosts.json';

const jsonList = posts;
var postList: Post[] = [];
for (var post in jsonList) {
    postList.push(transformPost(jsonList[post].node))
}

export function LoadPostDBJSON() {
    return postList;
}

export function LoadPostsFromDBByIndex(start: number, end: number) {
    if (start < 0) {
        throw new Error('Invalid start index for loading post DB')
    }
    if (end+1 > postList.length) {
        throw new Error('Invalid end index for loading post DB')
    }
    return postList.slice(start, end+1);
}


export function ifPostHasCategory(post: Post, category: string): boolean {
    for (var node in post.categories.nodes) {
        if (post.categories.nodes[node].name.toLowerCase() === category) {
            return true;
        }
    }
    return false;
}

/* True if any named category nodes are present; false if not */
export function ifPostIsCategorized(post: Post): boolean {
    for (var node in post.categories.nodes) {
        if (post.categories.nodes[node].name && post.categories.nodes[node].name.toLowerCase() !== "uncategorized") {
            return true;
        }
    }
    return false;
}

export function getCategoryList(post: Post): string[] {

    var categories: string[] = []

    for (var node in post.categories.nodes) {
        if (post.categories.nodes[node].name && post.categories.nodes[node].name.toLowerCase() !== "uncategorized") {
            categories.push(post.categories.nodes[node].name)
        }
    }
    return categories;
}

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

function transformPost(rawPost: any): Post {
    return {
        id: rawPost.id,
        title: rawPost.title,
        uri: rawPost.uri,
        date: new Date(rawPost.date),
        featuredImage: rawPost.featuredImage ? {
            node: {
                sourceUrl: rawPost.featuredImage.node.sourceUrl,
                altText: rawPost.featuredImage.node.altText
            }
        } : null,
        excerpt: rawPost.excerpt,
        categories: {
            nodes: rawPost.categories.nodes.map((node: any) => ({
                name: node.name
            }))
        },
        tags: {
            nodes: rawPost.tags.nodes.map((node: any) => ({
                name: node.name
            }))
        }
    };
}

