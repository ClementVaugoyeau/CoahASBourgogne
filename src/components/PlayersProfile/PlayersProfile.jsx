import './PlayersProfile.scss';
import { useState } from 'react';

export default function ProfilePage() {

  const player = {
    surName: "Shaban",
    lastName: "Hamiti",
    age: 19,
    equipe: "équipe u4",
    adresse: "13 rue Jean Jaurès, 59300",
    email: "s@s.fr",
    telephone: "06.66.66.66.66",
    note: "wesh"
  }

  const matchList = [
    [1, 'Equipe u3', 'Equipe u2', "1-0", '10/03/2022'],
    [2, 'Equipe u4', 'Equipe u3', "0-2", '10/03/2022'],
    [3, 'Equipe u2', 'Equipe u1', "1-3", '11/03/2022'],
    [4, 'Equipe u1', 'Equipe u4', "2-3", '11/03/2022'],
    [5, 'Equipe u1', 'Equipe u4', "2-3", '11/03/2022'],
    [6, 'Equipe u1', 'Equipe u4', "2-3", '11/03/2022'],
    [7, 'Equipe u1', 'Equipe u4', "2-3", '11/03/2022'],
    [8, 'Equipe u1', 'Equipe u4', "2-3", '11/03/2022'],
    [9, 'Equipe u1', 'Equipe u4', "2-3", '11/03/2022'],
    [10, 'Equipe u1', 'Equipe u4', "2-3", '11/03/2022'],
    [11, 'Equipe u1', 'Equipe u4', "2-3", '11/03/2022'],
    [12, 'Equipe u1', 'Equipe u4', "2-3", '11/03/2022'],
    [13, 'Equipe u1', 'Equipe u4', "2-3", '11/03/2022'],
    [14, 'Equipe u1', 'Equipe u4', "2-3", '11/03/2022'],
    [15, 'Equipe u1', 'Equipe u4', "2-3", '11/03/2022'],
    [16, 'Equipe u1', 'Equipe u4', "2-3", '11/03/2022'],
    [17, 'Equipe u1', 'Equipe u4', "2-3", '11/03/2022'],
    [18, 'Equipe u1', 'Equipe u4', "2-3", '11/03/2022'],
    [19, 'Equipe u1', 'Equipe u4', "2-3", '11/03/2022'],
    [20, 'Equipe u1', 'Equipe u4', "2-3", '11/03/2022'],
    [21, 'Equipe u1', 'Equipe u4', "2-3", '11/03/2022'],
    [22, 'Equipe u1', 'Equipe u4', "2-3", '11/03/2022'],
    [23, 'Equipe u1', 'Equipe u4', "2-3", '11/03/2022'],
    [24, 'Equipe u1', 'Equipe u4', "2-3", '11/03/2022'],
    [25, 'Equipe u1', 'Equipe u4', "2-3", '11/03/2022'],
    [26, 'Equipe u1', 'Equipe u4', "2-3", '11/03/2022'],
    [27, 'Equipe u1', 'Equipe u4', "2-3", '11/03/2022'],
    [28, 'Equipe u1', 'Equipe u4', "2-3", '11/03/2022'],
    [29, 'Equipe u1', 'Equipe u4', "2-3", '11/03/2022'],
    [30, 'Equipe u1', 'Equipe u4', "2-3", '11/03/2022'],
    [31, 'Equipe u1', 'Equipe u4', "2-3", '11/03/2022'],
    [32, 'Equipe u1', 'Equipe u4', "2-3", '11/03/2022'],
    [33, 'Equipe u1', 'Equipe u4', "2-3", '11/03/2022'],
    [34, 'Equipe u1', 'Equipe u4', "2-3", '11/03/2022'],
    [35, 'Equipe u1', 'Equipe u4', "2-3", '11/03/2022'],
    [36, 'Equipe u1', 'Equipe u4', "2-3", '11/03/2022'],
    [37, 'Equipe u1', 'Equipe u4', "2-3", '11/03/2022'],
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
      <div className='playerBody flex'>
        <div className='playerInfoContainer'>
          <div className='playerInfo'>
            <h1>{player.surName} {player.lastName}</h1>
            <p>{player.age} ans</p>
            <p>{player.equipe}</p>
            <p>{player.adresse}</p>
            <p>{player.email}</p>
            <p>{player.telephone}</p>
            <p><em>Note :</em> {player.note}</p>
          </div>

          <div className="containerPlayerMatch">
            <table className='playerMatchTable'>
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
            </table>

            <div className='flex paginationMenuContainer'>
              <div className='flex paginationMenu'>
                <button className='pagiButton' onClick={pagPrevious}>Préc.</button>
                <div className='pagNum'>{pagNum}</div>
                <button className='pagiButton' onClick={pagNext}>Suiv.</button>
              </div>
            </div>
          </div>
        </div>

        <div className='playerDoc flex_column'>
          <h2>Documents</h2>
          <div><p>Document 1</p><button>Télécharger</button></div>
          <div><p>Document 2</p><button>Télécharger</button></div>
          <div><p>Document 3</p><button>Télécharger</button></div>
          <div><p>Document 4</p><button>Télécharger</button></div>
          <div><p>Document 5</p><button>Télécharger</button></div>
          <div><p>Document 6</p><button>Télécharger</button></div>
          <div><p>Document 7</p><button>Télécharger</button></div>
          <div><p>Document 8</p><button>Télécharger</button></div>
          <div><p>Document 9</p><button>Télécharger</button></div>
          <div><p>Document 10</p><button>Télécharger</button></div>
        </div>
      </div>
    </div>
  )
}
