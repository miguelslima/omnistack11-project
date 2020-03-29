import React from 'react';
import styled from 'styled-components';

import './styles/themes/dark.css'

const Theme = styled.footer`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  padding: 20px;
  color: red;
  display: flex;
  justify-content: center;
  font-size: 20px;
  html {
    height: 100%;
    min-height: 100%;
  }
  body {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    }

  footer {
      margin-top: auto;
  }
  a {
    text-decoration: none;
    color: white;
    transition: all 0.4s
  }
  a:hover {
    color: red;
  }
`

function Footer() {
  
  return (
    <Theme>
      <p>Be The Hero 2020 - Desenvolvido por <a href="https://www.linkedin.com/in/miguelslima1986/">Miguel Lima</a></p>
    </Theme>
  );
}

export default Footer;