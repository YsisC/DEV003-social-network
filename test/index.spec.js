// importamos la funcion que vamos a testear
import {
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { functionSignUp } from '../src/lib/index';

jest.mock('firebase/auth');

it('deberia crear un usuario', () => functionSignUp('Prueba', 'prueba@hotmail.com', '123456').then((userCredential) => {
  console.log(userCredential);
  console.log(createUserWithEmailAndPassword().then(console.log));
  expect(userCredential).toEqual({ currentUser: 'string' });
}));
it('deberia dar error al no llenar completos los campos', () => functionSignUp('', '', '').then((userCredential) => {
  expect(userCredential).toEqual({ currentUser: 'string' });
}));
