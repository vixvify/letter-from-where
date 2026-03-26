import { ScenesData } from "@/data/story";
import { CommonScene } from "@/components/commonScene";
import { ChoiceScene } from "@/components/choiceScene";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    scene_no: string;
  };
};

const SceneComponentMap = {
  common: CommonScene,
  choice: ChoiceScene,
};

export default async function ScenePage({ params }: PageProps) {
  const { scene_no } = await params;

  const scene = ScenesData[scene_no];

  if (!scene) {
    return notFound();
  }

  const Component = SceneComponentMap[scene.type];

  return <Component scene={scene} />;
}
