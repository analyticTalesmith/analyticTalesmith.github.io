function imageLoader({ src }: {src : string}) {
    return `/static/images/${src}`;
}

module.exports = imageLoader;