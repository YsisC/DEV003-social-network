// importamos la funcion que vamos a testear

import { functionSignUp } from '../src/lib/index';

jest.mock('@firebase/auth');

it('deberia crear un usuario', () => functionSignUp('', '', '').then((userCredential) => {
  expect(userCredential).toEqual({ currentUser: 'string' });
}));
