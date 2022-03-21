import './PlayersProfile.scss';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'





export default function ProfilePage() {

  const player = {
    surName: "Shaban",
    lastName: "Hamiti",
    age: 11,
    equipe: "équipe u4",
    adresse: "13 rue Jean Jaurès, 59300",
    email: "s@s.fr",
    telephone: "06.76.56.45.33",
    note: "Attaquant"
  }

  const matchList = [
    [1, 'AS Bourgone u11', 'LOSC', "1-0", '10/03/2022'],
    [2, 'AS Bourgone u11', 'LOSC', "0-2", '10/03/2022'],
    [3, 'AS Bourgone u11', 'FC Roubaix', "1-3", '11/03/2022'],
    [4, 'AS Bourgone u11', 'FC Roubaix', "2-3", '11/03/2022'],
    [5, 'AS Bourgone u11', 'FC Roubaix', "2-3", '11/03/2022'],
    [6, 'AS Bourgone u11', 'FC Roubaix', "2-3", '11/03/2022'],
    [7, 'AS Bourgone u11', 'FC Roubaix', "2-3", '11/03/2022'],
    [8, 'AS Bourgone u11', 'FC Roubaix', "2-3", '11/03/2022'],
    [9, 'AS Bourgone u11', 'FC Roubaix', "2-3", '11/03/2022'],
    [10, 'AS Bourgone u11', 'FC Roubaix', "2-3", '11/03/2022'],
    [11, 'AS Bourgone u11', 'FC Roubaix', "2-3", '11/03/2022'],
    [12, 'AS Bourgone u11', 'FC Roubaix', "2-3", '11/03/2022'],
    [13, 'AS Bourgone u11', 'FC Roubaix', "2-3", '11/03/2022'],
    [14, 'AS Bourgone u11', 'FC Roubaix', "2-3", '11/03/2022'],
    [15, 'AS Bourgone u11', 'FC Roubaix', "2-3", '11/03/2022'],
    [16, 'AS Bourgone u11', 'FC Roubaix', "2-3", '11/03/2022'],
    [17, 'AS Bourgone u11', 'FC Roubaix', "2-3", '11/03/2022'],
    [18, 'AS Bourgone u11', 'FC Roubaix', "2-3", '11/03/2022'],
    [19, 'AS Bourgone u11', 'FC Roubaix', "2-3", '11/03/2022'],
    [20, 'AS Bourgone u11', 'FC Roubaix', "2-3", '11/03/2022'],
    [21, 'AS Bourgone u11', 'FC Roubaix', "2-3", '11/03/2022'],
    [22, 'AS Bourgone u11', 'FC Roubaix', "2-3", '11/03/2022'],
    [23, 'AS Bourgone u11', 'FC Roubaix', "2-3", '11/03/2022'],
    [24, 'AS Bourgone u11', 'FC Roubaix', "2-3", '11/03/2022'],
    [25, 'AS Bourgone u11', 'FC Roubaix', "2-3", '11/03/2022'],
    [26, 'AS Bourgone u11', 'FC Roubaix', "2-3", '11/03/2022'],
    [27, 'AS Bourgone u11', 'FC Roubaix', "2-3", '11/03/2022'],
    [28, 'AS Bourgone u11', 'FC Roubaix', "2-3", '11/03/2022'],
    [29, 'AS Bourgone u11', 'FC Roubaix', "2-3", '11/03/2022'],
    [30, 'AS Bourgone u11', 'FC Roubaix', "2-3", '11/03/2022'],
    [31, 'AS Bourgone u11', 'FC Roubaix', "2-3", '11/03/2022'],
    [32, 'AS Bourgone u11', 'FC Roubaix', "2-3", '11/03/2022'],
    [33, 'AS Bourgone u11', 'FC Roubaix', "2-3", '11/03/2022'],
    [34, 'AS Bourgone u11', 'FC Roubaix', "2-3", '11/03/2022'],
    [35, 'AS Bourgone u11', 'FC Roubaix', "2-3", '11/03/2022'],
    [36, 'AS Bourgone u11', 'FC Roubaix', "2-3", '11/03/2022'],
    [37, 'AS Bourgone u11', 'FC Roubaix', "2-3", '11/03/2022'],
  ];

  const [temp, setTemp] = useState(matchList);

  const pagSize = 10;
  const [pagNum, setPagNum] = useState(1);

  const getPage = () => {
    let tab = temp.slice((pagNum-1)*pagSize, pagNum*pagSize);
    return tab.map((v, i) =>
        <tr key={i}>
            <td>{v[0]}</td>
            <td>{v[1]}</td>
            <td>{v[2]}</td>
            <td>{v[3]}</td>
            <td>{v[4]}</td>
        </tr>
    );
  }


  const pagPrevious = () =>{
    if (pagNum > 1)
    {
      setPagNum(pagNum - 1)
    }
  }

  const pagNext = () =>{
    if (pagNum < Math.ceil(temp.length/pagSize))
    {
      setPagNum(pagNum + 1)
    }
  }

  return(
    <div className="playerContainer">
      <div className='playerBody'>

          <div className='TableContainerFitHeader'>



            <Table striped bordered hover >
            <th ><FontAwesomeIcon icon={faUser} className='fas fa-user fa-3x' ></FontAwesomeIcon></th>
            <th><h3>{player.surName} {player.lastName}</h3></th>
            <th>{player.age} ans</th>
            <th>{player.equipe}</th>
            <th>{player.adresse}</th>
            <th>{player.email}</th>
            <th>{player.telephone}</th>
            <th><em>Note :</em> {player.note}</th>
            </Table>
          </div>

          <div className='playerInfoContainer'>

          <div className="TableContainerFit">
            <Table striped bordered hover >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Équipe 1</th>
                  <th>Équipe 2</th>
                  <th>Résultat</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {getPage()}
              </tbody>
            </Table>

            <div className='flex paginationMenuContainer'>
              <div className='paginationMenu'>
                <button className='btn btn-primary' onClick={pagPrevious}>Préc.</button>
                <div className='btn bg-dark text-light'>{pagNum}</div>
                <button className='btn btn-primary ' onClick={pagNext}>Suiv.</button>
              </div>
            </div>
          </div>



        <div className="TableContainerFit">

        <Table striped bordered hover >

          <thead>
          <th>Documents</th>

          </thead>
          <tbody>
          <tr>
          <td>Document 1<button className='btn btn-primary'>Télécharger</button></td>
          </tr>
          <tr>
          <td>Document 2<button className='btn btn-primary'>Télécharger</button></td>
          </tr>
          <tr>
          <td>Document 3<button className='btn btn-primary'>Télécharger</button></td>
          </tr>
          <tr>
          <td>Document 4<button className='btn btn-primary'>Télécharger</button></td>
          </tr>
          <tr>
          <td>Document 5<button className='btn btn-primary'>Télécharger</button></td>
          </tr>
          <tr>
          <td>Document 6<button className='btn btn-primary'>Télécharger</button></td>
          </tr>
          <tr>
          <td>Document 7<button className='btn btn-primary'>Télécharger</button></td>
          </tr>




          </tbody>

          </Table>


        </div>
        </div>
      </div>
    </div>
  )
}
