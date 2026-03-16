export function isPastTime(video: HTMLVideoElement, time: number) {
  return video.currentTime >= time;
}
