import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ChatGPT from '../components/ChatGPT';
import ContentGenerator from '../components/ContentGenerator';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Home from '../routes/Home';
import About from '../routes/About';
import Contact from '../routes/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/chat-gpt" component={ChatGPT} />
        <Route path="/content-generator" component={ContentGenerator} />
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;
