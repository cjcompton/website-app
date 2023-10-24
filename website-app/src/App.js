import 'bootstrap/dist/css/bootstrap.min.css';
import HomeBody from './components/HomeBody/HomeBody';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={
        <>
        <HomeBody />
        </>
        } />
      </Routes>
    </div>
  );
}

export default App;
