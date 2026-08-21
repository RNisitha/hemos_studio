import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export function InteractiveObject({ scrollRef }) {
  const core = useRef();
  const wire = useRef();
  const orbit = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const scroll = scrollRef?.current ?? 0;
    if (core.current) {
      core.current.rotation.y = t * 0.22 + scroll * 2.2;
      core.current.rotation.x = 0.25 + scroll * 0.4;
      core.current.position.x = state.pointer.x * 0.25;
      core.current.position.y = state.pointer.y * 0.18;
    }
    if (wire.current) {
      wire.current.rotation.y = -t * 0.12 - scroll;
    }
    if (orbit.current) {
      orbit.current.rotation.z = t * 0.3;
      orbit.current.rotation.y = t * 0.18 + scroll;
    }
  });

  return (
    <group>
      <mesh ref={core}>
        <sphereGeometry args={[1.15, 32, 32]} />
        <meshPhysicalMaterial
          color="#d7deff"
          metalness={1}
          roughness={0.12}
          clearcoat={1}
          envMapIntensity={1.4}
        />
      </mesh>
      <mesh ref={wire} scale={1.32}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#6B8AFF" wireframe transparent opacity={0.35} />
      </mesh>
      <group ref={orbit}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.05, 0.008, 8, 96]} />
          <meshStandardMaterial color="#6B8AFF" metalness={0.8} roughness={0.25} />
        </mesh>
        <mesh position={[2.05, 0, 0]}>
          <sphereGeometry args={[0.07, 12, 12]} />
          <meshStandardMaterial color="#ffffff" emissive="#6B8AFF" emissiveIntensity={0.8} />
        </mesh>
      </group>
    </group>
  );
}
