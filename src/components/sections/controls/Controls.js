import React from 'react';

const Controls = ({ current, addressLine, setAddressLine, currentType }) => {
  return (
    <div className="controls">
      <div className="controls__address-line-container">
        fx
        <input
          className="controls__address-line"
          onChange={({ target }) => setAddressLine(target.value)}
          placeholder={
            currentType === 'url' ? `=HYPERLINK(${current})` : current
          }
          value={addressLine}
        />
      </div>
    </div>
  );
};

export default Controls;
