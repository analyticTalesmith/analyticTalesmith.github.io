import { getPostBySlug, getPostSlugsForStaticNav } from '@/app/utils/posts'
import BlogPost from '@/app/components/(blog elements)/BlogPost'
import type { Metadata, ResolvingMetadata } from 'next'
import Container from '@/app/components/(main elements)/Container'
import Breadcrumb from '@/app/components/(blog elements)/Breadcrumbs'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'

import { LogoFullColor } from '@/app/components/(SVGs)/Logo'


type BlogPageProps = {
    params: BlogPageParams;
}

type BlogPageParams = {
    slug: string;
};

export async function generateStaticParams() {
    let slugs = await getPostSlugsForStaticNav();

    if (slugs) {
        const res = slugs.map((entry: any) => ({
            slug: entry.slug
        }));

        return (res);
    }
    else return [];
    
}

export default async function Page({ params }: BlogPageProps) {
    //Pull the slug
    const { slug } = params;


    //Check if the slug exists in the mdxPost directory
    const mdxPath = path.join(process.cwd(), 'src/app/(mdxPosts)', `${slug}.mdx`);
    if (fs.existsSync(mdxPath)) {
        const mdxSource = fs.readFileSync(mdxPath, 'utf8');
        const { content, data } = matter(mdxSource);
        /*const mdx = await serialize(content, { scope: data });*/

        const pageData = {
            props: {
                content,
                frontMatter: data,
                source: 'mdx',
            },
        }; 

        const componentsList = {
            LogoFullColor,
        };

        return (
            <div className="flex-col">
                <Breadcrumb activeTitle={pageData.props.frontMatter.title} />
                <article className="flex flex-col grow max-w-7xl py-10 space-y-12">
                    <h1 className="flex grow font-bold leading-tight text-4xl md:text-5xl">{pageData.props.frontMatter.title}</h1>
                    <Container className="mt-12 mb-4 p-4 w-full">
                        <div className="mx-auto prose py-2 md:py-4 md:prose-lg lg:py-8 lg:prose-xl font-jost">
                            <MDXRemote source={pageData.props.content} components={componentsList} />
                        </div>
                    </Container>
                </article>
            </div>)

    }

    //If no MDX found, try to fetch from Wordpress CMS
    const res = await getPostBySlug(slug);
    if (res) {
        return (
            <div className="flex-col">
                <Breadcrumb activeTitle={res.title} />
                <article className="flex flex-col grow max-w-7xl py-10 space-y-12">
                    <h1 className="flex grow font-bold leading-tight text-4xl md:text-5xl">{res.title}</h1>
                    <Container className="mt-12 mb-4 p-4 w-full ">
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
