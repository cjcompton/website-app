import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import HomeBody from './components/HomeBody/HomeBody';
import About from './components/About/about';
import { Route, Routes } from 'react-router-dom';

// <NavBar />
// <HomeBody />

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={
        <>
        <NavBar />
        <HomeBody />
        </>
        } />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
