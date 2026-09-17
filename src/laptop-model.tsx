import { useGLTF } from "@react-three/drei"

useGLTF.preload('https://threejs-journey.com/resources/models/macbook_model.gltf')

export const LaptopModel = (props: any) => {

  const computer = useGLTF('https://threejs-journey.com/resources/models/macbook_model.gltf')

  return (
    <primitive object={computer.scene}  {...props} />
  )
}
