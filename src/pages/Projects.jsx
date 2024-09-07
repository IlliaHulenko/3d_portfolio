import React from 'react';
import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import ProjectsExp from '../components/projects/ProjectsExp';
import ProjectsUi from '../components/projects/ProjectsUi';
import clouds from "../../src/images/textures/clouds.jpg";

const Projects = () => {
  return (
    <div className="prosjects-container" style={{ backgroundImage: `url(${clouds})` }}>
      <ProjectsUi />
      <Loader />
      <Canvas shadows camera={{ position: [-0.5, 1, 4], fov: 45 }}>
        <group position-y={0}>
          <Suspense fallback={null}>
            <ProjectsExp />
          </Suspense>
        </group>
      </Canvas>
    </div>
  )
}

export default Projects