import React from 'react';
import './home.scss';
import Search from '../components/search/Search';
import ServiceList from '../components/service-list/ServiceList';


const Home = () => {


  return (
    <div className="home">
      <div className="home__content">
        <h1 className="home__title home__title_color_black">
          Сервисы и приложения
        </h1>
        <Search />
        <ServiceList />
      </div>
    </div>
  );
};

export default Home;
