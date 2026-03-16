function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runTransition(
  setTransition: (value: boolean) => void,
  duration = 700,
) {
  setTransition(true);
  await wait(duration);
}

export async function changeVideoWithTransition(
  video: HTMLVideoElement,
  src: string,
  setTransition: (value: boolean) => void,
) {
  await runTransition(setTransition);

  video.src = src;
  video.play();

  setTransition(false);
}
