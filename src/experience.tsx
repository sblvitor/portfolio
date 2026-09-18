import { ContactShadows, Environment, Float, Html, PresentationControls, Text } from "@react-three/drei"
import { Suspense, useRef, useState } from "react"
import { LaptopModel } from "./laptop-model"
import { useControls } from "leva"
import { useFrame } from "@react-three/fiber"
import { Vector3 } from "three"

const RESTING_POSITION = new Vector3(-3, 1.5, 4)
const RESTING_TARGET = new Vector3(0, 0, 0)
const FOCUSED_POSITION = new Vector3(0.1, 1, 1.8)
const FOCUSED_TARGET = new Vector3(0, 0.7, 0)

export const Experience = () => {

  const { opacity, positionY, blur, scale } = useControls('contactShadow', {
    opacity: { value: 0.4, min: 0, max: 1 },
    positionY: { value: -1.3, min: -3, max: 0 },
    blur: { value: 1.85, min: 0, max: 3 },
    scale: { value: 5, min: 0, max: 20 },
  })

  const [focused, setFocused] = useState(false)

  const lookAtTarget = useRef(RESTING_TARGET.clone())

  useFrame((state, delta) => {
    const damping = 1 - Math.pow(0.001, delta)

    state.camera.position.lerp(focused ? FOCUSED_POSITION : RESTING_POSITION, damping)
    lookAtTarget.current.lerp(focused ? FOCUSED_TARGET : RESTING_TARGET, damping)
    state.camera.lookAt(lookAtTarget.current)
  })

  return (
    <>
      <Environment preset="city" />
      <PresentationControls
        rotation={[0.13, 0.1, 0]}
        global
        snap={!focused}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        damping={0.1}
      >
        <Float rotationIntensity={0.4} enabled={!focused}>
          <rectAreaLight 
            width={2.5}
            height={1.65}
            intensity={15}
            color={'#B3CCFF'}
            rotation={[0.1, Math.PI, 0]}
            position={[0, 0.55, -1.55]}
          />
          <Suspense>
            <LaptopModel position-y={-1.1} />
          </Suspense>
          <Text
            font="./bangers-v25-latin-regular.woff"
            position={[2.2, 0.75, 0.1]}
            rotation-y={- 1.25}
            maxWidth={2}
            textAlign="center"
          >
            VITOR LIRA
          </Text>
          <Html
            transform
            position={[2.1, -0.4, 0.1]}
            rotation-y={-1.25}
            scale={0.25}
            pointerEvents={focused ? 'none' : 'auto'}
          >
            <button
              className={focused ? 'btn is-hidden' : 'btn'}
              aria-hidden={focused}
              tabIndex={focused ? -1 : 0}
              onClick={() => setFocused(true)}>
              Closer look
            </button>
          </Html>
          <Html
            transform
            position={[1.2, -0.4, -0.8]}
            scale={0.15}
            pointerEvents={focused ? 'auto' : 'none'}
          >
            <button
              className={focused ? 'btn btn--small' : 'btn btn--small is-hidden'}
              aria-hidden={!focused}
              tabIndex={focused ? 0 : -1}
              onClick={() => setFocused(false)}>
              Go back
            </button>
          </Html>
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
