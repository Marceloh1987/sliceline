import React from 'react';
import { createGlobalStyle } from 'styled-components'
import { Navbar  } from './Navbar/Navbar';

const Globalstyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }
`
function App() {
  return (
    <>
    <Globalstyle/>
    <Navbar/>
    <div>Hello Sliceline</div>
    </>
  );
}

export default App;

