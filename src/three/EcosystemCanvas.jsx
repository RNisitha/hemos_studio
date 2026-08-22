import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Lighting } from "./Lighting";
import { InteractiveObject } from "./InteractiveObject";
import { ParticleField } from "./ParticleField";

export default function EcosystemCanvas({ tier, scrollRef }) {
  return (
    <Canvas
      dpr={[1, 1.35]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 6.8], fov: 40 }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
    >
      <fog attach="fog" args={["#070708", 7, 18]} />
      <Lighting intensity={1.1} />
      {tier === "high" ? <Environment preset="studio" environmentIntensity={0.55} /> : null}
      <InteractiveObject scrollRef={scrollRef} />
      <ParticleField count={tier === "high" ? 360 : 180} />
    </Canvas>
  );
}
