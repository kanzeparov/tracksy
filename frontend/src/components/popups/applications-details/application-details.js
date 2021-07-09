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
          src={currentService?.imgUrl}
          alt={currentService?.name}
        />
        <div className="service-popup__title-wrapper">
          <h3 className="service-popup__header-title">
            {currentService?.name}
          </h3>
          <p className="paragraph paragraph_hashtag">#продуктивность</p>
        </div>
      </div>
      <div className="service-popup__body">
        <p className="paragraph paragraph_service_about">
          {currentService?.description}
        </p>
        <p className="paragraph paragraph_service_category">
          Категория: <span className="paragraph color_black">Продуктивность</span>
        </p>

        <div className="responsability">
          <div className="responsability__person">
            <p className="paragraph paragraph_service_person paragraph_service_category">Ответственный</p>
            <div className="responsability__person-info">
              <img
                className="service-popup__image service-popup__image_type_avatar"
                src={currentService?.peopleImg}
                alt={currentService?.people}
              />
              <div className="">
                <p className="paragraph">{currentService?.people}</p>
                <p className="paragraph">{currentService?.peopleSphere}</p>
              </div>
            </div>
          </div>
          <div className="responsability__person">
            <p className="paragraph paragraph_service_person paragraph_service_category">Контакты</p>
            <p className="paragraph paragraph_service_person ">
              {currentService?.peopleEmail}
            </p>
            <p className="paragraph">{currentService?.peoplePhone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicationDetails;
