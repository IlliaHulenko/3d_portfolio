import React, { useRef, useEffect, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { a } from '@react-spring/three'

import balloonScene from '../assets/3d/balloon.glb';

const Balloon = ({isRotating, setIsRotating, setCurrentStage, ...props}) => {

  // const isBalloonRef = useRef();
  const { gl, viewport } = useThree();

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const [ballonCurrentAnimation, setBallonCurrentAnimation] = useState('AnimationAction');
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(balloonScene);

  const { actions } = useAnimations(animations, group);  

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
    
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;    
  } 

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);     
  }
  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if(isRotating){
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;

      group.current.rotation.z += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;      
    }    
  }

  const handleKeyDown = (e) => {
    if(e.key === 'ArrowLeft'){
      if(!isRotating) setIsRotating(true);
      group.current.rotation.z += 0.01 * Math.PI;
      rotationSpeed.current = 0.007;
    } else if(e.key === 'ArrowRight'){
      if(!isRotating) setIsRotating(true);
      group.current.rotation.z -= 0.01 * Math.PI;
      rotationSpeed.current = -0.007;
    }
  }

  const handleKeyUp = (e) => {
    if(e.key === 'ArrowLeft' || e.key === 'ArrowRight'){
      setIsRotating(false);
    }
  }

  useFrame(() => {
    if(!isRotating){
      rotationSpeed.current *= dampingFactor;

      if(Math.abs(rotationSpeed.current) < 0.001){
        rotationSpeed.current = 0;
      }
      group.current.rotation.z += rotationSpeed.current;      
      
    } else {
      const rotation = group.current.rotation.z;       
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the baloon's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(1);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(4);
          break;
        default:
          setCurrentStage(null);
      }
    }
  })

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    
    actions.Scene.play();   

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    }

  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove, actions, ballonCurrentAnimation]);
  
  return (
    <a.group ref={group} {...props}>      
      <mesh
        name="balloon"
      />
      <mesh
        name="armature_balloon"        
        >
        <mesh name="Object_6">
          <primitive object={nodes._rootJoint} />
          <skinnedMesh
            name="Object_9"
            geometry={nodes.Object_9.geometry}
            material={materials.airship}
            skeleton={nodes.Object_9.skeleton}
          />
          <skinnedMesh
            name="Object_10"
            geometry={nodes.Object_10.geometry}
            material={materials.trims}
            skeleton={nodes.Object_10.skeleton}
          />
          <skinnedMesh
            name="Object_11"
            geometry={nodes.Object_11.geometry}
            material={materials.trims}
            skeleton={nodes.Object_11.skeleton}
          />
          <mesh
            name="Object_8"
          />
        </mesh>
      </mesh>              
    </a.group>
  )
}

// useGLTF.preload('/peachy_balloon_gift.glb')

export default Balloon;
