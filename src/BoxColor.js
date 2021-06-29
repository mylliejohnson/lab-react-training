import React from 'react';

function BoxColor(props) {
  let styles = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
  };

  return (
    <div style={styles} className="boxColor">
      rgb({props.r}, {props.g}, {props.b})
    </div>
  );
}

export default BoxColor;