import React from 'react';
import './app-list.scss';
import Miro from '../../assets/images/miro.jpg';

function AppList() {
  return (
    <ul className="applications">
      <li className="card">
        <div className="card__header">
          <img className="card__image" src={Miro} alt="lgoo" />
          <h3 className="card__title">Miro</h3>
        </div>
        <button type="button" className="card__button">
          Узнать больше
        </button>
      </li>
      <li className="card">
        <div className="card__header">
          <img className="card__image" src={Miro} alt="lgoo" />
          <h3 className="card__title">Miro</h3>
        </div>
        <button type="button" className="card__button">
          Узнать больше
        </button>
      </li>
      <li className="card">
        <div className="card__header">
          <img className="card__image" src={Miro} alt="lgoo" />
          <h3 className="card__title">Miro</h3>
        </div>
        <button type="button" className="card__button">
          Узнать больше
        </button>
      </li>
      <li className="card">
        <div className="card__header">
          <img className="card__image" src={Miro} alt="lgoo" />
          <h3 className="card__title">Miro</h3>
        </div>
        <button type="button" className="card__button">
          Узнать больше
        </button>
      </li>
      <li className="card">
        <div className="card__header">
          <img className="card__image" src={Miro} alt="lgoo" />
          <h3 className="card__title">Miro</h3>
        </div>
        <button type="button" className="card__button">
          Узнать больше
        </button>
      </li>
      <li className="card">
        <div className="card__header">
          <img className="card__image" src={Miro} alt="lgoo" />
          <h3 className="card__title">Miro</h3>
        </div>
        <button type="button" className="card__button">
          Узнать больше
        </button>
      </li>
    </ul>
  );
}

export default AppList;
