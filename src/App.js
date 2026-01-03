import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const MovingGalaxy = () => {
  const galaxyRef = useRef();
  const theta = useRef(0);

  useFrame(() => {
    if (galaxyRef.current) {
      theta.current += 0.001;
      galaxyRef.current.rotation.y = theta.current;
    }
  });

  const points = new Array(2000).fill().map(() => [
    (Math.random() - 0.5) * 250,
    (Math.random() - 0.5) * 250,
    (Math.random() - 0.5) * 250,
  ]);

  return (
    <group ref={galaxyRef}>
      {points.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.25, 6, 6]} />
          <meshStandardMaterial color="#1a1a2e" emissive="#222244" emissiveIntensity={0.7} />
        </mesh>
      ))}
    </group>
  );
};

const FloatingMembers = () => {
