const initialState = {
  data: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'set-current-user':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default user;
