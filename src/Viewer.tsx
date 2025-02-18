import { useSearchParams } from 'react-router'
import GLBPreload from './components/GLBPreload'

const Viewer = () => {
  const [searchParams] = useSearchParams()
  const url = searchParams.get('url') || 'http://localhost:5174/demo.glb'
  if (!url) return <div>URL not found</div>
  return (
    <div className='h-screen w-screen'>
      <GLBPreload modelPath={url} />
    </div>
  )
}

export default Viewer
