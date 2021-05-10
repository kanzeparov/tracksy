export const setIsloggedIn = (isLoggedIn) => {
  return { type: 'SET_IS_LOGGED_IN', payload: isLoggedIn };
};

export const setCurrentUser = (user) => {
  return { type: 'SET_CURRENT_USER', payload: user };
};
