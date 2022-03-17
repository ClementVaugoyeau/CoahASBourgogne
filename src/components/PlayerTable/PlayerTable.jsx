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

import playersData from '../../database/players-data.json'

import { json } from 'stream/consumers';
import testCSV from './test.csv'
import { CSVLink, CSVDownload } from "react-csv";


function PlayerTable() {

  const [playersDataBase, setPlayersDatabase] = useState();





  function myFunction() {


    // Declare variables
    // eslint-disable-next-line no-var
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("td");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

   useEffect(()=>{



   },[])

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
      <Accordion  className=''>
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
  <Button variant="primary" type="submit">
    Confirmer
  </Button>
</Form>

    </Accordion.Body>
  </Accordion.Item>
 </Accordion>

      <input type="text" id="myInput" placeholder="Recherchez un joueur" />
      <Table id='myTable' className='table' striped bordered hover responsive >
        <thead>
          <tr>
            <th>#</th>
            <th>Numero de license</th>
            <th>Prénom Nom </th>
            <th>Age</th>
            <th>Mail</th>
            <th>Téléphone</th>
            <th>Equipe</th>
          </tr>
        </thead>
        {playersData.map((postDetail, index)=>{
          return <tbody> <tr>
          <td>{postDetail.id}</td>
          <td>{postDetail.licenseNumber}</td>
          <td>{postDetail.fullName}</td>
          <td>{postDetail.age}</td>
          <td>{postDetail.email}</td>
          <td>{postDetail.phoneNumber}</td>
          <td>{postDetail.categorie}</td>
          </tr>
          </tbody>
          })}

      </Table>

    </div>
  );
}

export default PlayerTable;
