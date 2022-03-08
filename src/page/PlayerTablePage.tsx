import NavBar from 'components/NavBar/NavBar';
import PlayerTable from 'components/PlayerTable/PlayerTable';

const PlayerTablePage = () => {
  return (
    <div>
      <div className="containerPageNavBar">
        <NavBar />

        <div className="page">
          Page
          <div className="Hello">
            <h2>Tableau des joueurs</h2>
            <PlayerTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerTablePage;
