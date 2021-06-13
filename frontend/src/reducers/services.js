import {
  OPEN_SERVICE_MODAL,
  CLOSE_SERVICE_MODAL,
} from '../actions/servicesActions';

const initialState = {
  serviceModalOpen: false,
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
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a `,
    },
    {
      image:
        'https://www.assaggiatricediviaggi.it/wp-content/uploads/2020/11/netflix-1020x600.png',
      title: 'Netflix',
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a `,
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
      title: 'Notion',
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a `,
    },
  ],
  currentService: null,
};

function openServiceModal(state, action) {
  console.log(action.payload);
  return { ...state, serviceModalOpen: true, currentService: action.payload };
}

function closeServiceModal(state, action) {
  return { ...state, serviceModalOpen: true, currentService: action.payload };
}

const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_SERVICE_MODAL:
      return openServiceModal(state, action);
    case CLOSE_SERVICE_MODAL:
      return closeServiceModal(state, action);
    default:
      return state;
  }
};

export default servicesReducer;
