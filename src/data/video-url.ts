export const CommonSceneUrls = Object.fromEntries(
  Array.from({ length: 113 }, (_, i) => {
    const id = i + 1;
    return [`scene_${id}`, process.env[`NEXT_PUBLIC_URL_SCENE_${id}`]];
  }),
) as Record<string, string | undefined>;

export const CustomSceneUrls: Record<string, string | undefined> = {
  society_common: process.env.NEXT_PUBLIC_URL_SOCIETY_COMMON,
  society_scary: process.env.NEXT_PUBLIC_URL_SOCIETY_SCARY,
  society_excited: process.env.NEXT_PUBLIC_URL_SOCIETY_EXCITED,
  society_boring: process.env.NEXT_PUBLIC_URL_SOCIETY_BORING,
  society_scary_cu: process.env.NEXT_PUBLIC_URL_SOCIETY_SCARY_CLOSE_UP,
  society_excited_cu: process.env.NEXT_PUBLIC_URL_SOCIETY_EXCITED_CLOSE_UP,
  society_boring_cu: process.env.NEXT_PUBLIC_URL_SOCIETY_BORING_CLOSE_UP,
  letter: process.env.NEXT_PUBLIC_URL_LETTER,
};

export const SceneUrls: Record<string, string | undefined> = {
  ...CommonSceneUrls,
  ...CustomSceneUrls,
  scene_15: process.env.NEXT_PUBLIC_URL_SOCIETY_COMMON,
  scene_19: process.env.NEXT_PUBLIC_URL_SOCIETY_SCARY,
  scene_21: process.env.NEXT_PUBLIC_URL_VIDEO_SOCIETY_SCARY,
  scene_22: process.env.NEXT_PUBLIC_URL_SOCIETY_EXCITED,
  scene_24: process.env.NEXT_PUBLIC_URL_VIDEO_SOCIETY_EXCITED,
  scene_25: process.env.NEXT_PUBLIC_URL_SOCIETY_BORING,
  scene_27: process.env.NEXT_PUBLIC_URL_VIDEO_SOCIETY_BORING,
  scene_99: process.env.NEXT_PUBLIC_URL_LETTER,
  scene_110: process.env.NEXT_PUBLIC_URL_LETTER,
};
