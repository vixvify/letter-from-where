type SceneId = `scene_${number}`;

export const SceneUrls = Object.fromEntries(
  Array.from({ length: 50 }, (_, i) => {
    const id = i + 1;
    return [`scene_${id}`, process.env[`NEXT_PUBLIC_URL_SCENE_${id}`]];
  }),
) as Record<SceneId, string | undefined>;
