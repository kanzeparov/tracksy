import React from 'react';
import './application-details.css';
import { useSelector } from 'react-redux';

function ApplicationDetails() {
  const { currentService } = useSelector((state) => state.services);

  return (
    <div className="service-popup">
      <div className="service-popup__header">
        <img
          className="service-popup__image"
          src={currentService?.image}
          alt={currentService?.title}
        />
        <h3 className="title">{currentService?.title}</h3>
      </div>
      <div className="service-popup__body">
        <p className="paragraph paragraph_service_about">
          {currentService?.text}
        </p>
        <p className="paragraph paragraph_service_category">
          Категория: <span>продуктивность</span>
        </p>
        <p className="paragraph paragraph_service_person">Ответственный</p>
        <div className="service-popup__person">
          <img
            className="service-popup__image service-popup__image_type_avatar"
            src={currentService?.person?.avatar}
            alt={currentService?.person?.name}
          />
          <div className="service-popup__person-contacts">
            <p className="paragraph">{currentService?.person?.name}</p>
            <p className="paragraph">
              {currentService?.person?.contacts?.email}
            </p>
            <p className="paragraph">{currentService?.person?.contacts?.tel}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicationDetails;
