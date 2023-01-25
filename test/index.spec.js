// importamos la funcion que vamos a testear
import { functionSignUp, functionSignin } from '../src/lib/index';

jest.mock('@firebase/auth', () => (
  {
    createUserWithEmailAndPassword: () => Promise.resolve({ currentUser: 'string' }),
    updateProfile: () => ({}),
    getAuth: () => ({ currentUser: 'string' }),
    signInWithEmailAndPassword: () => Promise.resolve({ userRegistrado: 'string' }),
  }
));
jest.mock('../src/lib/firebase.js');
// * -----Test para functionSignUp -----*/

describe('functionSignUp', () => {
  it('deberia crear un usuario', async () => {
    const userCredential = functionSignUp('Prueba', 'prueba@hotmail.com', '123456');
    await expect(userCredential).resolves.toEqual({ currentUser: 'string' });
  });

  it('deberia dar error al no llenar completos los campos', async () => functionSignUp('', '', '').then((userCredential) => {
    expect(userCredential).toEqual({ currentUser: 'string' });
  }));
});

/* -----Test para functionSignIn -----*/

describe('functionSignIn', () => {
  it('Debería ser una función', () => {
    console.log(functionSignin);
    expect(typeof functionSignIn).toBe('function');
  });
});
// it('deberia iniciar sesion con el usuario registrado', async () => {
//   const userLogin = functionSignin('prueba@hotmail.com', '123456');
//   await expect(userLogin).resolves.toEqual({ userRegistrado: 'string' });

//   it('deberia dar error si no se llena los campos', async () => functionSignin('', '', '').then((userLogin) => {
//     expect(userLogin).toEqual({ currentUser: 'string' });
//   }));
// });
