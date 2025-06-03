import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import './App.css';
import HomePage from '../HomePage/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => console.log(data))
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path='/homepage' element={<HomePage />}></Route>
              <Route></Route>
              <Route></Route>
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
