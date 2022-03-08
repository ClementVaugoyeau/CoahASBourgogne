import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import InventoryPage from 'page/InventoryPage';
import PlayerTablePage from 'page/PlayerTablePage';

import NavBar from 'components/NavBar/NavBar';

import football from '../../assets/football.svg';
import './App.scss';

const Hello = () => {
  return (
    <div>
      {/* <div  className='header'>
      <h1 className='titleWelcome'>Coach Numérique AS Bourgogne</h1>

       <div className='containerFootBallImage'>
       <span><img   src={football} width="100px"></img></span>

       </div>
      </div> */}

      <div className="containerPageNavBar">
        <NavBar />

        <div className="page">
          Page
          <div className="Hello">
            <div className="header">
              <h1 className="titleWelcome">Coach Numérique AS Bourgogne</h1>

              <div className="containerFootBallImage">
                <span>
                  <img src={football} alt="football" width="100px" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/PlayerTablePage" element={<PlayerTablePage />} />
        <Route path="/InventoryPage" element={<InventoryPage />} />
      </Routes>
    </Router>
  );
}
