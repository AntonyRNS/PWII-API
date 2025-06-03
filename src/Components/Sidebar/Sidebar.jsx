import React from 'react';
import './Sidebar.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (

    <div>
      <aside className="sidebar">
        {/* <ul>
          <li>Início</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul> */}
        <nav>
          <Link to={'/homepage'}>Início</Link> <br />
          <Link to={'/sobre'}>Sobre</Link> <br />
          <Link to={'/Contato'}>Contato</Link> <br />
        </nav>
      </aside>

      
    </div>





  );
}

export default Sidebar;
