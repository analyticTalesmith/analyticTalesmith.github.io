import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url'; // Import fileURLToPath function
const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
    const res = await fetch('http://analytictalesmithheadlesscms.local/wp-json/wp/v2/media');
    if (!res.ok) {
        throw new Error(`Failed to fetch images: ${res.statusText}`);
    }
    const images = await res.json();

    images.forEach((image) => {
        const imageUrl = image.source_url;
        const imageName = path.basename(imageUrl);
        const imagePath = path.join(__dirname, '../../../public/static/images', imageName);
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
