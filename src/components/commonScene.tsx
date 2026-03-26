import { Scene } from "@/data/story";
import { useRouter } from "next/navigation";

type SceneProps = {
  scene: Scene;
};

export function CommonScene({ scene }: SceneProps) {
  const router = useRouter();
  return (
    <div onClick={() => router.replace(`/scene/${scene.next}`)}>
      <video src={scene.video} autoPlay />
      {scene.next && <button>Next</button>}
    </div>
  );
}
