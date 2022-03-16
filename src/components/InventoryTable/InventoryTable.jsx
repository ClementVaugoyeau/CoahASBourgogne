import React, { useEffect, useState } from 'react';
import './InventoryTable.scss';
import { Table } from 'react-bootstrap';
import inventoryData from '../../database/inventory-data.json'
import EventEmitter from 'events';
import axios from 'axios';
import { json, text } from 'stream/consumers';
import Store from 'electron-store';
import { nanoid } from 'nanoid';


function PlayerTable()  {

  const [data, setData] = useState(inventoryData);
  const [addFormData, setAddFormData] = useState({
    id: data.length + 1,
    type: "",
    etat: "",
    quantite: 0,
    note: "",

  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldType = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = {...addFormData};

    newFormData[fieldType] = fieldValue

    setAddFormData(newFormData);
  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: addFormData.id,
      type: addFormData.type,
      etat: addFormData.etat,
      quantite: addFormData.quantite,
      note: addFormData.note,

    };

    const newItems = [...data, newItem];
    setData(newItems);

  }



  // const store = new Store();
  // store.set('1', lol);
  // console.log(store.get('lol'))



//  useEffect(() => {
//    getData()
//  });

//   getData = () => {
//   fetch(inventoryData)
//   .then(function (response) {


//     console.log(inventoryData)
//     console.log(response)
//     return (inventoryData);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {

//   });













  return (








    <div className="playerTableContainer">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Types de matériels</th>
            <th>État</th>
            <th>Quantitée</th>

            <th>Note</th>
            <th>Modifier</th>

          </tr>
        </thead>
        <tbody>
        {data.map((postDetail)=>(
            <tr>
          <td >{postDetail.id}</td>
          <td >{postDetail.type}</td>
          <td >{postDetail.etat}</td>
          <td >{postDetail.quantite}</td>
          <td >{postDetail.note}</td>
          <td ><button   value={postDetail.id + 1} type='submit' id='modifyButton' className ='modifyButtonbtn btn-primary'>Modifier</button></td>
          </tr>
        ))}
          </tbody>

      </Table>

      <h3>Ajouter Matériels</h3>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="type"
          required="required"
          placeholder="entrez un type de matériel.."
          onChange={handleAddFormChange}
          />
        <input
          type="text"
          name="etat"
          required="required"
          placeholder="entrez l'état.."
          onChange={handleAddFormChange}
          />
         <input
          type="number"
          name="quantite"
          required="required"
          placeholder="entrez la quantité..."
          onChange={handleAddFormChange}
          />
          <input
          type="text"
          name="note"

          placeholder="entrez une note..."
          onChange={handleAddFormChange}
          />
          <button className='btn btn-primary' type='submit'>Ajouter</button>

      </form>
    </div>
  );
}

export default PlayerTable;
