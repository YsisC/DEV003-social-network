import { createUserWithEmailAndPassword } from 'firebase/auth';
import { async } from 'regenerator-runtime';
import { auth } from './firebase.js';

// import { app } from './firebase.js';
// aqui exportaras las funciones que necesites
// Creación de usuario con email y contraseñ

export const functionSignUp = async (name, email, password) => {
  try {
    const newUser = await createUserWithEmailAndPassword(auth, email, password);
    if (name !== '') {
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
    }
    return newUser;
  } catch (error) {
    const errorCode = error.code;
    return errorCode;
  }
};
console.log(app);
console.log(auth);
console.log(createUserWithEmailAndPassword);
// export const myFunction = () => {
//   // aqui tu codigo
//   console.log('Hola mundo!');
// };
