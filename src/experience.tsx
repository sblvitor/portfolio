import { ContactShadows, Environment, Float, PresentationControls} from "@react-three/drei"
import { Suspense } from "react"
import { LaptopModel } from "./laptop-model"
import { useControls } from "leva"

export const Experience = () => {

  const { opacity, positionY, blur, scale } = useControls('contactShadow', {
    opacity: { value: 0.4, min: 0, max: 1 },
    positionY: { value: -1.3, min: -3, max: 0 },
    blur: { value: 1.85, min: 0, max: 3 },
    scale: { value: 5, min: 0, max: 20 },
  })

  return (
    <>
      <Environment preset="city" />
      <PresentationControls
        rotation={[0.13, 0.1, 0]}
        global
        cursor={false}
        snap={true}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        damping={0.1}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight 
            width={2.5}
            height={1.65}
            intensity={15}
            color={'#F5F5F5'}
            rotation={[0.1, Math.PI, 0]}
            position={[0, 0.55, -1.55]}
          />
          <Suspense>
            <LaptopModel position-y={-1.1} />
          </Suspense>
        </Float>
      </PresentationControls>
      <ContactShadows
        position-y={positionY}
        opacity={opacity}
        blur={blur}
        scale={scale}
      />
    </>
  )
}
