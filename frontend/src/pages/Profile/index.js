import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2, FiEdit } from 'react-icons/fi';
import styled from 'styled-components';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);
  
  const history = useHistory();

  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId,
      }
    }).then(response => {
      setIncidents(response.data);
    })
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        }
      });
      
      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch {
      alert('Error ao deletar caso, tente novamente');
    }
  }

  function handleEditIncident(incident) {
    const id = incident.id
    history.push(`/incidents/${id}`, {
        id: incident.id
    });
}


  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  const Theme = styled.div`
    background: ${props => props.theme.theme.background};
    color: ${props => props.theme.theme.color};
  `

  return(
      <Theme>
      <div className="profile-container">
        <header>
          <img src={logoImg} alt="Be The Hero"/>
          <span>Bem vinda, {ongName}</span>

          <Link className="button" to="/incident"> Cadastrar novo caso </Link>
          <button onClick={handleLogout} type="button">
            <FiPower size={18} color="#E02041" />
          </button>
        </header>

        <h1>Casos Cadastrados</h1>

        <ul>
          {incidents.map(incident => (
            <li key={incident.id}>
              <strong>CASO:</strong>
              <p>{incident.title}</p>
    
              <strong>DESCRIÇÃO:</strong>
              <p>{incident.description}</p>
    
              <strong>VALOR:</strong>
              <p>{Intl.NumberFormat( 'pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>
    
              <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                <FiTrash2 size={20} color="A8A8B9" />
              </button>

              <button onClick={() => handleEditIncident(incident)} className="edit" type="button">
                <FiEdit size={20} color="A8A8B9"/>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Theme>
  );
}