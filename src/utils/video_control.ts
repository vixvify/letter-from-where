export function playVideo(video: HTMLVideoElement) {
  video.play();
}

export function pauseVideo(video: HTMLVideoElement) {
  video.pause();
}

export function seekVideo(video: HTMLVideoElement, time: number) {
  video.currentTime = time;
}
