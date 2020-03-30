import React, { useState, useRef, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import swal from 'sweetalert';
import styled from 'styled-components';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function EditIncident() {

  const history = useHistory();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  let id = 0;
  if (history.location.state && history.location.state.id) {
      id = history.location.state.id;
  } else {
      history.push('/profile');
  }

  useEffect(() => {
      api.get(`incidents/${id}`)
      .then(response => {
          setTitle(response.data.title);
          setDescription(response.data.description);
          setValue(response.data.value);
      })
      .catch(err => {
          if(err.response.status === 401) {
              history.push('/');
          }
        });
  }, [id, history]);
  
  async function handleUpdateIncident(e) {
      e.preventDefault();

      const data = {
          title,
          description,
          value,
      };

      try {
          await api.put(`incidents/${id}`, data);

          swal({
            title: 'Caso editado com sucesso!',
            icon: "success",
            button: true,
            dangerMode: true,
          });  

          history.push('/profile');
      } catch (error) {
        swal({
          title: 'Falha ao atualizar o caso!',
          text: 'Corrija seus dados e tente novamente!',
          icon: 'error',
          button: true,
          dangerMode: true,
        })
      }
  }

  // const Theme = styled.div`
  //   background: ${props => props.theme.theme.background};
  //   color: ${props => props.theme.theme.color};

  // `

  return (
    
      <div className="new-incident-container">
       
        <div className="content">
          <section>
            <img src={logoImg} alt="Be The Hero"/>

            <h1>Editar o caso</h1>
            <p>Edite o caso detalhadamente para encontrar um herói para resolver isso.</p>

            <Link className="back-link" to="/profile">
              <FiArrowLeft size={16} color="#E02041" />
              Voltar para home
            </Link>

          </section>
      
          <form onSubmit={handleUpdateIncident}>
            <input  
              placeholder="Título do Caso"
              autoFocus
              value={title}
              onChange={ e => setTitle(e.target.value)}
            />
            <textarea   
              placeholder="Descrição" 
              value={description}
              onChange={ e => setDescription(e.target.value)}
            />
            <input  
              placeholder="Valor em reais" 
              value={value}
              onChange={ e => setValue(e.target.value)}
            />

            <button className="button" type="submit">Atualizar</button>
          </form>
        </div>
      </div>

  )
}