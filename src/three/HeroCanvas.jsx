import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { CameraRig } from "./CameraRig";
import { Lighting } from "./Lighting";
import { ParticleField } from "./ParticleField";
import { FloatingGeometry } from "./FloatingGeometry";

export default function HeroCanvas({ tier }) {
  const count = tier === "high" ? 520 : 280;

  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 6.2], fov: 42 }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
    >
      <fog attach="fog" args={["#070708", 6, 16]} />
      <Lighting />
      {tier === "high" ? <Environment preset="city" environmentIntensity={0.45} /> : null}
      <CameraRig intensity={0.28}>
        <FloatingGeometry />
        <ParticleField count={count} />
      </CameraRig>
    </Canvas>
  );
}
