import React from 'react';
import '../stylesheets/Clear.css';

function Clear(props) {
  return (
    <button className='button-clear' onClick={() => props.clearInput()}>
      {props.children}
    </button>
  );
}

export default Clear;
