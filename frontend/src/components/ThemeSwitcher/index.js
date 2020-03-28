import React from 'react';
import Switch from 'react-switch';
import styled from 'styled-components';

const Theme = styled.body`
  display: inline-flex;
`

const ThemeSwitcher = ({toggleTheme}) => (
    <div class="thema">
      <p>Alterar tema: </p>
      <Switch 
        onChange={toggleTheme}
        checked={false}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor="#bbb"
        onColor="#999"
      />
    </div>
);

export default ThemeSwitcher;