import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';

export const signup = user => {
  debugger
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  });
};

export const login = user => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  });
};

export const logout = () => {
  return $.ajax({
    method: 'delete',
    url: '/api/session'
  });
};
