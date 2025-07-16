// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/sections/Header/Header';
import HomePage from './pages/Home/HomePage';
import About from './pages/About/About';
import TemplatesPage from './pages/TemplatePage/TemplatesPage';
import Features from './pages/Features/Features';
import Footer from './components/sections/Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/templates" element={<TemplatesPage />} />
        <Route path="/features" element={<Features />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
