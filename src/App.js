import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/calculator/Calculator';
import Quotes from './components/quotes/Quotes';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="circle" />
        <div className="c-2" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
