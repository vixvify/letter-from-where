import { ScenesData } from "@/data/story";
import { CommonScene } from "@/components/commonScene";
import { ChoiceScene } from "@/components/choiceScene";

type PageProps = {
  params: {
    scene_no: string;
  };
};

const SceneComponentMap = {
  common: CommonScene,
  choice: ChoiceScene,
};

export default function ScenePage({ params }: PageProps) {
  const scene = ScenesData[params.scene_no];

  const Component = SceneComponentMap[scene.type];

  return <Component scene={scene} />;
}
