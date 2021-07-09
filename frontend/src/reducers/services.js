import {
  OPEN_SERVICE_MODAL,
  CLOSE_SERVICE_MODAL,
  OPEN_LOGIN_MODAL,
  CLOSE_LOGIN_MODAL,
  GET_ALL_SERVICES
} from '../actions/servicesActions';

const initialState = {
  serviceModalOpen: false,
  servicesLoginModal: false,
  isLoggedIn: false,
  services: [],
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
    case GET_ALL_SERVICES: {
      return {
        ...state,
        services: action.payload
      }
    }
    default:
      return state;
  }
};

export default servicesReducer;
