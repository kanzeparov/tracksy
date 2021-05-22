export const setIsloggedIn = (isLoggedIn) => {
  return { type: 'set-is-logged-in', payload: isLoggedIn };
};

export const setCurrentUser = (user) => {
  return { type: 'set-current-user', payload: user };
};
