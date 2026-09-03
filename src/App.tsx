import { Canvas } from "@react-three/fiber"
import { Experience } from "./experience"

function App() {

  return (
    <>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-3, 1.5, 4]
        }}
      >
        <color args={['#1a1a24']} attach={'background'} />
        <Experience />
      </Canvas>
    </>
  )
}

export default App
