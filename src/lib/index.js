import {
  addDoc, collection, getDocs, query, orderBy, onSnapshot,
} from 'firebase/firestore';
import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut,
  GoogleAuthProvider, signInWithPopup,
} from 'firebase/auth';

import { auth, db } from './firebase.js';

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

export const currentUserInfo = () => auth.currentUser;

export const saveTask = (tittle, description) => {
  addDoc(collection(db, 'tasks'), { tittle, description });
};

export const getTasks = () => {
  getDocs(collection(db, 'tasks'));
};

export const onGetTasks = (querySnapshot) => {
  const queryPost = query(collection(db, 'tasks'), orderBy('date', 'desc'));
  onSnapshot(queryPost, querySnapshot);
};
// export const userAuntenticado = auth.onAuthStateChanged((user) => {
//   if (user) {
//     db.collection('posts')
//       .get()
//       .then((snapshot) => {
//         console.log(snapshot.docs);
//       });
//   } else {
//     console.log('no estaaa');
//   }
// });
