import { useState, useEffect } from 'react';
import NavBar from 'components/NavBar/NavBar';
import football from '../../assets/football.svg';




declare global {
  interface Window {
    electron: {
      store: {
        get: (key: string) => any;
        set: (key: string, val: any) => void;
        // any other methods you've defined...
      };
    };
  }
}

const Home = () => {

  const [cle, setCle] = useState('cle');
  const [value, setValue] = useState<string>();
  const [player, setPlayer] = useState<string>();


  useEffect(() => {

    console.log("test sauvergarde permanente", window.electron.store.get('cle'));
    const val = document.querySelector("input");
    console.log(val);
    setValue(window.electron.store.get('cle'));


  },[])




  const handleAddFormChange = () => {





    setCle("cle1");


    window.electron.store.set(cle, value);




  };

  const clickChange = () => {


    let joueur =
      {
        "id": 1,
        "licenceNumber": "3 220 934 354",
        "fullName": "Jacob Mark",
        "age": 9,
        "email": "m.j@gmail.com",
        "phoneNumber": "0601020304",
        "categorie": "U10"
      };










   const ObjectInput = document.querySelector("input");
    const val = ObjectInput?.value
    setValue(val);
    setPlayer(joueur.fullName);
    window.electron.store.set('cle', val);
    window.electron.store.set('cleJson', player);



    console.log("test 1", window.electron.store.get('cle'));
    console.log("test 2", window.electron.store.get('cleJson'));




  };

  const clickChange2 = () => {






    console.log( window.electron.store.get('cle'));




  };






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
            <p className="textContainer">
              {' '}
              Bienvenue le logiciel de coaching de l'AS Bourgogne.
            </p>
          </div>
          <input
          type="text"
          id = "etat"
          name="etat"


          placeholder="entrez l'état.."
          onChange={handleAddFormChange}
        />
          <button
            onClick={clickChange}




          >
            Enregistrez Valeur
          </button>
          <button
            onClick={clickChange2}




          >
            Lire Valeur
          </button>
          <p >voici la valeur enregistree : {value} {player}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
