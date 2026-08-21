import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export function FloatingGeometry() {
  const mesh = useRef();
  const ring = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (mesh.current) {
      mesh.current.rotation.x = t * 0.12;
      mesh.current.rotation.y = t * 0.18;
      mesh.current.position.y = Math.sin(t * 0.6) * 0.18;
    }
    if (ring.current) {
      ring.current.rotation.z = t * 0.15;
      ring.current.rotation.x = 0.6 + Math.sin(t * 0.2) * 0.1;
    }
  });

  return (
    <group>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.35, 0]} />
        <meshPhysicalMaterial
          color="#8aa0ff"
          metalness={0.92}
          roughness={0.18}
          transmission={0.22}
          thickness={0.6}
          envMapIntensity={1.2}
          clearcoat={1}
          clearcoatRoughness={0.12}
        />
      </mesh>
      <mesh ref={ring} scale={1.85}>
        <torusGeometry args={[1.1, 0.012, 8, 64]} />
        <meshStandardMaterial color="#6B8AFF" metalness={1} roughness={0.2} />
      </mesh>
    </group>
  );
}
