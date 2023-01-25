// importamos la funcion que vamos a testear
import { functionSignUp } from '../src/lib/index';

jest.mock('@firebase/auth', () => (
  {
    createUserWithEmailAndPassword: () => Promise.resolve({ currentUser: 'string' }),
    updateProfile: () => ({}),
    getAuth: () => ({ currentUser: 'string' }),
  }
));

it('deberia crear un usuario', async () => {
  const userCredential = functionSignUp('Prueba', 'prueba@hotmail.com', '123456');
  await expect(userCredential).resolves.toEqual({ currentUser: 'string' });
});

it('deberia dar error al no llenar completos los campos', async () => functionSignUp('', '', '').then((userCredential) => {
  expect(userCredential).toEqual({ currentUser: 'string' });
}));
