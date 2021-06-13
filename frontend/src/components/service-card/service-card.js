import React from 'react';
import './service-card.scss';
import { useDispatch } from 'react-redux';
import { OPEN_SERVICE_MODAL } from '../../actions/servicesActions';

function ServiceCard({ item }) {
  // const currentService = useSelector((state) => state.services);
  const dispatch = useDispatch();

  function openServiceModal() {
    dispatch({ type: OPEN_SERVICE_MODAL, payload: item });
  }
  return (
    <li className="card">
      <div className="card__header">
        <img className="card__image" src={item.image} alt="lgoo" />
        <h3 className="card__title">{item.title}</h3>
      </div>
      <button onClick={openServiceModal} type="button" className="card__button">
        Узнать больше
      </button>
    </li>
  );
}

export default ServiceCard;
