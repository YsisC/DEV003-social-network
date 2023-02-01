import {
  addDoc, collection, getDocs, query, onSnapshot, deleteDoc, doc,
  getDoc, updateDoc, orderBy,
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

export const functionUserGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
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

export const currentUserInfo = () => auth.currentUser;

export const saveTask = (tittle, description) => {
  const today = new Date();
  return addDoc(collection(db, 'tasks'), {
    tittle,
    description,
    date: today,
    like: [],
  });
};

export const getTasks = () => getDocs(collection(db, 'tasks'));

export const onGetTasks = (callback) => {
  const queryPost = query(collection(db, 'tasks'), orderBy('date', 'desc'));
  onSnapshot(queryPost, callback);
};

export const deleteTask = (id) => deleteDoc(doc(db, 'tasks', id));

export const getTask = (id) => getDoc(doc(db, 'tasks', id));

export const updateTask = (id, newFields) => updateDoc(doc(db, 'tasks', id), newFields);

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
