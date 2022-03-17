import NavBar from 'components/NavBar/NavBar';
import football from '../../assets/football.svg';

const Home = () => {
  return (
    <div>


      <div className="containerPageNavBar">
        <NavBar />

        <div className="page">
          Page
          <div className="Hello">

            <h1 className="titleWelcome">Coach Numérique AS Bourgogne</h1>

              <div className="containerFootBallImage">
                <span>
                  <img src={football} alt="football" width="100px" />
                </span>

                </div>
                <p className='textContainer'> Bienvenue le logiciel de coaching de l'AS Bourgogne.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
