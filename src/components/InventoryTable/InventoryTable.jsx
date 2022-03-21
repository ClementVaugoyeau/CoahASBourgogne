import React, { useEffect, useState, Fragment } from 'react';
import './InventoryTable.scss';
import { Table } from 'react-bootstrap';
// import inventoryData from '../../database/inventory-data.json'
import EventEmitter from 'events';
import axios from 'axios';
import { json, text } from 'stream/consumers';
import Store from 'electron-store';
import { nanoid } from 'nanoid';
import ReadOnlyRow from 'components/Rows/ReadOnlyRow';
import EditableRow from 'components/Rows/EditableRow';

import assert, { ok } from 'assert';
import { writeJsonFileSync } from 'write-json-file';
import { write } from 'fs';
import { ContextReplacementPlugin } from 'webpack';
import { format } from 'path';
import inventoryData from '../../../db.json';

function PlayerTable() {
  const [data, setData] = useState([]);
  const [sendData, setSendData] = useState([]);
  const [key, setKey] = useState(0);
  const [addFormData, setAddFormData] = useState({
    id: data.length + 1,
    type: '',
    etat: '',
    quantite: 0,
    note: '',
  });

  useEffect(() => {

    getData();

  },[])

  const [editFormData, setEditFormData] = useState({
    id: data.id,
    type: '',
    etat: '',
    quantite: 0,
    note: '',
  });

  const [editMaterielId, setEditMaterielId] = useState(null);

  // `../../assets/inventory-data.json`

  const getData = () => {
    fetch('http://localhost:3000/inventory').
    then((response) => response.json())
    .then((data) => setData(data))

  };

  const postData = (event) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'chasuble', quantite: 10 }),
    };
    fetch('http://localhost:3000/inventory', requestOptions)
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
      type: addFormData.type,
      etat: addFormData.etat,
      quantite: addFormData.quantite,
      note: addFormData.note,
    };

    const newItems = [...data, newItem];
    setData(newItems);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: newItem.type,
        quantite: newItem.quantite,
        etat: newItem.etat,
        note: newItem.note,
      }),
    };
    fetch('http://localhost:3000/inventory', requestOptions)
      .then((response) => response.json())
      .then((data) => setSendData({ postId: data.id }));

      // const inputs = document.getElementsByTagName('input')

      // inputs.value = "";
  };

  const handleEditFormSubmit = (event, id) => {
    event.preventDefault();

    const editedData = {

      type: editFormData.type,
      etat: editFormData.etat,
      quantite: editFormData.quantite,
      note: editFormData.note
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
    fetch(`http://localhost:3000/inventory/${editMaterielId}`, requestOptions)
      .then((response) => response.json())
      .then((data) => setSendData({data}));

      setEditMaterielId(null);






  };

  const handleEditClick = (event, data, id) => {
    event.preventDefault();

    setEditMaterielId(data.id);



    const formValues = {
      id: data.id,
      type: data.type,
      etat: data.etat,
      quantite: data.quantite,
      note: data.note,
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


    fetch(`http://localhost:3000/inventory/${id}`, { method: 'DELETE' })
    .then(response => setSendData({data}));

    setData(newData);

  };

  useEffect(() => {

    getData();

},[])

  return (
    <div className="TableContainer">
      <form onSubmit={handleEditFormSubmit}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Types de matériels</th>
              <th>État</th>
              <th>Quantitée</th>

              <th>Note</th>
              <th>Actions <button type='button' onClick={getData} className='btn btn-primary'>Rafraichir</button></th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => (
              <>
                {editMaterielId === data.id ? (
                  <EditableRow
                    data={data}
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
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
        <button className="btn btn-primary" type="submit">
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default PlayerTable;
