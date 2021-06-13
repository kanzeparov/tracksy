import React from 'react';
import './home.scss';
import { useDispatch } from 'react-redux';
import Checkbox from '../components/checkbox/Checkbox';
import Search from '../components/search/Search';
import ServiceList from '../components/service-list/ServiceList';
import { OPEN_LOGIN_MODAL } from '../actions/servicesActions';

const Home = () => {
  const dispatch = useDispatch();

  function openLoginPopup() {
    dispatch({ type: OPEN_LOGIN_MODAL });
  }

  return (
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
        <ServiceList />
      </div>
      <button
        className="button button_type_login"
        type="button"
        onClick={openLoginPopup}
      >
        Войти как администратор
      </button>
    </div>
  );
};

export default Home;
