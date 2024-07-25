import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Layout from "./components/Layout";
import Skins from "./components/route/Skins";
import About from "./components/route/About";
import Contact from "./components/route/Contact";
import NotFound from "./components/route/NotFound";
import Home from "./components/route/Home";
import News from "./components/route/News";
import Armory from "./components/route/Armory";

import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="skins" element={<Skins />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="news" element={<News />} />
          <Route path="armory" element={<Armory />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
