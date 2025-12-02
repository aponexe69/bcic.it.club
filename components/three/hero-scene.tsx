"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import { Suspense } from "react";

function CircuitPlane() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2.2, 0, 0]} position={[0, -0.7, 0]}>
        <planeGeometry args={[14, 14, 48, 48]} />
        <meshStandardMaterial
          color="#021623"
          emissive="#00E0FF"
          emissiveIntensity={0.14}
          metalness={0.6}
          roughness={0.4}
          wireframe
        />
      </mesh>
      <mesh rotation={[-Math.PI / 2.2, 0, 0]} position={[0, -0.68, 0]}>
        <planeGeometry args={[14, 14]} />
        <meshStandardMaterial
          transparent
          opacity={0.18}
          color="#00E0FF"
        />
      </mesh>
      <Sparkles
        count={120}
        speed={0.6}
        opacity={0.9}
        color="#13F8FF"
        size={3}
        scale={[10, 4, 10]}
      />
    </group>
  );
}

export function HeroScene() {
  return (
    <div className="h-[320px] w-full overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-cyan-500/10 via-slate-900/80 to-slate-950 shadow-neon-shadow">
      <Canvas
        camera={{ position: [0, 3, 7], fov: 42 }}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#020617"]} />
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[6, 10, 2]}
          intensity={1.8}
          color={"#00E0FF"}
        />
        <directionalLight
          position={[-6, 6, -4]}
          intensity={1}
          color={"#13F8FF"}
        />
        <Suspense fallback={null}>
          <CircuitPlane />
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.75}
          maxPolarAngle={Math.PI / 2.3}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
}


