const imageCache = new Map<string, HTMLImageElement>();

export const preloadImage = async (src: string) => {
  if (imageCache.has(src)) return;

  const img = new Image();
  img.src = src;
  await img.decode();

  imageCache.set(src, img);
};

export const getCachedImage = (src: string) => {
  return imageCache.get(src);
};
