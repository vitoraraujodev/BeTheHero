import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
  return (
    <div className="new-incident-container">
    <div className="content">
      <section>
        <img src={logoImg} alt="Be the Hero"/>  

        <h1>Cadastro</h1>
        <p>Faça seu cadastro, entre na plataforma e ajude pessoas</p>

        <Link className="back-link" to="/">
          <FiArrowLeft size={16} color="#e02041" />
          Voltar para home
        </Link>
      </section>

      <form>
        <input placeholder="Título do caso" />
        <textarea placeholder="Descrição" />
        <input placeholder="Valor em reais" />

        <button className="button" type="submit">Cadastrar</button>
      </form>
    </div>
  </div>
  );
}
