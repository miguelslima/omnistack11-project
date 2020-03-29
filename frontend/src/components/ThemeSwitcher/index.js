import React from 'react';
import styled from 'styled-components';

const Theme = styled.div`
  padding: 20px;  
  align-items: center;
  div {
    display: flex;
  }
  button {
    background: #555;
    color: white;
    width: 130px;
    height: 30px;
    border: none;
    border-radius: 10px;
    align-items: center;
  }
  button:hover {
    background: white;
    color: black;
  }
  p {
    color: #E02041;
    font-weight: bold;
    font-size: 20px;
    margin: 0 30px;
  }
`

const ThemeSwitcher = ({toggleTheme}) => (
    
    <Theme>
      
        <div>
          <p>Alterar tema: </p>
          <button onClick={toggleTheme}> Mudar tema </button>
        </div>
      
    </Theme>
);

export default ThemeSwitcher;