export function changeVideo(video: HTMLVideoElement, src: string) {
  video.src = src;
  video.currentTime = 0;
  video.play();
}
