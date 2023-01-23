import { auth } from './firebase.js';

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

// import { app } from './firebase.js';
// aqui exportaras las funciones que necesites
// Creación de usuario con email y contraseñ

export const functionSignUp = async (name, email, password) => {
    const userCredential = createUserWithEmailAndPassword(auth, email, password);
    console.log(userCredential)
    if (name !== '') {
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
    }

    return userCredential
};
// console.log(app);
// console.log(auth);
// console.log(createUserWithEmailAndPassword);

// export const myFunction = () => {
//   // aqui tu codigo
//   console.log('Hola mundo!');
// };
