import React from 'react';
import './home.scss';
import Checkbox from '../components/checkbox/Checkbox';
import Search from '../components/search/Search';
import AppList from '../components/app-list/AppList';

const Home = () => (
  <div className="home">
    <div className="home__navigation">
      <ul className="home__list">
        <h2 className="home__title">Категории</h2>
        <li className="home__list-item">
          <Checkbox />
          Базовые
        </li>
        <li className="home__list-item">
          <Checkbox /> Коммуникации
        </li>
        <li className="home__list-item">
          <Checkbox /> Аналитика
        </li>
        <li className="home__list-item">
          <Checkbox /> Продуктивность
        </li>
        <li className="home__list-item">
          <Checkbox /> Дизайн
        </li>
        <li className="home__list-item">
          <Checkbox /> Разработка
        </li>
      </ul>
    </div>
    <div className="home__content">
      <h1 className="home__title home__title_color_black">
        Каталог сервисов и приложений
      </h1>
      <Search />
      <AppList />
    </div>
  </div>
);

export default Home;
