import React from 'react';

const Subsection = ({ title, abstract }) => {
  return (
    <div className="subsection">
      <h3>{title}</h3>
      <p><b><i>Abstract.</i></b> {abstract}</p>
    </div>
  );
};

export default Subsection;
