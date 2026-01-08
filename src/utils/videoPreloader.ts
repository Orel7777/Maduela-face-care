export interface PreloadProgress {
  loaded: number;
  total: number;
  percentage: number;
}

export const preloadVideo = (src: string): Promise<HTMLVideoElement> => {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    video.preload = 'auto';
    video.muted = true;
    video.playsInline = true;
    
    const onCanPlayThrough = () => {
      cleanup();
      resolve(video);
    };
    
    const onError = () => {
      cleanup();
      reject(new Error(`Failed to load video: ${src}`));
    };
    
    const cleanup = () => {
      video.removeEventListener('canplaythrough', onCanPlayThrough);
      video.removeEventListener('error', onError);
    };
    
    video.addEventListener('canplaythrough', onCanPlayThrough);
    video.addEventListener('error', onError);
    
    video.src = src;
    video.load();
  });
};

export const preloadVideos = (
  sources: string[],
  onProgress?: (progress: PreloadProgress) => void
): Promise<HTMLVideoElement[]> => {
  let loaded = 0;
  const total = sources.length;
  
  const updateProgress = () => {
    loaded++;
    if (onProgress) {
      onProgress({
        loaded,
        total,
        percentage: Math.round((loaded / total) * 100)
      });
    }
  };
  
  const promises = sources.map(src =>
    preloadVideo(src).then(video => {
      updateProgress();
      return video;
    })
  );
  
  return Promise.all(promises);
};
