const getImagePath = (imagePath?: string, fullSize?: boolean) => {
    return imagePath
    ? `https://image.tmdb.org/t/p/${fullSize ? "original" : "w500"}/${imagePath}`
    : "https://placehold.co/600x400?text=No+Image"
}

export default getImagePath;