import NavBar from 'components/NavBar/NavBar';
import InventoryTable from 'components/InventoryTable/InventoryTable'

const InventoryPage = () => {
  return (
    <div>
      <div className="containerPageNavBar">
        <NavBar />

        <div className="page">
         
          <div className="Hello">
            <h2>Inventaire</h2>
            <InventoryTable/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryPage;
