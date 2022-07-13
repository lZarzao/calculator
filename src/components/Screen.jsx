import React from "react";
import '../stylesheets/Screen.css'

function Screen({ input }) {
  return(
    <section className='input'>
      {input}
    </section>
  );
}

export default Screen;