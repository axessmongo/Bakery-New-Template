
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Home from './Component/Home';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <Home/>
    </div>
  );
}

export default App;
