import React from 'react'

const PlayerEditableRow = ({data, editFormData, handleEditFormChange, handleCancelClick}) => {
  return (

      <tr>
        <td >{data.id}</td>
        <td><input
          type="text"
          name="type"
          required="required"
          placeholder={data.type + "..."}
          onChange={handleEditFormChange}
          value={editFormData.type}

          />
          </td>
        <td>
        <input
          type="text"
          name="etat"
          required="required"
          placeholder="entrez l'état.."
          onChange={handleEditFormChange}
          value={editFormData.etat}

          />
        </td>
        <td>
        <input
          type="number"
          name="quantite"
          required="required"
          placeholder="entrez la quantité..."
          onChange={handleEditFormChange}
          value={editFormData.quantite}

          />
        </td>
        <td>
        <input
          type="text"
          name="note"

          placeholder="entrez une note..."
          onChange={handleEditFormChange}
          value={editFormData.note}

          />
        </td>
        <td>
          <button type="submit" className='btn-success'>Enregistrez</button>
          <button type="button" onClick={handleCancelClick} className='btn-danger'>Annuler</button>
        </td>




      </tr>




  )
}

export default PlayerEditableRow
