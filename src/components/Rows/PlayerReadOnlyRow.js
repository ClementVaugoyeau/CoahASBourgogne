import React from 'react'

const PlayerReadOnlyRow = ({ data, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>

    <td >{data.id}</td>
    <td >{data.licenceNumber}</td>
    <td >{data.fullName}</td>
    <td >{data.age}</td>
    <td >{data.email}</td>
    <td >{data.phoneNumber}</td>
    <td >{data.categorie}</td>
    <td ><button type='button' onClick={(event) => handleEditClick(event, data)}    className ='btn-dark'>Modifier</button>
    <button type='button' onClick={() => handleDeleteClick(data.id)}    className ='btn-danger'>Supprimer</button></td>

    </tr>
  )
}

export default PlayerReadOnlyRow
