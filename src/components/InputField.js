import React from 'react';

export default function InputField({
  labelField,
  idField,
  valueField,
  onChangeField,
}) {
  return (
    <div className="col-sm-6 mb-3">
      <div className="form-group">
        <label htmlFor={idField}>{labelField}</label>
        <input
          type="number"
          id={idField}
          className="form-control"
          value={valueField}
          onChange={onChangeField}
        />
      </div>
    </div>
  );
}
