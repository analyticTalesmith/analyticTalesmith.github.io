import { getPostBySlug, getPostSlugsForStaticNav } from '@/app/utils/posts';
import BlogPost from '@/app/components/(blog elements)/BlogPost';
import type { Metadata, ResolvingMetadata } from 'next'
import Container from '@/app/components/(main elements)/Container';
import Breadcrumb from '@/app/components/(blog elements)/Breadcrumbs';

//type BlogPageProps = {
//    params: BlogPageParams;
//}

//type BlogPageParams = {
//    slug: string;
//};
//export async function generateStaticParams() {
//    return getPostsForStaticNav();
//}


//export async function getStaticPaths() {
//    const posts = await getPostSlugsForStaticNav();
//    const paths = posts.map((post: { slug: any; }) => ({
//        params: { slug: post.slug }
//    }));

//    return {
//        paths,
//        fallback: false // Set to false if all posts are pre-rendered
//    };
//}


//export default async function Page({ params }: BlogPageProps) {
//    const { slug } = params;

//    const res = await getPostBySlug(slug);
//    if (res) {
//        return (
//            <div>
//                <Head>
//                    <title>PLEASE WORK</title>
//                </Head>
//                {/*<br /><br />*/}
//                {/*{res.content}<br /><br />*/}
//                < BlogPost htmlContent={res.content} />
//            </div>

//        )
//    } else {
//        return <div> Failed to load.</div>
//    }
//}


type BlogPageProps = {
    params: BlogPageParams;
}

type BlogPageParams = {
    slug: string;
};

export async function generateStaticParams() {
    return getPostSlugsForStaticNav();
}

export default async function Page({ params }: BlogPageProps) {
    const { slug } = params;

    const res = await getPostBySlug(slug);
    if (res) {
        return (
            <div className="flex-col">
                <Breadcrumb activeTitle={res.title} />
                <article className=" flex flex-col grow max-w-7xl pt-20 pb-24 space-y-12 text-on-background">
                    <h1 className="flex grow font-bold leading-tight text-4xl md:text-5xl">{res.title}</h1>
                    <Container className="flex-1 mt-12 mb-4 p-4 w-full">
                        < BlogPost htmlContent={res.content} />
                        </Container>
                </article>
            </div>

        )
    } else {
        return <div> Failed to load.</div>
    }
}

type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const slug = params.slug

    // fetch data
    const post = await getPostBySlug(slug);

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []
    if (post) {
        return {
            title: `${post.title} | Analytic Talesmith`,
        }
    } else {
        return {
            title: 'Analytic Talesmith'
        }
    }
}
