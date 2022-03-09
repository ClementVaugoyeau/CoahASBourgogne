import NavBar from 'components/NavBar/NavBar';
import Histogramme from 'components/Histogramme/Histogramme';




const StatPage = () => {
  return (
    <div>


      <div className="containerPageNavBar">
        <NavBar />

        <div className="page">
          Page
          <div className="Hello">
            <h1>Statistiques</h1>
            <div>
            <Histogramme/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatPage;
