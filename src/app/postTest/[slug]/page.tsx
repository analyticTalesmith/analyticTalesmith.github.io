import { getPostBySlug, getPostsForStaticNav } from "@/app/utils/posts";

export async function generateStaticParams() {
    return getPostsForStaticNav();
}

export default async function Page({ params }) {
    const { slug } = params;

    const res = await getPostBySlug(slug);
    
    return (
        <div>Success. Loaded {res.title}</div>
    )
}