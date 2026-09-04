import { Canvas } from "@react-three/fiber"
import { Experience } from "./experience"
import { Perf } from 'r3f-perf'

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
        <Perf position="top-left" />
        <color args={['#211a24']} attach={'background'} />
        <Experience />
      </Canvas>
    </>
  )
}

export default App
