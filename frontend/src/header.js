import React from 'react';
import styled from 'styled-components';

import './styles/themes/dark.css'

const Theme = styled.body`
  background: ${props => props.theme.theme.background};
`

function Header() {
  
  return (
    <Theme />
  );
}

export default Header;