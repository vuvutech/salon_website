import React from "react";

const FormInput = ({ label, type, id, name, value, onChange, required }) => {
  return (
    <div>
      <label htmlfor="{id}">{label}:</label>
      <input
        type="{type}"
        id="{id}"
        name="{name}"
        value="{value}"
        onChange={(event) => {
          {
            onChange;
          }
        }}
        required="{required}"
      />
    </div>
  );
};

export default FormInput;
