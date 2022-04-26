import React, { useState, useEffect } from 'react';

import { Table, Accordion, Form, Button } from 'react-bootstrap';

import './PlayerTable.scss';

import PlayerReadOnlyRow from 'components/Rows/PlayerReadOnlyRow';
import PlayerEditableRow from 'components/Rows/PlayerEditableRow';
// import playerData from '../../../assets/db.json';


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

//Post and Delete updtae with electron store




function PlayerTable() {

  const [data, setData] = useState<any[]>([]);
  const [sendData, setSendData] = useState([]);
  const [key, setKey] = useState(0);
  const [addFormData, setAddFormData] = useState({
    id: data.length + 1,
    licenceNumber: '',
    fullName: '',
    age: 0,
    email: '',
    phoneNumber: '',
    categorie: ''
  });

  const [editFormData, setEditFormData] = useState({
    id: data.id,
    licenceNumber: '',
    fullName: '',
    age: 0,
    email: '',
    phoneNumber: '',
    categorie: ''
  });

const [editMaterielId, setEditMaterielId] = useState(null);


useEffect(()=>{

    getData();

  },[])


  const getData = () => {

    setData(window.electron.store.get('1'))


  };

  const postData = (event) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'chasuble', quantite: 10 }),
    };
    fetch('http://localhost:3000/player', requestOptions)
      .then((response) => response.json())
      .then((data) => setSendData({ postId: data.id }));
  };

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldType = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };

    newFormData[fieldType] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldType = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldType] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();



    const newItem = {
      id: addFormData.id + data.length,
      licenceNumber: addFormData.licenceNumber,
      fullName: addFormData.fullName,
      age: addFormData.age,
      email: addFormData.email,
      phoneNumber: addFormData.phoneNumber,
      categorie: addFormData.categorie
    };

    const newItems = [...data, newItem];
    setData(newItems);

    window.electron.store.set('1', newItems);

  };

  const handleEditFormSubmit = (event : React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const editedData = {

      licenceNumber: editFormData.type,
      fullName: editFormData.fullName,
      age: editFormData.age,
      email: editFormData.email,
      phoneNumber: editFormData.phoneNumber,
      categorie: editFormData.categorie
    };

    const newData = [...data];

    const index = data.findIndex((data) => data.id === editMaterielId);


    newData[index] = editedData;
    setData(newData);

    const idForFecth = editMaterielId;


    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editedData),
    };
    fetch(`http://localhost:3000/player/${editMaterielId}`, requestOptions)
      .then((response) => response.json())
      .then((data) => setSendData({data}));

      setEditMaterielId(null);

  };

  const handleEditClick = (event, data, id) => {
    event.preventDefault();

    setEditMaterielId(data.id);

    const formValues = {
      id: data.id,
      licenceNumber: data.licenceNumber,
      fullName: data.fullName,
      age: data.age,
      email: data.email,
      phoneNumber: data.phoneNumber,
      categorie: data.categorie,
    };

    setEditFormData(formValues);

  };

  const handleCancelClick = () => {
    setEditMaterielId(null);
  };

  const handleDeleteClick = (id) => {
    const newData = [...data];

    const index = data.findIndex((data) => data.id === id);


    newData.splice(index, 1);

    window.electron.store.set('1', newData);

    setData(newData);

  };

  const SavePlayerElectronStore = () => {

  
  };

  const ReadPlayerElectronStore = () => {

      let val = window.electron.store.get('1');
   console.log(val);
  };


  return (

    <div className="playerTableContainer">

  <h3>Ajoutez joueurs</h3>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="licenceNumber"
          placeholder="entrez nº de licence..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="fullName"
          required={true}
          placeholder="entrez Prénom Nom"
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          name="age"
          required={true}
          placeholder="entrez l'age..."
          onChange={handleAddFormChange}
        />
        <br/>
        <input
          type="text"
          name="email"
          placeholder="entrez un email..."
          onChange={handleAddFormChange}
        />
         <input
          type="text"
          name="phoneNumber"
          placeholder="entrez un nº de téléphone..."
          onChange={handleAddFormChange}
        />
         <input
          type="text"
          name="categorie"
          placeholder="categorie"
          onChange={handleAddFormChange}
        />
        <button className="btn btn-primary" type="submit">
          Ajouter
        </button>
      </form>

      <button  onClick={SavePlayerElectronStore} >Enregistrez joueur electron store</button>
      <button  onClick={ReadPlayerElectronStore} >Lire joueurs</button>


      {/* <input type="text" id="myInput" placeholder="Recherchez un joueur" /> */}
      <form onSubmit={handleEditFormSubmit}>
      <Table id='myTable' className='table' striped bordered hover responsive >
        <thead>
          <tr>
            <th>#</th>
            <th>Numero de licence</th>
            <th>Prénom Nom </th>
            <th>Age</th>
            <th>Mail</th>
            <th>Téléphone</th>
            <th>Equipe</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {data.map((data) => (
              <>
                {editMaterielId === data.id ? (
                  <PlayerEditableRow
                    data={data}
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <PlayerReadOnlyRow
                    data={data}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}


                  />
                )}
              </>
            ))}
          </tbody>

      </Table>
      </form>


    </div>
  );
}

export default PlayerTable;
