import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        loader: 'custom',
        loaderFile: './image-loader.ts',
    },
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    reactStrictMode: true,
}

const withMDX = createMDX({
    //Add md plugins here as needed
})


export default withMDX(nextConfig)
