import * as THREE from 'three'
import { FontLoader, TextGeometry } from 'three/examples/jsm/Addons.js'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Cursor
 */
const cursor = {
    x: 0,
    y: 0,
}
window.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = - (event.clientY / sizes.height - 0.5)
})

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()
const matcapTexture = textureLoader.load('/textures/matcaps/3.png')
matcapTexture.colorSpace = THREE.SRGBColorSpace

/**
 * Font
 */
const text = new THREE.Mesh()
const fontLoader = new FontLoader()
fontLoader.load(
    '/fonts/helvetiker_regular.typeface.json', 
    (font) => {
        const textGeometry = new TextGeometry(
            'Vitor Lira',
            {
                font,
                size: 0.5,
                depth: 0.2,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 4
            }
        )
        textGeometry.center()

        const material = new THREE.MeshNormalMaterial()
        text.geometry = textGeometry
        text.material = material
        scene.add(text)

        const donutGeometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45)
        for(let i = 0; i < 200; i++) {
            const donut = new THREE.Mesh(donutGeometry, material)

            donut.position.x = (Math.random() - 0.5) * 15
            donut.position.y = (Math.random() - 0.5) * 15
            donut.position.z = (Math.random() - 0.5) * 15

            donut.rotation.x = Math.random() * Math.PI
            donut.rotation.z = Math.random() * Math.PI

            const scale = Math.random()
            donut.scale.x = scale
            donut.scale.y = scale
            donut.scale.z = scale

            scene.add(donut)
        }

        const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
        for(let i = 0; i < 50; i++) {
            const cube = new THREE.Mesh(cubeGeometry, material)

            cube.position.x = (Math.random() - 0.5) * 15
            cube.position.y = (Math.random() - 0.5) * 15
            cube.position.z = (Math.random() - 0.5) * 15

            cube.rotation.x = Math.random() * Math.PI
            cube.rotation.z = Math.random() * Math.PI

            const scale = Math.random()
            cube.scale.x = scale
            cube.scale.y = scale
            cube.scale.z = scale

            scene.add(cube)
        }
    }
)

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(-30, 4, 3)
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setClearColor(0x000000, 0)
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

const clock = new THREE.Clock()

const targetCameraPosition = new THREE.Vector3()
// tick in course
const animate = () => {

    // update camera
    targetCameraPosition.x = - Math.sin(cursor.x * Math.PI * 0.7) * 10
    targetCameraPosition.z = Math.cos(cursor.x * Math.PI * 0.7) * 3
    targetCameraPosition.y = - cursor.y * 10

    camera.position.lerp(targetCameraPosition, 0.03)

    camera.lookAt(text.position)
    
    // render
    renderer.render(scene, camera)

    window.requestAnimationFrame(animate)
}

animate()