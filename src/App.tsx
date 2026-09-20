import { Canvas } from "@react-three/fiber"
import { Experience } from "./experience"
import { Perf } from 'r3f-perf'
import { Leva } from "leva"
import { SmallScreenOverlay } from "./small-screen-overlay"

function App() {

  const hasDebugHash = window.location.hash === '#debug'

  return (
    <>
      <SmallScreenOverlay />
      <Canvas
        className="r3f"
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-3, 1.5, 4]
        }}
      >
        { hasDebugHash && <Perf position="top-left" /> }
        <color args={['#12141F']} attach={'background'} />
        <Experience />
      </Canvas>
      <Leva hidden={!hasDebugHash} />
    </>
  )
}

export default App
