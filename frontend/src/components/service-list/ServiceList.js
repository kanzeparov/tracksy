import React from 'react';
import './app-list.scss';
import { useSelector } from 'react-redux';
import ServiceCard from '../service-card/service-card';

function ServiceList() {
  const { services } = useSelector((state) => state.services);

  return (
    <ul className="services">
      {services.map((item) => (
        <ServiceCard key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default ServiceList;
