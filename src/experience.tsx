import { ContactShadows, Environment, Float, OrbitControls} from "@react-three/drei"
import { Suspense } from "react"
import { LaptopModel } from "./laptop-model"
import { useControls } from "leva"

export const Experience = () => {

  const { opacity, positionY, blur, scale } = useControls('contactShadow', {
    opacity: { value: 0.2, min: 0, max: 1 },
    positionY: { value: -1.5, min: -3, max: 0 },
    blur: { value: 1, min: 0, max: 3 },
    scale: { value: 7, min: 0, max: 20 },
  })

  return (
    <>
      <OrbitControls />

      <Environment preset="city" />
      <Float rotationIntensity={0.4}>
        <Suspense>
          <LaptopModel position-y={-0.7} />
        </Suspense>
      </Float>
      <ContactShadows
        position-y={positionY}
        opacity={opacity}
        blur={blur}
        scale={scale}
      />
    </>
  )
}
