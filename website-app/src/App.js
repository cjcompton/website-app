import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import HomeBody from './components/HomeBody';
import About from './components/About'
import Projects from './components/Projects'
import ReachOut from './components/ReachOut'

function App() {
  return (
    <div>
      <NavBar />
      <HomeBody />
      <About />
      <Projects />
      <ReachOut />
    </div>
  );
}

export default App;
