import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export function CameraRig({ intensity = 0.35, children }) {
  const group = useRef();
  const target = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    target.current.x += (state.pointer.x * intensity - target.current.x) * 0.04;
    target.current.y += (state.pointer.y * intensity - target.current.y) * 0.04;
    if (group.current) {
      group.current.rotation.y = target.current.x;
      group.current.rotation.x = -target.current.y * 0.35;
    }
    state.camera.lookAt(0, 0, 0);
  });

  return <group ref={group}>{children}</group>;
}
