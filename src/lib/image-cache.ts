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

const videoCache = new Map<string, HTMLVideoElement>();

export const preloadVideo = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (videoCache.has(src)) {
      resolve();
      return;
    }

    const video = document.createElement("video");

    video.src = src;
    video.preload = "auto";
    video.muted = true;
    video.playsInline = true;

    const onLoaded = () => {
      videoCache.set(src, video);
      cleanup();
      resolve();
    };

    const onError = () => {
      cleanup();
      reject(new Error("Video preload failed"));
    };

    const cleanup = () => {
      video.removeEventListener("loadeddata", onLoaded);
      video.removeEventListener("error", onError);
    };

    video.addEventListener("loadeddata", onLoaded);
    video.addEventListener("error", onError);
  });
};

export const getCachedVideo = (src: string) => {
  return videoCache.get(src);
};
