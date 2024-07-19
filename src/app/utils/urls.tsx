//import fs from 'fs';
//import path from 'path';

const baseUrl: string = process.env.NEXT_PUBLIC_BASE_URL || '';
const postDirectory: string = "/blog"

//export function replaceImageUrls(content: string | null | undefined): string {
//    if (!content) return '';

//    const publicImagesPath = path.join(process.cwd(), 'public', 'images');
//    const imageFilenames = fs.readdirSync(publicImagesPath);


//    const replacedContent = content.replace(/(?:http:\/\/localhost:10004\/wp-content\/uploads\/\d{4}\/\d{2}\/)([^",]+)/g, (match, imagePath) => {
//        const localImagePath = `/${path.basename(imagePath)}`; // Construct local path with forward slashes
//        const imageName = path.basename(imagePath);
//        const imageExists = imageFilenames.some((filename) => filename.startsWith(imageName)); // Check if filename exists locally
//        return imageExists ? localImagePath : match; // Replace with local path if image exists locally, otherwise keep original
//    });

//    return replacedContent;
//};


export function replaceImageUrls(content: string | null | undefined): string {
    if (!content) return '';
    

    const imageUrlRegex = /(?:http:\/\/localhost:10004\/wp-content\/uploads\/\d{4}\/\d{2}\/)([^",]+)/g;
    const imageFilenameRegex = /^(.+?)(?:-\d+x\d+)?(\.\w+)$/;

    const replacedContent = content.replace(imageUrlRegex, (match, imagePath) => {
        const imageName = imagePath.replace(imageFilenameRegex, "$1$2");
        return `/${imageName}`;
    });

    return replacedContent;
}

export function replaceNonimageUrls(content: string | null | undefined): string {
    if (!content) return '';
    return content.replace(/https?:\/\/localhost:10004(\/.*?)\/?$/gm, `${postDirectory}$1`);
};