import React, { useEffect, useState, Fragment } from 'react';
import './InventoryTable.scss';
import { Table } from 'react-bootstrap';
import inventoryData from '../../database/inventory-data.json'
import EventEmitter from 'events';
import axios from 'axios';
import { json, text } from 'stream/consumers';
import Store from 'electron-store';
import { nanoid } from 'nanoid';
import ReadOnlyRow from 'components/Rows/ReadOnlyRow';
import EditableRow from 'components/Rows/EditableRow';



import assert from 'assert';
import { writeJsonFileSync } from 'write-json-file';
import { write } from 'fs';
import { ContextReplacementPlugin } from 'webpack';
import { format } from 'path';



function PlayerTable()  {

  const [data, setData] = useState(inventoryData);
  const [addFormData, setAddFormData] = useState({
    id: data.length + 1,
    type: "",
    etat: "",
    quantite: 0,
    note: "",

  });

  const [editFormData, setEditFormData] = useState({
    id: data.id,
    type: "",
    etat: "",
    quantite: 0,
    note: "",

  })

  const [editMaterielId, setEditMaterielId] = useState(null);



  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldType = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = {...addFormData};

    newFormData[fieldType] = fieldValue

    setAddFormData(newFormData);
  }

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldType = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = {...editFormData};
    newFormData[fieldType] = fieldValue;

    setEditFormData(newFormData);




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
    inventoryData.push(newItem);
  }

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedData = {
      id: editFormData.id,
      type: editFormData.type,
      etat: editFormData.etat,
      quantite: editFormData.quantite,
      note: editFormData.note,


    }

    const newData = [...data];

    const index = data.findIndex((contact) => contact.id === editMaterielId);

    newData[index] = editedData;
    setData(newData);
    setEditMaterielId(null);

  }

  const handleEditClick = (event, data) => {
    event.preventDefault();

    setEditMaterielId(data.id);


    const formValues = {
      id: data.id,
    type: data.type,
    etat: data.etat,
    quantite: data.quantite,
    note: data.note,

    }

    setEditFormData(formValues);
  }

  const handleCancelClick = () => {
    setEditMaterielId(null);

  }

  const handleDeleteClick = (dataId) => {
    const newData = [...data];

    const index = data.findIndex((data) => data.id === dataId);

    newData.splice(index, 1)

    setData(newData);

  }




  // const store = new Store();
  // store.set('1', lol);
  // console.log(store.get('lol'))



//  useEffect(() => {

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








    <div className="InventoryTableContainer">
      <form onSubmit={handleEditFormSubmit}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Types de matériels</th>
            <th>État</th>
            <th>Quantitée</th>

            <th>Note</th>
            <th>Actions</th>

          </tr>
        </thead>
        <tbody>
        {data.map((data)=>(

          <Fragment>

            {editMaterielId === data.id ? (
            <EditableRow data={data} editFormData={editFormData}
            handleEditFormChange={handleEditFormChange}
            handleCancelClick={handleCancelClick} />
            ) : (
              <ReadOnlyRow data={data} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />

              )}

            </Fragment>

            ))}
          </tbody>

      </Table>
      </form>

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
