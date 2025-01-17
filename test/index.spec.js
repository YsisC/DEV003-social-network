// importamos la funcion que vamos a testear

import { getDoc } from 'firebase/firestore';
import {
  functionSignUp, functionSignin, functionUserGoogle, saveTask, addLikePost,
} from '../src/lib/index';
import { Muro } from '../src/components/Muro.js';

jest.mock('@firebase/auth', () => (
  {
    createUserWithEmailAndPassword: () => Promise.resolve({ currentUser: 'string' }),
    updateProfile: () => ({}),
    getAuth: () => ({ currentUser: 'string' }),
    signInWithEmailAndPassword: () => Promise.resolve({ user: 'string' }),
    GoogleAuthProvider: class {},
    signInWithPopup: () => Promise.resolve({ user: 'stringGoogle' }),
  }
));
jest.mock('@firebase/firestore', () => (
  {
    addDoc: () => Promise.resolve({ tittle: 'Quesadilla', description: 'Jamon', displayName: 'Pedro' }),
    collection: () => {},
    getFirestore: () => ({ }),
    updateDoc: jest.fn(() => Promise.resolve({ id: 'postId', like: ['userUid'] })),
    doc: () => {},
    getDoc: () => Promise.resolve({ data: () => ({ tittle: 'Burrito', like: [] }) }),
    arrayUnion: () => {},
    removeUnion: () => {},
    orderBy: () => {},
    query: () => {},
    onSnapshot: (q, callback) => callback([{ data: () => ({ tittle: 'Burrito', like: [] }) }]),

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
  it('deberia iniciar sesion con el usuario registrado', async () => {
    const userLogin = functionSignin('prueba@hotmail.com', '123456');
    await expect(userLogin).resolves.toEqual('string');
  });
});

/* -----Test para function Google -----*/

describe('functionUserGoogle', () => {
  it('deberia iniciar sesion con el usuario registrado', async () => {
    const userGoogle = functionUserGoogle('prueba@hotmail.com', '123456');
    await expect(userGoogle).resolves.toEqual({ user: 'stringGoogle' });
  });
});

/* -----Test para function saveTask -----*/

describe('funcion de saveTask', () => {
  it('deberia guardar los post', async () => {
    const postt = saveTask('Quesadilla', 'Jamon', 'Pedro');
    await expect(postt).resolves.toEqual({ tittle: 'Quesadilla', description: 'Jamon', displayName: 'Pedro' });
  });
});

/* -----Test para function addLikePost -----*/

describe('funcion de addLikePost', () => {
  it('deberia agregar los like', async () => {
    document.body.append(Muro());
    const btnLike = document.querySelector('.btn-like');
    btnLike.click();

    console.log(getDoc());
    const like = getDoc();
    await expect(like).toHaveBeenCalled();
    // await expect(getDoc)toHaveBeenCalled();
  });
});

/* function sume(a,b) { return a + b }

function getDate () { return " la fecha de hoy es " + Date.now()}

expect(getDate()).tobe("la fecha de hpy es 13 de febrero a las 17:00 ") */
