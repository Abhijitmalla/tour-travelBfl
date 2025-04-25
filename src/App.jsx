import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <div>
<Navbar/>
<Home/>
<Main/>
<Footer/>
      </div>
      </>
       )
}

export default App;
