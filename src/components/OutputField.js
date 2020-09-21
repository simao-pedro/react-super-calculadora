import React from 'react';

export default function OutputField({ labelField, valueField }) {
  return (
    <div className="col-sm-4 mb-3">
      <div className="form-group">
        <label>{labelField}</label>
        <input
          type="text"
          className="form-control"
          disabled
          value={valueField}
        />
      </div>
    </div>
  );
}
