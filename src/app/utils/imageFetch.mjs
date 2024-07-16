import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url'; // Import fileURLToPath function
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//export interface WordpressImage {
//    id: number;
//    date: Date;
//    dateGmt: Date;
//    guid: Caption;
//    modified: Date;
//    modifiedGmt: Date;
//    slug: string;
//    status: string;
//    type: string;
//    link: string;
//    title: Caption;
//    author: number;
//    featuredMedia: number;
//    commentStatus: string;
//    pingStatus: string;
//    template: string;
//    meta: Meta;
//    aioseoNotices: any[];
//    description: Caption;
//    caption: Caption;
//    altText: string;
//    mediaType: string;
//    mimeType: string;
//    mediaDetails: MediaDetails;
//    post: number;
//    sourceURL: string;
//    links: Links;
//}

//export interface Caption {
//    rendered: string;
//}

//export interface Links {
//    self: About[];
//    collection: About[];
//    about: About[];
//    author: Author[];
//    replies: Author[];
//}

//export interface About {
//    href: string;
//}

//export interface Author {
//    embeddable: boolean;
//    href: string;
//}

//export interface MediaDetails {
//    width: number;
//    height: number;
//    file: string;
//    filesize: number;
//    sizes: Sizes;
//    imageMeta: ImageMeta;
//}

//export interface ImageMeta {
//    aperture: string;
//    credit: string;
//    camera: string;
//    caption: string;
//    createdTimestamp: string;
//    copyright: string;
//    focalLength: string;
//    iso: string;
//    shutterSpeed: string;
//    title: string;
//    orientation: string;
//    keywords: any[];
//}

//export interface Sizes {
//    medium: Full;
//    thumbnail: Full;
//    yarppThumbnail: Full;
//    full: Full;
//}

//export interface Full {
//    file: string;
//    width: number;
//    height: number;
//    mimeType: string;
//    sourceURL: string;
//    filesize?: number;
//}

//export interface Meta {
//    omDisableAllCampaigns: boolean;
//    monsterinsightsSkipTracking: boolean;
//    monsterinsightsSitenoteActive: boolean;
//    monsterinsightsSitenoteNote: string;
//    monsterinsightsSitenoteCategory: number;
//}


const downloadImage = async (url, filepath) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch image from ${url}: ${response.statusText}`);
    }
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const dir = path.dirname(filepath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(filepath, buffer);
};

const fetchImages = async () => {
    const res = await fetch('http://localhost:10004/wp-json/wp/v2/media');
    if (!res.ok) {
        throw new Error(`Failed to fetch images: ${res.statusText}`);
    }
    const images = await res.json();

    images.forEach((image) => {
        const imageUrl = image.source_url;
        const imageName = path.basename(imageUrl);
        const imagePath = path.join(__dirname, '../../../public/images', imageName);
        downloadImage(imageUrl, imagePath);
    });
};

fetchImages()
    .then(() => {
        console.log('Images fetched and downloaded successfully');
    })
    .catch((error) => {
        console.error('Error fetching images:', error);
    });

//const downloadImage = async (url: string, filepath: string): Promise<void> => {
//    const response = await fetch(url);
//    if (!response.ok) {
//        throw new Error(`Failed to fetch image from ${url}: ${response.statusText}`);
//    }
//    const arrayBuffer = await response.arrayBuffer();
//    const buffer = Buffer.from(arrayBuffer);
//    fs.writeFileSync(filepath, buffer);
//};

//const fetchImages = async () => {
//    const res = await fetch('http://localhost:10004/wp-json/wp/v2/media');
//    const images = await res.json();

//    images.forEach((image: WordpressImage) => {
//        const imageUrl = image.sourceURL;
//        const imageName = path.basename(imageUrl);
//        const imagePath = path.join(__dirname, 'public/images', imageName);
//        downloadImage(imageUrl, imagePath);
//    });
//};

//fetchImages();
