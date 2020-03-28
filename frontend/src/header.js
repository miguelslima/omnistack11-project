import React from 'react';
import styled from 'styled-components';

import './styles/themes/dark.css'

import logo from '../src/assets/logo.svg'

const Theme = styled.body`
  background: ${props => props.theme.theme.background};
`

function Header() {
  
  return (
    <Theme className="header">        
      <img src={logo} alt="Heroes"/>
    </Theme>
  );
}

export default Header;