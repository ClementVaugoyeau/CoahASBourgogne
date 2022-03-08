import NavBar from 'components/NavBar/NavBar';

const Home = () => {
  return (
    <div>
      <div className="header">
        <h1 className="titleWelcome">Coach Numérique AS Bourgogne</h1>

        <div className="containerFootBallImage" />
      </div>

      <div className="containerPageNavBar">
        <NavBar />

        <div className="page">
          Page
          <div className="Hello">
            <h1>Inventaire</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
