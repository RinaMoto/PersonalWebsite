import React from 'react';
import Contact from './pages/contact/Contact.js';
import './App.css';
import theme from './theme/theme.js'
import Navbar from "./components/navbar/Navbar.js";
import Home from "./pages/home/Home.js";
import About from "./pages/about/About.js";
import Creations from "./pages/creations/Creations.js";

import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {

  return (
    <Router> 
        <div className="App">
            <header>
              <Navbar />
            </header>
            <ThemeProvider theme={theme}>
              <main>
              <AnimatePresence exitBeforeEnter>
              <Routes>
                <Route exact path="/" element={< Home />} />
                <Route path="/about" element={< About />} />
                <Route path="/creations" element={< Creations />} />
                <Route path="/contact" element={< Contact />} />
              </Routes>
              </AnimatePresence>
              </main>
            </ThemeProvider>
          
          </div>   
      </Router>
  );
}

