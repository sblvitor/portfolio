import { useAnimations, useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import { useEffect, useRef } from "react"
import * as THREE from 'three'

useGLTF.preload('./macbook_pro_13_inch_2020.glb')

export const LaptopModel = (props: any) => {

  // const computer = useGLTF('https://threejs-journey.com/resources/models/macbook_model.gltf')
  const { scene, animations } = useGLTF('./macbook_pro_13_inch_2020.glb')

  const { scale } = useControls('laptop', {
    scale: { value: 12, min:0, max: 50 }
  })

  const { actions } = useAnimations(animations, scene)
  const openTimeRef = useRef(0)

  useEffect(() => {
    const action = actions?.Animation
    if(!action) return

    openTimeRef.current = action.getClip().duration / 2

    action.reset()
    action.setLoop(THREE.LoopOnce, 1)
    action.setEffectiveTimeScale(2)
    action.clampWhenFinished = true
    action.play()
  }, [actions])

  useFrame(() => {
    const action = actions?.Animation
    if(!action || !action.isRunning()) return

    if(action.time >= openTimeRef.current) {
      action.paused = true
    }
  })

  return (
    <primitive object={scene} scale={scale} {...props} />
  )
}
