"use client";

import { useSceneTransition } from "@/hooks/transition";
import { CommonScene } from "@/components/scene/Common";
import { ChoiceScene } from "@/components/scene/Choice";
import { InputScene } from "@/components/scene/Input";
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
