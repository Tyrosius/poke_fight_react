import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

import { Routes, Route} from "react-router-dom";
import { About } from "./components/Pages/About";
import { Home } from "./components/Pages/Home";
import { Blog } from "./components/Pages/Blog";
import { Contact } from "./components/Pages/Contact";
import ErrorPage from "./components/Pages/ErrorPage";

function App() {
  const [pokemon, setPokemons] = useState();

  const getPokemons = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPokemons(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPokemons("http://localhost:8000/");
  }, []);

  return (
    <div className="App">
        <Navbar />
        <div className="pages">
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
        </div>


      <Footer />
    </div>
  );
}

export default App;
