// Credits to https://equk.co.uk/2023/02/02/generating-slug-from-title-in-astro/
function slugify(title: string) {
    return (
        title
            // remove leading & trailing whitespace
            .trim()
            // remove special characters
            .replace(/[^A-Za-z0-9 ]/g, '')
            // replace spaces
            .replace(/\s+/g, '-')
            // remove leading & trailing separtors
            .replace(/^-+|-+$/g, '')
            // output lowercase
            .toLowerCase()
    )
}

function pathToChild(currentPath: string, childPath: string) {
    const cleanedCurrentPath = currentPath.replace(/^\/+|\/+$/g, '')
    return `/${cleanedCurrentPath}/${childPath}`
}

export {
    slugify,
    pathToChild
}