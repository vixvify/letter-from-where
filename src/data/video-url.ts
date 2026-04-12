export const CommonSceneUrls = Object.fromEntries(
  Array.from({ length: 50 }, (_, i) => {
    const id = i + 1;
    return [`scene_${id}`, process.env[`NEXT_PUBLIC_URL_SCENE_${id}`]];
  }),
) as Record<string, string | undefined>;

export const SceneUrls: Record<string, string | undefined> = {
  ...CommonSceneUrls,
  scene_15: process.env.NEXT_PUBLIC_URL_SOCIETY_COMMON,
  scene_19: process.env.NEXT_PUBLIC_URL_SOCIETY_SCARY,
  scene_22: process.env.NEXT_PUBLIC_URL_SOCIETY_EXCITED,
  scene_25: process.env.NEXT_PUBLIC_URL_SOCIETY_BORING,
};
