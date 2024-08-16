import {React, Suspense, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader.jsx'
import Balloon from '../models/Balloon.jsx'
import Sky from '../models/Sky.jsx'
import Bird from '../models/Bird.jsx'
import Plane from '../models/Plane.jsx'
import HomeInfo from '../components/HomeInfo.jsx'


const Home = () => {

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustBalloonForScreenSize = () => {
    let screenScale = null; 
    let screenPosition = [0, -7, -30];    

    if(window.innerWidth < 768){
      screenScale = [0.3, 0.3, 0.3]
    } else {
      screenScale = [1, 1, 1]
    }

    return [screenScale, screenPosition];
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;    

    if(window.innerWidth < 768){
      screenScale = [1.5, 1.5, 1.5]
      screenPosition = [0, -1.5, 0]
    } else {
      screenScale = [4, 4, 4]
      screenPosition = [0, -4, -4]
    }

    return [screenScale, screenPosition];
  }

  const [isBalloonScale, isBalloonPosition] = adjustBalloonForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className='w-full h-screen realtive'>
      
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{near: 0.1, far: 1000}}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[10, 1, 1]} intensity={3}/>
          <ambientLight intensity={0.5}/>
          <pointLight />
          <spotLight />
          <hemisphereLight skyColor="#b1e6ff" groundColor="#000000" intensity={1}/>
          
          <Bird />
          <Sky isRotating={isRotating} />
          
          <Balloon 
            scale={isBalloonScale}
            position={isBalloonPosition}
            rotation={[-1.78, -6.3, 0]}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane 
            isRotating={isRotating}
            planeScale={planeScale}
            planePosition={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>

    </section>
  )
}

export default Home