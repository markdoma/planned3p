import React, { useState, useEffect } from "react";

const EditIteneraryForm = props => {
  const [itenerary, setItenerary] = useState(props.currentItenerary);
  useEffect(() => {
    setItenerary(props.currentItenerary);
  }, [props]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setItenerary({ ...itenerary, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.updateItenerary(itenerary.id, itenerary);
      }}
    >
      <label> Name </label>
      <input
        type="text"
        name="name"
        value={itenerary.name}
        onChange={handleInputChange}
      />
      <button> Update itenerary </button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditIteneraryForm;
