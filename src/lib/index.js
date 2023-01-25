import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut,
  GoogleAuthProvider, signInWithPopup,
} from 'firebase/auth';

import { auth } from './firebase.js';

// import { app } from './firebase.js';
// aqui exportaras las funciones que necesites
// Creación de usuario con email y contraseñ

export const functionSignUp = (name, email, password) => createUserWithEmailAndPassword(auth, email, password).then((result) => {
  if (name !== '') {
    updateProfile(auth.currentUser, {
      displayName: name,
    });
  }
  return result;
});
// try {
//   const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//   if (name !== '') {
//     await updateProfile(auth.currentUser, {
//       displayName: name,
//     });
//   }

//   return userCredential;
// } catch (error) {
//   // console.log(error);
//   const errorCode = error.code;
//   return errorCode;
//   // console.log(error.code);
// }
// };

export const functionSignin = async (email, password) => {
  try {
    const userLogin = await signInWithEmailAndPassword(auth, email, password);
    return userLogin.user;
  } catch (error) {
    const errorCode = error.code;
    return errorCode;
  }
};

export const functionSignOut = async () => {
  await signOut(auth);
};

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
