import './App.css';
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header"
import Section from './Section';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Login from './Login';
import AllTest from './component/pages/AllTest';
import Signup from './component/pages/Signup';
import Packages from './component/pages/Packages';
import Hospitals from './component/pages/Hospitals';


function App() {

  return (
    <div >
      {/* <Dashborad /> */}
      <Router>
        <Navbar />
        <Header />
        <Routes>
          <Route path='/' element={<Section />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/alltest' element={<AllTest />} />
          <Route path='/packages' element={<Packages />} />X
          <Route path='/hospital' element={<Hospitals />} />X
        </Routes>
      </Router>
      <Footer />



    </div>
  );
}

export default App;
