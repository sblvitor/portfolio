import { Html, useGLTF } from "@react-three/drei"

useGLTF.preload('https://threejs-journey.com/resources/models/macbook_model.gltf')

export const LaptopModel = (props: any) => {

  const computer = useGLTF('https://threejs-journey.com/resources/models/macbook_model.gltf')

  return (
    <primitive object={computer.scene}  {...props}>
      <Html
        transform
        wrapperClass="htmlScreen"
        distanceFactor={1.17}
        position={[0, 1.56, -1.4]}
        rotation-x={-0.256}
      >
        <iframe src="https://wave-grid-rho.vercel.app/" />
      </Html>
    </primitive>
  )
}
