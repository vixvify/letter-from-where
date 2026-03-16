export function loopSegment(
  video: HTMLVideoElement,
  start: number,
  end: number,
) {
  if (video.currentTime >= end) {
    video.currentTime = start;
  }
}
