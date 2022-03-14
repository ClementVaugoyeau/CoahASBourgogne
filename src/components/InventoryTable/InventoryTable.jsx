import React, { useState } from 'react';
import './InventoryTable.scss';
import { Table } from 'react-bootstrap';
import inventoryData from '../../database/inventory-data.json'



function PlayerTable() {


  const FirstPlayer = [
    1,
    'Mark',
    'Jacob',
    18,
    'm.j@gmail.com',
    '0601020304',
    'Poussins',
  ];



  const InventoryList = [
    [1, 'Maillots S', 'Neufs', 60, '', 'Racheter 10 maillot pour la prochaine saison'],
    [2, 'Maillots M', 'Neufs', 30, '', ''],
    [3, 'Chasubles', 'Bon', 123, '', ''],
    [4, 'Plots', 'Bon', 60, '', ''],

  ];

  const materials = InventoryList.map((item, k) => (
    <tr key={k}>
      {item.map((i, k2) => (
        <td key={k2}>{i}</td>
      ))}
    </tr>
  ));

  return (
    <div className="playerTableContainer">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Types de matériels</th>
            <th>État</th>
            <th>Quantitée</th>

            <th>Note</th>
            <th>Modifier</th>

          </tr>
        </thead>
        {inventoryData.map((postDetail, index)=>{
          return <tbody> <tr>
          <td>{postDetail.id}</td>
          <td>{postDetail.type}</td>
          <td>{postDetail.etat}</td>
          <td>{postDetail.quantite}</td>
          <td>{postDetail.note}</td>
          <td><button className='btn btn-dark'>Modifier</button></td>
          </tr>
          </tbody>
          })}
      </Table>
    </div>
  );
}

export default PlayerTable;
