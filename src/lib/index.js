import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut,
  GoogleAuthProvider, signInWithPopup,
} from 'firebase/auth';

import { auth } from './firebase.js';

// import { app } from './firebase.js';
// aqui exportaras las funciones que necesites
// Creación de usuario con email y contraseñ

export const functionSignUp = (name, email, password) => createUserWithEmailAndPassword(auth, email, password)
  .then((result) => {
    if (name !== '') {
      updateProfile(auth.currentUser, {
        displayName: name,
      });
    }
    return result;
  });

export const functionSignin = (email, password) => signInWithEmailAndPassword(auth, email, password)
  .then((userLogin) => userLogin.user);

export const functionSignOut = () => signOut(auth);

export const functionUserGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const userGoogle = await signInWithPopup(auth, provider);
    console.log(userGoogle.user);
    return userGoogle.user;
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    return errorCode;
  }
};

// export const functionUserGoogle = async () => {
//   const provider = new GoogleAuthProvider();
//   try {
//     const userGoogle = await signInWithPopup(auth, provider);
//     console.log(userGoogle.user);
//     return userGoogle.user;
//   } catch (error) {
//     // Handle Errors here.
//     const errorCode = error.code;
//     return errorCode;
//   }
// };

// export const signOut = auth.signOut().then(() => {
//  console.log('funciona ehhhh');
// });

// console.log(app);
// console.log(auth);
// console.log(createUserWithEmailAndPassword);

// export const myFunction = () => {
//   // aqui tu codigo
//   console.log('Hola mundo!');
// };
