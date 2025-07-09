// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/sections/Header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import TemplatesPage from './pages/template page/TemplatesPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/templates" element={<TemplatesPage />} />

      </Routes>
    </Router>
  );
}

export default App;
