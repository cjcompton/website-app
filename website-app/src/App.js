import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from './components/NavBar/NavBar';
import HomeBody from './components/HomeBody/HomeBody';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={
        <>
        <HomeBody />
        <Projects />
        </>
        } />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
