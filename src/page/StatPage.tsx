import NavBar from 'components/NavBar/NavBar';
import Histogramme from 'components/Histogramme/Histogramme';




const StatPage = () => {
  return (
    <div>


      <div className="containerPageNavBar">
        <NavBar />

        <div className="page">

          <div className="mainContainer">
            <h2>Stastistiques</h2>
            <div>
              <h3>Résultats match équipe U10</h3>
            <Histogramme/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatPage;
