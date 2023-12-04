import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Loader, OrbitControls } from '@react-three/drei'
import Shoe from './models/Shoe'


const App = () => {
  
  const adjustShoeForScreenSize = () => {
    let screenScale, screenPosition;
    let rotation = [0.1, 4.7, 0]

    if(window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -3, -43];
    }

    return [screenScale, screenPosition, rotation]
  }

  const [shoeScale, shoePosition, shoeRotation] = adjustShoeForScreenSize();

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
      style={{ width: '100%', height: '700px' }}>
        <Suspense>
          <directionalLight position={1, 1, 1} intensity={2} />
          <ambientLight />
          <OrbitControls enableZoom={false} enablePan={true} panSpeed={0.5} />
          <Shoe 
          position={shoePosition}
          scale={shoeScale}
          rotation={shoeRotation}/>
        </Suspense>
    </Canvas>
  )
}

export default App

/*
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );

  function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
  }
  animate();
*/