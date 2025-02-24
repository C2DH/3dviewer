import { Suspense, useEffect } from 'react'
import * as THREE from 'three'
import { Canvas, useThree } from '@react-three/fiber'
import { Environment, useGLTF } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'
import { useProgress, Html } from '@react-three/drei'

interface ModelProps {
  url: string
}
const Model: React.FC<ModelProps> = ({ url }) => {
  const { scene } = useGLTF(url)
  scene.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.side = THREE.DoubleSide
      child.position.y = 0.005
    }
  })
  const box = new THREE.Box3().setFromObject(scene)
  const size = box.getSize(new THREE.Vector3())
  const scaleFactor = Math.min(
    window.innerWidth / size.x,
    window.innerHeight / size.y,
    2 / size.z
  ) // Normalize based on window dimensions

  return <primitive object={scene} scale={scaleFactor} />
}

const Loader = () => {
  const { progress } = useProgress()
  return <Html center>{progress.toFixed(2)}% loaded</Html>
}

const AdjustCamera = () => {
  const { camera, size } = useThree()
  useEffect(() => {
    const aspect = size.width / size.height
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.aspect = aspect
    }
    camera.updateProjectionMatrix()
  }, [camera, size])
  return null
}

interface GLBPreloadProps {
  modelPath: string
  hdriPath?: string
}

const GLBPreload: React.FC<GLBPreloadProps> = ({
  modelPath,
  hdriPath = import.meta.env.BASE_URL + '/default.hdr',
}) => {
  return (
    <Canvas>
      <AdjustCamera />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={<Loader />}>
        <Model url={modelPath} />
      </Suspense>
      <Environment files={hdriPath} />
      <OrbitControls />
    </Canvas>
  )
}

export default GLBPreload
