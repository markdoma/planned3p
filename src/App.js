import React, { useState } from "react";
import IteneraryTable from "./tables/IteneraryTable";
import AddIteneraryForm from "./forms/AddIteneraryForm";
import EditIteneraryForm from "./forms/EditIteneraryForm";

const App = () => {
  const itenerariesData = [
    { id: 1, name: "Arrival" },
    { id: 2, name: "Meet the Local" },
    { id: 3, name: "Scuba Diving" },
    { id: 4, name: "Eat Lunch" }
  ];

  const [iteneraries, setIteneraries] = useState(itenerariesData);

  const addItenerary = itenerary => {
    itenerary.id = iteneraries.length + 1;
    setIteneraries([...iteneraries, itenerary]);
  };

  const deleteItenerary = id => {
    setIteneraries(iteneraries.filter(itenerary => itenerary.id !== id));
  };

  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: "" };

  const [currentItenerary, setCurrentItenerary] = useState(initialFormState);

  const editRow = itenerary => {
    setEditing(true);
    setCurrentItenerary({
      id: itenerary.id,
      name: itenerary.name
    });
  };

  const updateItenerary = (id, updateItenerary) => {
    setEditing(false);

    setIteneraries(
      iteneraries.map(itenerary =>
        itenerary.id === id ? updateItenerary : itenerary
      )
    );
  };

  return (
    <div className="container">
      <h1> plannedTrip.com</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2> Edit Itenerary</h2>
              <EditIteneraryForm
                editing={editing}
                setEditing={setEditing}
                currentItenerary={currentItenerary}
                updateItenerary={updateItenerary}
              />
            </div>
          ) : (
            <div>
              <h2> Add Itenerary </h2>
              <AddIteneraryForm addItenerary={addItenerary} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2> View iteneraries </h2>
          <IteneraryTable
            iteneraries={iteneraries}
            editRow={editRow}
            deleteItenerary={deleteItenerary}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
