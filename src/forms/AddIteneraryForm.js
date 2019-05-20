import React, { useState } from "react";

const AddIteneraryForm = props => {
  const initialFormState = { id: null, name: "" };
  const [itenerary, setItenerary] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setItenerary({ ...itenerary, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!itenerary.name) return;
        props.addItenerary(itenerary);
        setItenerary(initialFormState);
      }}
    >
      <label> Itenerary </label>
      <input
        type="text"
        name="name"
        value={itenerary.name}
        onChange={handleInputChange}
      />

      <button> Add new itenerary </button>
    </form>
  );
};

export default AddIteneraryForm;
