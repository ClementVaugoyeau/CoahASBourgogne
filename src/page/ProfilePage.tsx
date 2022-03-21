import NavBar from 'components/NavBar/NavBar';
import PlayerProfile from 'components/PlayersProfile/PlayersProfile';

const ProfilePage = () => {
  return (
    <div>
      <div className="containerPageNavBar">
        <NavBar />

        <div className="page">
          Page
          <div className="Hello">
            <h2>Profil Joueurs</h2>
            <PlayerProfile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
