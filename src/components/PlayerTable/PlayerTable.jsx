import React, { useState } from 'react';
import './PlayerTable.scss';
import { Table } from 'react-bootstrap';
import data from '../mock-data.json';

function PlayerTable() {
  const [contacts, setContacts] = useState(data);

  function myFunction() {


    // Declare variables
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







  const players = playerList.map((item, k) => (
    <tr key={k}>
      {item.map((i, k2) => (
        <td key={k2}>{i}</td>
      ))}
    </tr>
  ));

  return (
    <div className="playerTableContainer">

      <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Bar de recherche" />
      <Table id='myTable' className='playerTable' striped bordered hover responsive >
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
        <tbody>{players}</tbody>
      </Table>
    </div>
  );
}

export default PlayerTable;
