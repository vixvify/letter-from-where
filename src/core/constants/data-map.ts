import { ChoiceKey } from "../domain/choice";

const Scene18Map: Record<ChoiceKey, string> = {
  A: "น่ากลัว",
  B: "น่าสนุก",
  C: "น่าเบื่อ",
};

const Scene29Map: Record<ChoiceKey, string> = {
  A: "มี",
  B: "ไม่มี",
  C: "ไม่แน่ใจ",
};

const Scene40Map: Record<ChoiceKey, string> = {
  A: "ได้แน่นอน เก่งในแบบของหนูเอง",
  B: "พี่ไม่ได้เก่งอะไรเลย..แต่หนูจะทำได้",
  C: "พี่ก็ยังไม่รู้ว่าตัวเองเก่งมั้ย",
};

const Scene52Map: Record<ChoiceKey, string> = {
  A: "ได้อยู่แล้ว",
  B: "ไม่แน่ใจ",
  C: "ไม่รู้สิ",
};

const Scene69Map: Record<ChoiceKey, string> = {
  A: "มีสิ",
  B: "มีบ้างแหละ",
  C: "ไม่ค่อยมีหรอก",
};

const Scene94Map: Record<ChoiceKey, string> = {
  A: "เดินต่อไป",
  B: "หยุดรอซักหน่อย",
  C: "",
};

const sceneMaps = {
  scene_18: Scene18Map,
  scene_29: Scene29Map,
  scene_40: Scene40Map,
  scene_52: Scene52Map,
  scene_69: Scene69Map,
  scene_94: Scene94Map,
} as const;

export default function mapChoice<T extends keyof typeof sceneMaps>(
  key: T,
  value: string | undefined,
) {
  if (!value) throw new Error(`${key} is missing`);
  return sceneMaps[key][value as ChoiceKey];
}
