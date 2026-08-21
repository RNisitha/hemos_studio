export function Lighting({ intensity = 1 }) {
  return (
    <>
      <ambientLight intensity={0.18 * intensity} />
      <directionalLight position={[4, 6, 3]} intensity={1.2 * intensity} color="#cdd6ff" />
      <pointLight position={[-4, -2, -2]} intensity={8 * intensity} color="#6B8AFF" distance={14} />
      <pointLight position={[3, 2, 4]} intensity={4 * intensity} color="#ffffff" distance={10} />
    </>
  );
}
