import React from 'react';
import './app-list.scss';
import { useSelector } from 'react-redux';
import ServiceCard from '../service-card/service-card';

function ServiceList() {
  const { services } = useSelector((state) => state.services);

  return (
    <section className="services">
      <p className="services__count">27 приложений</p>
      <ul className="services__list">
        {services?.map((item) => (
          <ServiceCard key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}

export default ServiceList;
