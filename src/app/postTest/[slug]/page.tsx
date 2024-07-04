import { getPostBySlug, getPostsForStaticNav } from "@/app/utils/posts";

type BlogPageProps = {
    params: BlogPageParams;
}

type BlogPageParams = {
    slug: string;
};
export async function generateStaticParams() {
    return getPostsForStaticNav();
}

export default async function Page({ params }:BlogPageProps) {
    console.log(typeof params)
    const { slug } = params;

    const res = await getPostBySlug(slug);
    
    return (
        <div>Success. Loaded {res.title}</div>
    )
}