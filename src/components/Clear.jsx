import React from 'react';
import '../stylesheets/Clear.css';

function Clear(props) {
  return (
    <div className='button-clear' onClick={() => props.clearInput()}>
      {props.children}
    </div>
  );
}

export default Clear;
