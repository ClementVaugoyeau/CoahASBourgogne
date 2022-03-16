import NavBar from 'components/NavBar/NavBar';
import Histogramme from 'components/Histogramme/Histogramme';
import PieChartComp from 'components/PieChart/PieChart';



const StatPage = () => {
  return (
    <div>


      <div className="containerPageNavBar">
        <NavBar />

        <div className="page">

          <div className="mainContainer">
            <h2>Stastistiques</h2>
            <div>
              <h3>Résultats matchs équipe U10</h3>
              <div className='chartContainer'>
            <Histogramme/>
            <PieChartComp/>
             </div>

             <h3>Résultats matchs équipe 2 U15</h3>
              <div className='chartContainer'>
            <Histogramme/>
            <PieChartComp/>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatPage;
