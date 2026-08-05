import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function Object() {
  const ref = useRef<Mesh>(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * .07;
    ref.current.rotation.y += delta * .1;
    ref.current.position.x = state.pointer.x * .18;
    ref.current.position.y = state.pointer.y * .12;
  });
  return <Float speed={1.2} rotationIntensity={.35} floatIntensity={.5}><mesh ref={ref}><icosahedronGeometry args={[2.2, 2]} /><meshPhysicalMaterial color="#ff6b00" wireframe transparent opacity={.2} roughness={.3} /></mesh></Float>;
}

export default function AmbientScene() {
  return <Canvas dpr={[1, 1.4]} camera={{ position: [0, 0, 6], fov: 48 }} gl={{ antialias: false, alpha: true }}><ambientLight intensity={1.2} /><Object /></Canvas>;
}
