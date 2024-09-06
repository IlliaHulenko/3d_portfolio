import {React, Suspense, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader.jsx'
import Balloon from '../models/Balloon.jsx'
import Sky from '../models/Sky.jsx'
import Bird from '../models/Bird.jsx'
import Plane from '../models/Plane.jsx'
import HomeInfo from '../components/HomeInfo.jsx'
import { useEffect } from 'react'


const Home = () => {

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  
  const adjustBalloonForScreenSize = () => {
    let screenScale = null; 
    let screenPosition = null;    

    if(window.innerWidth < 760){
      screenScale = [0.7, 0.7, 0.7]
    } else {
      screenScale = [1, 1, 1]
    }

    if(window.innerWidth < 760){
      screenPosition = [0, -3, -30];
    } else {
      screenPosition = [0, -5, -30];
    }

    return [screenScale, screenPosition];
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;    

    if(window.innerWidth <= 760 ){
      screenScale = [1.2, 1.2, 1.2]
      screenPosition = [0, -1.7, 0]
    } else {
      screenScale = [3, 3, 3]
      screenPosition = [0, -5, -4]
    }

    return [screenScale, screenPosition];
  }

  const [isBalloonScale, isBalloonPosition] = adjustBalloonForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 10000);
  }, [])

  return (
    <section className='w-full h-screen realtive'>
      
      <div className='absolute top-28 left-0 right-0 z-20 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      {isVisible && (
        <div className={`keys-container ${isRotating ? 'keys-hidden' : ''}`}>
          <h3 className='text-xl max-sm:text-base'>PRESS</h3>
          <div className='flex flex-row gap-4'>
            <span className='keyboard-key'><i>&#8678;</i></span>
            <span className='keyboard-key'><i>&#8680;</i></span>
          </div>
          <h3 className='text-xl max-sm:text-base'>OR</h3>
          <h3 className='text-xl max-sm:text-base'>GRAB the ship</h3>
        </div>
      )}
      
      
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
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>

    </section>
  )
}

export default Home