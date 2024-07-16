function imageLoader({ src }: {src : string}) {
    return `/images/${src}`;
}

module.exports = imageLoader;