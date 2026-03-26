"use client";

import { useSceneTransition } from "@/utils/transition";
import { CommonScene } from "@/components/commonScene";
import { ChoiceScene } from "@/components/choiceScene";
import InputScene from "@/components/inputScene";
import { Scene } from "@/core/domain/scene";

const SceneComponentMap = {
  common: CommonScene,
  choice: ChoiceScene,
  input: InputScene,
};

type SceneProps = {
  scene: Scene;
};

export default function SceneClient({ scene }: SceneProps) {
  const { goTo } = useSceneTransition();

  const Component = SceneComponentMap[scene.type];

  return (
    <>
      <Component scene={scene} goTo={goTo} />
    </>
  );
}
