const imagePaths = (type, id, count, extension) =>
  Array.from({ length: count }, (_, index) => {
    const imageNumber = index + 1;
    return `/images/${type}/${id}/${id}.${imageNumber}.${extension}`;
  });

const teamImageNames = {
  1: "Ashutosh_Pratap_Singh",
  2: "Taru_Singh",
  3: "Surendra_Pal_Singh",
  4: "Chhavi_Singh",
  5: "Tulika_Singh",
};

const productAssets = import.meta.glob("../../../public/images/Products/*", {
   eager: true,
   query: "?url",
   import: "default",
});

const getProductAssets = (productId) => {
   const imagePattern = new RegExp(`^${productId}\\.(\\d+)\\.(png|jpe?g)$`, "i");

   return Object.entries(productAssets)
     .map(([filePath]) => {
       const fileName = filePath.split("/").pop() || "";
       return {
         image: encodeURI(`/images/Products/${fileName}`),
         fileName,
         match: fileName.match(imagePattern),
       };
     })
     .filter((asset) => asset.match)
     .sort((firstAsset, secondAsset) => Number(firstAsset.match[1]) - Number(secondAsset.match[1]));
};

export const getProductImages = (productId, count) => {
   const images = getProductAssets(productId).map((asset) => asset.image);
   return typeof count === "number" ? images.slice(0, count) : images;
};

export const getProductImageCount = (productId) => getProductAssets(productId).length || 1;

export const getProductFallbackImage = (category) => {
  if (category === "Home Care") return "/images/HomeCare.png";
  if (category === "Animal Care") return "/images/Animalcare.png";
  return "/images/Agriculture.png";
};

export const getTeamImages = (memberId, count = 1) => {
  const imageName = teamImageNames[memberId];
  if (!imageName) return [placeholderImage];
  return Array.from({ length: count }, () => `/images/team/${imageName}.png`);
};

const mediaAssets = import.meta.glob("../../../public/images/media/*", {
  eager: true,
  query: "?url",
  import: "default",
});

export const getMediaImages = (mediaId) => {
  const imagePattern = new RegExp(`^(m${mediaId}|news-${mediaId})\\.(png|jpe?g)$`, "i");

  return Object.entries(mediaAssets)
    .map(([filePath]) => {
      const fileName = filePath.split("/").pop() || "";
      return {
        image: encodeURI(`/images/media/${fileName}`),
        fileName,
      };
    })
    .filter((asset) => imagePattern.test(asset.fileName))
    .sort((firstAsset, secondAsset) => firstAsset.fileName.localeCompare(secondAsset.fileName))
    .map((asset) => asset.image);
};

export const getRecognitionImages = (recognitionId, count = 2) =>
  imagePaths("recognitions", recognitionId, count, "jpg");

const galleryAssets = import.meta.glob("../../../public/images/gallery/*", {
  eager: true,
  query: "?url",
  import: "default",
});

export const getGalleryImages = (divisionId) => {
  const imagePattern = new RegExp(`^${divisionId}\\.(\\d+)\\.(png|jpe?g)$`, "i");

  return Object.entries(galleryAssets)
    .map(([filePath]) => {
      const fileName = filePath.split("/").pop() || "";
      return {
        image: encodeURI(`/images/gallery/${fileName}`),
        fileName,
      };
    })
    .map((asset) => ({ ...asset, match: asset.fileName.match(imagePattern) }))
    .filter((asset) => asset.match)
    .sort((firstAsset, secondAsset) => Number(firstAsset.match[1]) - Number(secondAsset.match[1]))
    .map((asset) => asset.image);
};

export const placeholderImage = "/images/image-placeholder.svg";

export const handleImageError = (event) => {
  if (event.currentTarget.src.endsWith(placeholderImage)) return;
  event.currentTarget.src = placeholderImage;
};
