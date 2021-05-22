const initialState = {
  isRegistered: false,
  isLoggedIn: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'register':
      return { ...state, isRegistered: action.payload };
    case 'login':
      return { ...state, isLoggedIn: action.payload };
    default:
      return state;
  }
};

export default auth;
