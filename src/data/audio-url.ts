export const AudioUrls = Object.fromEntries(
  Array.from({ length: 50 }, (_, i) => {
    const id = i + 1;
    return [`scene_${id}`, process.env[`NEXT_PUBLIC_URL_AUDIO_${id}`]];
  }),
) as Record<string, string | undefined>;
