import {
  OPEN_SERVICE_MODAL,
  CLOSE_SERVICE_MODAL,
  OPEN_LOGIN_MODAL,
  CLOSE_LOGIN_MODAL,
} from '../actions/servicesActions';

const initialState = {
  serviceModalOpen: false,
  servicesLoginModal: false,
  isLoggedIn: false,
  services: [
    {
      image: 'https://cdn.worldvectorlogo.com/logos/miro-2.svg',
      title: 'Miro',
      id: 1,
      text: `Платформа для совместной работы распределенных команд (в том числе при дистанционной работе отдельных сотрудников)
      `,
      person: {
        name: 'Mark Petrov',
        workAt: 'IT закупки',
        avatar:
          'https://backlightblog.com/images/2020/10/blur-photo-background-header-1160x710.jpg',
        contacts: {
          email: 'm.petrov@tracksy.com',
          tel: '+7 (900) 777-77-77',
        },
      },
    },
    {
      image:
        'https://www.simonevolpi.com/wp-content/uploads/2020/05/logo-zoom.png',
      title: 'Zoom',
      id: 2,
      text: `Программный инструмент для управления проектами. Используется для формирования списка задач, отслеживания общего прогресса команды...
      `,
      person: {
        name: 'Mark Petrov',
        workAt: 'IT закупки',
        avatar:
          'https://backlightblog.com/images/2020/10/blur-photo-background-header-1160x710.jpg',
        contacts: {
          email: 'm.petrov@tracksy.com',
          tel: '+7 (900) 777-77-77',
        },
      },
    },
    {
      image:
        'https://www.assaggiatricediviaggi.it/wp-content/uploads/2020/11/netflix-1020x600.png',
      title: 'Netflix',
      text: `Платформа для совместной работы распределенных команд (в том числе при дистанционной работе отдельных сотрудников)`,
      person: {
        name: 'Mark Petrov',
        workAt: 'IT закупки',
        avatar:
          'https://backlightblog.com/images/2020/10/blur-photo-background-header-1160x710.jpg',
        contacts: {
          email: 'm.petrov@tracksy.com',
          tel: '+7 (900) 777-77-77',
        },
      },
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
      title: 'Notion',
      text: `Платформа для совместной работы распределенных команд (в том числе при дистанционной работе отдельных сотрудников`,
      person: {
        name: 'Mark Petrov',
        workAt: 'IT закупки',
        avatar:
          'https://backlightblog.com/images/2020/10/blur-photo-background-header-1160x710.jpg',
        contacts: {
          email: 'm.petrov@tracksy.com',
          tel: '+7 (900) 777-77-77',
        },
      },
    },
  ],
  currentService: null,
};

function openServiceModal(state, action) {
  console.log(action.payload);
  return { ...state, serviceModalOpen: true, currentService: action.payload };
}

function closeServiceModal(state) {
  return { ...state, serviceModalOpen: false, currentService: null };
}

function servicesLoginPopupOpen(state, action) {
  console.log(action.payload);
  return {
    ...state,
    servicesLoginModal: true,
  };
}

function servicesLoginPopupClose(state) {
  return { ...state, servicesLoginModal: false };
}

const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_SERVICE_MODAL: {
      return openServiceModal(state, action);
    }

    case CLOSE_SERVICE_MODAL: {
      return closeServiceModal(state, action);
    }
    case OPEN_LOGIN_MODAL: {
      return servicesLoginPopupOpen(state, action);
    }
    case CLOSE_LOGIN_MODAL: {
      return servicesLoginPopupClose(state, action);
    }
    default:
      return state;
  }
};

export default servicesReducer;
