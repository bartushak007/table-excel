import React from 'react';

const Controls = ({ current, addressLine, setAddressLine }) => {
  return (
    <div className="controls">
      <div className="controls__address-line-container">
        fx
        <input
          className="controls__address-line"
          onChange={({ target }) => setAddressLine(target.value)}
          placeholder={current}
          value={addressLine}
        />
      </div>
    </div>
  );
};

export default Controls;
