/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
/* eslint-disable one-var */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';

import './PlayerTable.scss';
import { Table, Accordion, Form, Button } from 'react-bootstrap';

import PlayerReadOnlyRow from 'components/Rows/PlayerReadOnlyRow';
import PlayerEditableRow from 'components/Rows/PlayerEditableRow';


import { json } from 'stream/consumers';
import testCSV from './test.csv'
import { CSVLink, CSVDownload } from "react-csv";




function PlayerTable() {

  const [data, setData] = useState([]);
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
    fetch('http://localhost:3000/player').
    then((response) => response.json())
    .then((data) => setData(data))

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

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        licenceNumber: newItem.licenceNumber,
        fullName: newItem.fullName,
        age: newItem.age,
        email: newItem.email,
        phoneNumber: newItem.phoneNumber,
        categorie: newItem.categorie
      }),
    };
    fetch('http://localhost:3000/player', requestOptions)
      .then((response) => response.json())
      .then((data) => setSendData({ postId: data.id }));

      // const inputs = document.getElementsByTagName('input')

      // inputs.value = "";
  };

  const handleEditFormSubmit = (event, id) => {
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

    // const requestOptions = {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formValues),
    // };
    // fetch(`http://localhost:3000/inventory${id}`, requestOptions)
    //   .then((response) => response.json())
    //   .then((data) => setSendData({ postId: data.id }));

  };

  const handleCancelClick = () => {
    setEditMaterielId(null);
  };

  const handleDeleteClick = (id) => {
    const newData = [...data];

    const index = data.findIndex((data) => data.id === id);


    newData.splice(index, 1);


    fetch(`http://localhost:3000/player/${id}`, { method: 'DELETE' })
    .then(response => setSendData({data}));

    setData(newData);

  };







//  Fonction recherche par element

  // function myFunction() {


  //   // Declare variables
  //   // eslint-disable-next-line no-var
  //   var input, filter, table, tr, td, i, txtValue;
  //   input = document.getElementById("myInput");
  //   filter = input.value.toUpperCase();
  //   table = document.getElementById("myTable");
  //   tr = table.getElementsByTagName("td");

  //   // Loop through all table rows, and hide those who don't match the search query
  //   for (i = 0; i < tr.length; i++) {
  //     td = tr[i].getElementsByTagName("td")[0];
  //     if (td) {
  //       txtValue = td.textContent || td.innerText;
  //       if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //         tr[i].style.display = "";
  //       } else {
  //         tr[i].style.display = "none";
  //       }
  //     }
  //   }
  // }


  // const players = playerList.map((item, k) => (
  //   <td key={k}>{item, console.log(fo)} </td>
  // ));



  // const players = playerList.map((item, k) => (
  //   <tr key={k}>
  //     {item.map((i, k2) => (
  //       <td key={k2}>{i}</td>
  //     ))}
  //   </tr>
  // ));





  return (
    <div className="playerTableContainer">
      {/* <Accordion  className=''>
  <Accordion.Item className="accordion-item " eventKey="0">
    <Accordion.Header  className="accordion-header"><div className='btn btn-primary'>Ajouter un joueur ▼ </div></Accordion.Header>
    <Accordion.Body>
    <Form className="formContainer">
  <Form.Group  className="formGroup mb-1" controlId="formBasicEmail">
    <Form.Label>Prénom</Form.Label>

    <Form.Control className='inputFormPlayers' type="name" placeholder="Prénom" />

  </Form.Group>

  <Form.Group className="formGroup mb-3" controlId="formBasicPassword">
    <Form.Label>Nom</Form.Label>
    <Form.Control type='name' placeholder="Nom" />
  </Form.Group>
  <Form.Group className="formGroup mb-3" controlId="formBasicPassword">
    <Form.Label>Age</Form.Label>
    <Form.Control type="Age" placeholder="Age" />
  </Form.Group>
  <Form.Group className="formGroup mb-3" controlId="formBasicPassword">
    <Form.Label>Mail</Form.Label>
    <Form.Control type="Mail" placeholder="Mail" />
  </Form.Group>
  <Form.Group className="formGroup mb-3" controlId="formBasicPassword">
    <Form.Label>Téléphone</Form.Label>
    <Form.Control type="Téléphone" placeholder="Téléphone" />
  </Form.Group>
  <Form.Group className="formGroup mb-3" controlId="formBasicPassword">
    <Form.Label>Equipe</Form.Label>
    <Form.Control type="Equipe" placeholder="Equipe" />
  </Form.Group>
  {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
  {/* <Button variant="primary" type="submit">
    Confirmer
  </Button>
</Form>

    </Accordion.Body>
  </Accordion.Item>
 </Accordion> */}

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
          required="required"
          placeholder="entrez Prénom Nom"
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          name="age"
          required="required"
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
