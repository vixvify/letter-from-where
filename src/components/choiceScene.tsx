import { Scene } from "@/core/domain/scene";

type SceneProps = {
  scene: Scene;
};

export function ChoiceScene({ scene }: SceneProps) {
  if (scene.choice) {
    return (
      <div>
        <video src={scene.video} autoPlay />

        <button>{scene.choice.A}</button>
        <button>{scene.choice.B}</button>
        <button>{scene.choice.C}</button>
      </div>
    );
  }
}
