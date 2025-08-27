import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Timeline from './components/Timeline'
import RoutesIndex from '@/routes'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <RoutesIndex/>
    </BrowserRouter>

    </>
  )
}

export default App
