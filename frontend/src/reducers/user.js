const initialState = {
  isLoggedIn: false,
  data: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_IS_LOGGED_IN':
      return { ...state, isLoggedIn: action.payload };
    case 'SET_CURRENT_USER':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default user;
