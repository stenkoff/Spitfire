import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = 'CLEAR ERRORS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const receiveCurrentUser = ({user, playlists, artists, albums}) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: user,
  playlists,
  artists,
  albums
});
export const logoutCurrentUser = ({user, playlists}) => ({
  type: LOGOUT_CURRENT_USER,
  currentUser: user,
  playlists,
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
})

export const signup = user => dispatch => {
  return APIUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
      error => dispatch(receiveErrors(error.responseJSON)));
};

export const login = user => dispatch => {
  return APIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
      error => dispatch(receiveErrors(error.responseJSON)));
};

export const logout = () => dispatch => {
  return APIUtil.logout().then(() => dispatch(logoutCurrentUser({user: null, playlists: {}})))
};
