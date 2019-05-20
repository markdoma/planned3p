import React from "react";

const IteneraryTable = props => (
  <table>
    <thead>
      <tr>
        <th>Itenerary</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.iteneraries.length > 0 ? (
        props.iteneraries.map(itenerary => (
          <tr key={itenerary.id}>
            <td>{itenerary.name}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(itenerary);
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteItenerary(itenerary.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No iteneraries</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default IteneraryTable;
