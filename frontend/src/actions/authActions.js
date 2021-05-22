import fetchApi from '../utils/fetchApi';

export const register = (data) => async (dispatch) => {
  try {
    const res = await fetchApi({
      path: 'signup',
      method: 'POST',
      body: data,
    });

    return dispatch({
      type: 'register',
      payload: res,
    });
  } catch (err) {
    return Promise.reject(err);
  }
};

export const login = (data) => async (dispatch) => {
  try {
    const res = await fetchApi({
      path: 'signin',
      method: 'POST',
      body: data,
    });

    return dispatch({
      type: 'login',
      payload: res,
    });
  } catch (err) {
    return Promise.reject(err);
  }
};
