import { getPostBySlug, getPostsForStaticNav } from "@/app/utils/posts";
import BlogPost from "@/app/components/BlogPost";

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
    const { slug } = params;

    const res = await getPostBySlug(slug);
    if (res) {
        return (
            <div>Success. Loaded {res.title}
                <br /><br />
                {res.content}<br /><br />
                < BlogPost htmlContent={res.content} />
            </div>

        )
    } else {
        return <div> Failed to load.</div>
    }
}