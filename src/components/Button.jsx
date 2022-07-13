import React from "react";
import '../stylesheets/Button.css'

function Button(props) {

  const isOperator = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=')
  };

  return (
    <button
      className={`button-container ${isOperator(props.children) && 'operator'}`}
      onClick={() => props.clicking(props.children)}
    >
      {props.children}
    </button>
  );
}

export default Button;