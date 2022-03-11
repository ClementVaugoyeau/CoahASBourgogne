import React from 'react';
import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navBarContainer">

      <div><Link to="/">  Accueil  </Link></div>
      <div> <Link to="/PlayerTablePage"> Tableau joueurs </Link> </div>
      <div> <Link to="/InventoryPage"> Inventaire matériels </Link> </div>
      <div> <Link to="/InventoryPage"> Attestations </Link> </div>
      <div> <Link to="/StatPage"> Statistiques </Link> </div>
      <div> <Link to="/InventoryPage"> Agenda </Link> </div>

    </div>
  );
}

export default NavBar;
