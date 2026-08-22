import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function FloatingGeometry() {
  const vessel = useRef();
  const liquid = useRef();
  const surface = useRef();
  const bottleProfile = useMemo(() => [
    new THREE.Vector2(0, -1.9),
    new THREE.Vector2(0.62, -1.9),
    new THREE.Vector2(0.76, -1.72),
    new THREE.Vector2(0.78, -1.2),
    new THREE.Vector2(0.74, 0.55),
    new THREE.Vector2(0.62, 0.9),
    new THREE.Vector2(0.38, 1.2),
    new THREE.Vector2(0.29, 1.45),
    new THREE.Vector2(0.29, 1.82),
    new THREE.Vector2(0, 1.82),
  ], []);
  const liquidProfile = useMemo(() => [
    new THREE.Vector2(0, -1.7),
    new THREE.Vector2(0.54, -1.7),
    new THREE.Vector2(0.64, -1.5),
    new THREE.Vector2(0.65, -1.1),
    new THREE.Vector2(0.62, 0.35),
    new THREE.Vector2(0.52, 0.68),
    new THREE.Vector2(0.4, 0.82),
    new THREE.Vector2(0, 0.82),
  ], []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const pointer = state.pointer;
    if (vessel.current) {
      vessel.current.rotation.x = Math.sin(t * 0.42) * 0.06 - pointer.y * 0.08;
      vessel.current.rotation.y = Math.sin(t * 0.3) * 0.14 + pointer.x * 0.12;
      vessel.current.rotation.z = Math.sin(t * 0.25) * 0.025;
      vessel.current.position.y = Math.sin(t * 0.6) * 0.14;
      vessel.current.position.x = Math.sin(t * 0.34) * 0.04 + pointer.x * 0.08;
    }
    if (liquid.current) {
      liquid.current.rotation.z = Math.sin(t * 0.65) * 0.025;
      liquid.current.position.y = Math.sin(t * 0.9) * 0.035;
    }
    if (surface.current) {
      surface.current.scale.y = 1 + Math.sin(t * 1.15) * 0.035;
      surface.current.rotation.z = Math.sin(t * 0.7) * 0.04;
    }
  });

  return (
    <group ref={vessel}>
      <mesh>
        <latheGeometry args={[bottleProfile, 48]} />
        <meshPhysicalMaterial
          color="#dcecff"
          metalness={0.08}
          roughness={0.08}
          transmission={0.9}
          thickness={0.22}
          ior={1.45}
          envMapIntensity={1.4}
          clearcoat={1}
          clearcoatRoughness={0.08}
          transparent
          opacity={0.34}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={liquid} position={[0, 0.02, 0]}>
        <latheGeometry args={[liquidProfile, 32]} />
        <meshPhysicalMaterial
          color="#4F8CFF"
          metalness={0.18}
          roughness={0.12}
          transmission={0.42}
          thickness={0.45}
          ior={1.33}
          transparent
          opacity={0.86}
          envMapIntensity={1.15}
        />
      </mesh>
      <mesh ref={surface} position={[0, 0.84, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.39, 0.035, 10, 40]} />
        <meshStandardMaterial color="#ff4fd8" transparent opacity={0.42} metalness={0.35} roughness={0.12} />
      </mesh>
      <mesh position={[0, 1.84, 0]}>
        <torusGeometry args={[0.29, 0.018, 8, 32]} />
        <meshStandardMaterial color="#4f8cff" transparent opacity={0.75} metalness={0.8} roughness={0.15} />
      </mesh>
    </group>
  );
}
