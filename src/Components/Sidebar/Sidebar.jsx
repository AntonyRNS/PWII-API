import React from 'react';
import './Sidebar.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';

function Sidebar() {
  return (

    <BrowserRouter>
      <aside className="sidebar">
        {/* <ul>
          <li>Início</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul> */}
        <nav>
          <Link></Link>
          <Link></Link>
          <Link></Link>
        </nav>
      </aside>

      <Routes>
        <Route path='/' element={() => <HomePage />}></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>



  );
}

export default Sidebar;
