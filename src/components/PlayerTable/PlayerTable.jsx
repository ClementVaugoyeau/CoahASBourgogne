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
import playersData from './players-data.json';


function PlayerTable() {
  const [playersDataBase, setPlayersDatabase] = useState([playersData]);

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

  const FirstPlayer = [
    1,
    'Mark',
    'Jacob',
    18,
    'm.j@gmail.com',
    '0601020304',
    'Poussins',
  ];

  // const lis = FirstPlayer.map((item, k) => <li key={k}>{item}</li>); exemple map

  const playerList = [
    [1, '2 220 934 354', 'Mark', 'Jacob', 18, 'm.j@gmail.com', '0601020304', 'Poussins'],
    [2, '2 234 454 201', 'Erik', 'Smith', 23, 'm@outlook.com', '0601020304', 'Minimes'],
    [3, '2 836 904 394', 'Ryan', 'Jones', 20, 'm@gmail.com', '0601020304', 'Minimes'],
    [4, '2 434 300 284', 'Alexis', 'Ryan', 20, 'm@gmail.com', '0601020304', 'Cadet'],
  ];

  const playersArray = [];

  const getData=()=>{


     setPlayersDatabase(playersData);
     console.log(playersData);
     console.log(playersDataBase);

  }

  useEffect(()=>{

    getData()


  },[])


  const players = playerList.map((item, k) => (
    <tr key={k}>
      {item.map((i, k2) => (
        <td key={k2}>{i}</td>
      ))}
    </tr>
  ));



  return (
    <div className="playerTableContainer">
      <Accordion  class=''>
  <Accordion.Item className="accordion-item " eventKey="0">
    <Accordion.Header  className="accordion-header"><div className='btn btn-primary'>Ajouter un joueur</div></Accordion.Header>
    <Accordion.Body>
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Confirmer
  </Button>
</Form>

    </Accordion.Body>
  </Accordion.Item>
 </Accordion>

      <input type="text" id="myInput" placeholder="Bar de recherche" />
      <Table id='myTable' className='table' striped bordered hover responsive >
        <thead>
          <tr>
            <th>#</th>
            <th>Numero de license</th>
            <th>Prénom </th>
            <th>Nom</th>
            <th>Age</th>
            <th>Mail</th>
            <th>Téléphone</th>
            <th>Equipe</th>
          </tr>
        </thead>
        <tbody><tr></tr></tbody>
      </Table>
      <div> {

playersDataBase.map((item, key)=><p key={key}>{item.about}</p>)

}</div>
    </div>
  );
}

export default PlayerTable;
