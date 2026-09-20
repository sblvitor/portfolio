import { Canvas } from "@react-three/fiber"
import { Experience } from "./experience"
import { Perf } from 'r3f-perf'
import { Leva } from "leva"
import { SmallScreenOverlay } from "./small-screen-overlay"
import { Loader } from "@react-three/drei"

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
      <Loader
        containerStyles={{ background: "#17203a", position: "fixed" }}
        innerStyles={{ width: 240, height: 6, background: "rgba(255,255,255,0.2)" }}
        barStyles={{ height: 6, background: "#b3ccff" }}
        dataStyles={{ fontFamily: "'Bangers', sans-serif", fontSize: 24, color: "#fff" }}
        dataInterpolation={(p) => `Loading ${Math.round(p)}%`}
      />
      <Leva hidden={!hasDebugHash} />
    </>
  )
}

export default App
