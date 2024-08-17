import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

import scene from '../assets/3d/indigo_park.glb';

const Indigo = ({currentAnimation, ...props}) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    // console.log(actions);
    Object.values(actions).forEach(action => action.stop());
    
    if(actions[currentAnimation]){
      actions[currentAnimation].play();
    }
  },[actions, currentAnimation])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" >
          <group name="indigo_pet" >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Mollie" >
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_104"
                      geometry={nodes.Object_104.geometry}
                      material={materials.MollieGogglesMat}
                      skeleton={nodes.Object_104.skeleton}
                    />
                    <skinnedMesh
                      name="Object_105"
                      geometry={nodes.Object_105.geometry}
                      material={materials.MollieTongueMat}
                      skeleton={nodes.Object_105.skeleton}
                    />
                    <skinnedMesh
                      name="Object_106"
                      geometry={nodes.Object_106.geometry}
                      material={materials.MollieBodyMat}
                      skeleton={nodes.Object_106.skeleton}
                    />
                    <skinnedMesh
                      name="Object_107"
                      geometry={nodes.Object_107.geometry}
                      material={materials.MollieWingsMat}
                      skeleton={nodes.Object_107.skeleton}
                    />
                    <skinnedMesh
                      name="Object_108"
                      geometry={nodes.Object_108.geometry}
                      material={materials.MollieEyesMat}
                      skeleton={nodes.Object_108.skeleton}
                    />
                    <group name="Object_103" />
                  </group>
                </group>
                <group name="MollieMesh"  />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default Indigo;