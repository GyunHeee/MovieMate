import './App.css';
import Home from './component/pages/Home';
import { Outlet } from 'react-router-dom';
import Navbar from './component/section/Navbar';
import Footer from './component/section/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
