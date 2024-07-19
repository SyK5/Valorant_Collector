import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";

import Skins from './components/Skins';
import About from './components/About';
import Contact from './components/Contact';
import Layout from './components/Layout';
import NotFound from './components/NotFound';
import Home from './components/Home';

import './App.scss'
import News from './components/News';
import Armory from './components/Armory';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='skins' element={<Skins />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='news' element={<News />} />
        <Route path='armory' element={<Armory />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
