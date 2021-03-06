import React, { useState } from 'react';
import swal from 'sweetalert';
import {Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';


import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png'

export default function Logon() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id })

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (err) {
      swal({
        title: 'Falha no login!',
        text: 'Corrija seus dados e entre novamente!',
        icon: 'error',
        button: true,
        dangerMode: true,
      })
    }
  }

  const Theme = styled.div`
    background: ${props => props.theme.theme.background};
    color: ${props => props.theme.theme.color};
  `
    
  return (
    
    <Theme>        
      <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero"/>

        <form onSubmit={handleLogin}>
          <div className="theme">
            <h1>Faça seu logon</h1>
          </div>
          <input 
            placeholder="Sua ID" 
            autoFocus
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes"/>
      </div>
    </Theme>
  );
}