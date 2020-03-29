import React, { useContext } from 'react';
import Switch from 'react-switch';
import styled, { ThemeContext} from 'styled-components';

const Theme = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  p {
    color: #E02041;
    font-weight: bold;
    font-size: 20px;
    margin: 0 50px;
  }
`

const ThemeSwitcher = ({toggleTheme}) => (
  
    <Theme class="theme">
      
      <p>Alterar tema: </p>
      <Switch 
        onChange={toggleTheme}
        checked={true}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor="#bbb"
        onColor="#999"
      />
    </Theme>
);

export default ThemeSwitcher;