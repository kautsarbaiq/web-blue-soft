import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </Layout>
  );
}

export default App;
