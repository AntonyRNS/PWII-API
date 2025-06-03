import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import './App.css';
import HomePage from '../HomePage/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sobre from '../Sobre/Sobre';
import Contato from '../Contato/Contato';
import TelaLogin from '../TelaLogin/TelaLogin';
import Form from '../Form/Form';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path='/homepage' element={<HomePage />}></Route>
              <Route path='/sobre' element={<Sobre />}></Route>
              <Route path='/contato' element={<Contato/>}></Route>
              <Route path='/' element={<TelaLogin/>}></Route>
              <Route path='/form' element={<Form />}></Route>
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
