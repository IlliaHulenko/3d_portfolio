import { useCursor, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useMemo, useRef, useState } from 'react';
import { 
  Bone,
  BoxGeometry,
  Color,
  Float32BufferAttribute,
  MeshStandardMaterial,
  Skeleton,
  SkinnedMesh,
  SRGBColorSpace,
  Uint16BufferAttribute,
  Vector3,
 } from 'three';
 import { degToRad } from "three/src/math/MathUtils.js";
 import { pageAtom, pages } from "./ProjectsUi";
 import { easing } from "maath";
import { useAtom } from 'jotai';
import book_cover_roughness from "../../../public/textures/book_cover_roughness.jpg";

const easingFactor = 0.5;
const easingFactorFold = 0.3; 
const insideCurveStrength = 0.18;
const outsideCurveStrength = 0.05;
const turningCurveStrength = 0.09;

const PAGE_WIDTH = 1.28;
const PAGE_HEIGHT = 1.71;
const PAGE_DEPTH = 0.003;
const PAGE_SEGMENTS = 30;
const SEGMENT_WIDTH = PAGE_WIDTH / PAGE_SEGMENTS;

const pageGeometry = new BoxGeometry(
  PAGE_WIDTH,
  PAGE_HEIGHT,
  PAGE_DEPTH,
  PAGE_SEGMENTS,
  2,
);

pageGeometry.translate(PAGE_WIDTH / 2, 0, 0);
const position = pageGeometry.attributes.position;
const vertex = new Vector3();
const skinIndexes = [];
const skinWeights = [];

for(let i=0; i < position.count; i++) {
  vertex.fromBufferAttribute(position, i);
  const x = vertex.x;

  const skinIndex = Math.max(0, Math.floor(x / SEGMENT_WIDTH));
  let skinWeight = (x % SEGMENT_WIDTH) / SEGMENT_WIDTH;
  
  skinIndexes.push(skinIndex, skinIndex + 1, 0, 0);
  skinWeights.push(1 - skinWeight, skinWeight, 0,0);
}

pageGeometry.setAttribute(
  "skinIndex",
  new Uint16BufferAttribute(skinIndexes, 4)
);

pageGeometry.setAttribute(
  "skinWeight",
  new Float32BufferAttribute(skinWeights, 4)
);

const whiteColor = new Color("white");

const pageMaterials = [
  new MeshStandardMaterial({
    color: whiteColor,
  }),
  new MeshStandardMaterial({
    color: "#111",
  }),
  new MeshStandardMaterial({
    color: whiteColor,
  }),
  new MeshStandardMaterial({
    color: whiteColor
  }),
];
pages.forEach((page) => {
  useTexture.preload(`/textures/${page.front}`);
  useTexture.preload(`/textures/${page.back}`);
  useTexture.preload(`/textures/${book_cover_roughness}`);  
})
const Page = ({number, front, back, page, bookOpened, bookClosed,  ...props}) => {

  const [picture, picture2, pictureRoughness] = useTexture([
    `/textures/${front}`,
    `/textures/${back}`,
    ...(number === 0 || number === pages.lenght - 1
      ?[`/textures/${book_cover_roughness}`]
      :[]),
  ]);
  picture.colorSpace = picture2.colorSpace = SRGBColorSpace;
  const group = useRef();
  const turnedAt = useRef(0);
  const lastOpened = useRef(bookOpened);

  const skinnedMeshRef = useRef();

  const [_, setPage] = useAtom(pageAtom);
  const [highlighted, setHighlighted] = useState(false);
  
  useCursor(highlighted);

  const manualSkinnedMesh = useMemo(() => {
    const bones = [];

    for(let i = 0; i <= PAGE_SEGMENTS; i++) {
      let bone = new Bone();
      bones.push(bone);
      if(i===0){
        bone.position.x = 0;
      } else {
        bone.position.x = SEGMENT_WIDTH;
      }
      if(i > 0){
        bones[i - 1].add(bone);
      }
    }
    const skeleton = new Skeleton(bones);

    const materials = [...pageMaterials,
      new MeshStandardMaterial({
        color: whiteColor,
        map: picture,
        ...(number === 0 
          ? {
            roughnessMap: pictureRoughness,
          }
          : {
            roughness: 0.1,
          })
      }),
      new MeshStandardMaterial({
        color: whiteColor,
        map: picture2,
        ...(number === pages.lenght - 1
          ? {
            roughnessMap: pictureRoughness,
          }
          : {
            roughness: 0.1,
          })     
      }),
    ]
    const mesh = new SkinnedMesh(pageGeometry, materials);
    mesh.castShadow = true;
    mesh.recieveShadow = true;
    mesh.frustumCulled = false;
    mesh.add(skeleton.bones[0]);
    mesh.bind(skeleton);
    return mesh;
  }, []);

  useFrame((_, delta) => {
    if(!skinnedMeshRef.current){
      return;
    }

    if(lastOpened.current !== bookOpened){
      turnedAt.current = +new Date();
      lastOpened.current = bookOpened;
    }
    let turningTime = Math.min(400, new Date() - turnedAt.current) / 400;
    turningTime = Math.sin(turningTime * Math.PI);

    let targetRotation = bookOpened ? -Math.PI / 2 : Math.PI / 2;
    if(!bookClosed) {
      targetRotation += degToRad(number * 0.8);
    }

    const bones = skinnedMeshRef.current.skeleton.bones;  
    for(let i = 0; i < bones.length; i++) {
      const target = i ===0 ? group.current : bones[i];

      const insideCurveIntensity = i < 8 ? Math.sin(i * 0.2 + 0.25) : 0;
      const outsideCurveIntensity = i >= 8 ? Math.cos(i * 0.3 + 0.09) : 0;
      const turningIntensity = Math.sin(i * Math.PI * (1 / bones.length)) * turningTime;
      let rotationAngle = 
        insideCurveStrength * insideCurveIntensity * targetRotation - 
        outsideCurveStrength * outsideCurveIntensity * targetRotation +
        turningCurveStrength * turningIntensity * targetRotation;
      let foldRotationAngle = degToRad(Math.sign(targetRotation) * 2);
      if(bookClosed){
        if(i ===0){
          rotationAngle = targetRotation;
          foldRotationAngle = 0;
        } else {
          rotationAngle = 0;
        }
      }
      easing.dampAngle(
        target.rotation, "y", 
        rotationAngle, 
        easingFactor, delta
      );
      const foldIntensity = i > 8 
        ? Math.sin(i * Math.PI * (1 / bones.length) - 0.5) * turningTime 
        : 0;
      easing.dampAngle(
        target.rotation, "x",
      foldRotationAngle * foldIntensity,
      easingFactorFold,
      delta
      );
    };    
  });

  return (
    <group {...props} ref={group}
    onPointerEnter={(e) => {
      e.stopPropagation();
      setHighlighted(true);
    }}
    onPointerLeave={(e) => {
      e.stopPropagation();
      setHighlighted(false);
    }}
    onClick={(e) => {
      e.stopPropagation();
      setPage(bookOpened ? number : number + 1);
      setHighlighted(false);
    }}
    >
        <primitive 
          object={manualSkinnedMesh} 
          ref={skinnedMeshRef}
          position-z={-number * PAGE_DEPTH + page * PAGE_DEPTH}
        />
    </group>
  )
}

export default Page