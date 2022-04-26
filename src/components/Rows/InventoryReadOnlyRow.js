import React from 'react'

const ReadOnlyRow = ({ data, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>

    <td >{data.id}</td>
    <td >{data.type}</td>
    <td >{data.etat}</td>
    <td >{data.quantite}</td>
    <td >{data.note}</td>
    <td ><button type='button' onClick={(event) => handleEditClick(event, data)}    className ='btn-dark'>Modifier</button>
    <button type='button' onClick={() => handleDeleteClick(data.id)}    className ='btn-danger'>Supprimer</button></td>

    </tr>
  )
}

export default ReadOnlyRow
