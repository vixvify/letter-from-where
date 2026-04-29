type Channel = "bgm" | "ambient" | "sfx";

type ChannelState = {
  audio: HTMLAudioElement;
  src: string;
};

type PlayOptions = {
  fadeIn?: number;
  loop?: boolean;
  volume?: number;
};

const channels: Record<Channel, ChannelState | null> = {
  bgm: null,
  ambient: null,
  sfx: null,
};

const fade = (
  audio: HTMLAudioElement,
  from: number,
  to: number,
  duration: number,
) => {
  const steps = 20;
  const stepTime = duration / steps;
  const delta = (to - from) / steps;

  let volume = from;
  audio.volume = volume;

  const interval = setInterval(() => {
    volume += delta;
    audio.volume = Math.max(0, Math.min(1, volume));

    if ((delta > 0 && volume >= to) || (delta < 0 && volume <= to)) {
      audio.volume = to;
      clearInterval(interval);
    }
  }, stepTime);
};

export const play = (channel: Channel, src: string, options?: PlayOptions) => {
  const current = channels[channel];

  if (current && current.src === src) {
    return;
  }

  if (current) {
    fade(current.audio, current.audio.volume, 0, options?.fadeIn ?? 800);
    setTimeout(() => current.audio.pause(), options?.fadeIn ?? 800);
  }

  const audio = new Audio(src);
  audio.loop = options?.loop ?? true;

  const targetVolume = options?.volume ?? 1;
  audio.volume = 0;

  audio.play().catch(console.error);

  fade(audio, 0, targetVolume, options?.fadeIn ?? 800);

  channels[channel] = { audio, src };
};

export const stop = (channel: Channel, options?: { fadeOut?: number }) => {
  const current = channels[channel];
  if (!current) return;

  const duration = options?.fadeOut ?? 800;

  fade(current.audio, current.audio.volume, 0, duration);

  setTimeout(() => {
    current.audio.pause();
    current.audio.currentTime = 0;
  }, duration);

  channels[channel] = null;
};
