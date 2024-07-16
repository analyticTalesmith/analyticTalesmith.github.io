/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        loader: 'custom',
        loaderFile: './image-loader.ts',
    },
    reactStrictMode: true,
};

export default nextConfig;
