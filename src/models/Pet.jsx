import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

import scene from '../assets/3d/robot.glb';

const Pet =({currentAnimation, ...props}) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group)

  useEffect(() => {

  },[actions, currentAnimation])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" >
          <group name="root">
            <group name="GLTF_SceneRootNode" >
              <group name="Armature_15">
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Material}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <group name="robot_14" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default Pet;