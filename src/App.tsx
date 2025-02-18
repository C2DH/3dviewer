import { Route, Routes } from 'react-router'
import './App.css'
import Viewer from './Viewer'

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Viewer />} />
      </Routes>
    </div>
  )
}

export default App
