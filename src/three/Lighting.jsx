export function Lighting({ intensity = 1 }) {
  return (
    <>
      <ambientLight intensity={0.18 * intensity} />
      <directionalLight position={[4, 6, 3]} intensity={1.2 * intensity} color="#4F8CFF" />
      <pointLight position={[-4, -2, -2]} intensity={8 * intensity} color="#4F8CFF" distance={14} />
      <pointLight position={[3, 2, 4]} intensity={2.5 * intensity} color="#FF4FD8" distance={10} />
    </>
  );
}
