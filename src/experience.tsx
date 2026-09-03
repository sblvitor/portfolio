import { Environment, Float, OrbitControls} from "@react-three/drei"
import { Suspense } from "react"
import { LaptopModel } from "./laptop-model"

export const Experience = () => {

  return (
    <>
      <OrbitControls />

      <Environment preset="city" />
      <Float rotationIntensity={0.4}>
        <Suspense>
          <LaptopModel position-y={-0.7} />
        </Suspense>
      </Float>
    </>
  )
}
