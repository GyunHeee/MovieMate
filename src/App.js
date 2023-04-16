import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './component/section/Navbar';
import Footer from './component/section/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
