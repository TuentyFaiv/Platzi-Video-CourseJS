import { setFavorite, loginRequest, logoutRequest } from '../index';
import movieMock from '../../__mocks__/movieMock';

describe('Actions', () => {
  it('It should create an actions to set favorite', () => {
    const payload = movieMock;
    const expected = {
      type: 'SET_FAVORITE',
      payload
    };

    expect(setFavorite(payload)).toEqual(expected);
  });

  it('It should create an actions to login request', () => {
    const payload = {
      email: 'test@test.com',
      password: 'thisisnotasecurepassword'
    };

    const expected = {
      type: 'LOGIN_REQUEST',
      payload
    };

    expect(loginRequest(payload)).toEqual(expected);
  });

  it('It should create an actions to logout request', () => {
    const payload = {};

    const expected = {
      type: 'LOGOUT_REQUEST',
      payload
    };

    expect(logoutRequest(payload)).toEqual(expected);
  });
});