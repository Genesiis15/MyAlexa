import { Navbar } from './Navbar/Navbar'
import { Footer } from './Footer/Footer'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
    </>
  )
}

export default App
