import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, Decal, useTexture, Float } from '@react-three/drei';
import {Suspense } from 'react';
import Loader from "../Loader.jsx";

// eslint-disable-next-line react/prop-types
const Ball = ({ icon }) => {
  const [decal] = useTexture([icon]);

  return (
      <Float speed={1.75} rotationIntensity={1.5} floatIntensity={5}>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 0, 0.05]} />
        <mesh castShadow receiveShadow scale={2.75}>
          <icosahedronGeometry args={[1, 2]} />
          <meshStandardMaterial
              color='#fff8eb'
              polygonOffset
              polygonOffsetFactor={-5}
              flatShading
          />
          <Decal
              position={[0, 0, 1]}
              rotation={[2 * Math.PI, 0, 6.25]}
              scale={1}
              map={decal}
              flatShading
          />
        </mesh>
      </Float>
  )
}

// eslint-disable-next-line react/prop-types
const BallCanvas = ({icon}) => {
  return (
      <Canvas
          frameloop='demand'
          dpr={[1, 2]}
          gl={{preserveDrawingBuffer: true}}
      >
        <Suspense fallback={<Loader/>}>
          <OrbitControls
              enableZoom={false}
          />
          <Ball icon={icon}/>
        </Suspense>
        <Preload all />
      </Canvas>
  );
};

export default BallCanvas;
