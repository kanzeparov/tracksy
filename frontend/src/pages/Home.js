import React from 'react';
import './home.scss';
import Search from '../components/search/Search';
import ServiceList from '../components/service-list/ServiceList';

const Home = () => {
  return (
    <div className="home">
      <div className="home__content">
        <Search />
        <ServiceList />
      </div>
    </div>
  );
};

export default Home;
