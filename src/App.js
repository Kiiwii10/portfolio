import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Footer from './components/Footer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #1a1a1a;
    color: #fff;
  }
  section {
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const App = () => (
  <>
    <GlobalStyle />
    <Navbar />
    <section id="home">
      <Home />
    </section>
    <section id="about">
      <About />
    </section>
    <section id="projects">
      <Projects />
    </section>
    <Footer />
  </>
);

export default App;
