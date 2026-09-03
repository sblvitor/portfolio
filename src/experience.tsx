import { Environment, OrbitControls} from "@react-three/drei"
import { Suspense } from "react"
import { LaptopModel } from "./laptop-model"

export const Experience = () => {

  return (
    <>
      <OrbitControls />

      <Environment preset="city" />

      <Suspense>
        <LaptopModel position={[0, -1, 0]} />
      </Suspense>
    </>
  )
}
