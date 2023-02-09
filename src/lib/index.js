import {
  addDoc, collection, getDocs, query, onSnapshot, deleteDoc, doc,
  getDoc, updateDoc, orderBy, arrayUnion, arrayRemove,
} from 'firebase/firestore';
import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut,
  GoogleAuthProvider, signInWithPopup,
} from 'firebase/auth';

import { auth, db } from './firebase.js';

// --------------------Funcion de registrarse-----------------
export const functionSignUp = (name, email, password) => createUserWithEmailAndPassword(auth, email, password)
  .then((result) => {
    if (name !== '') {
      updateProfile(auth.currentUser, {
        displayName: name,
      });
    }
    return result;
  });

// --------------------Funcion de ingresar a la cuenta-----------------
export const functionSignin = (email, password) => signInWithEmailAndPassword(auth, email, password)
  .then((userLogin) => userLogin.user);

// --------------------Funcion de cerrar sesion-----------------
export const functionSignOut = () => signOut(auth);

// --------------------Funcion de iniciar con google-----------------
export const functionUserGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};
// --------------------Funcion de imostrar usuario-----------------
export const currentUserInfo = () => auth.currentUser;

// --------------------Funcion de guardar los post-----------------
export const saveTask = (tittle, description, displayName, uidCurrentUser) => {
  const today = new Date();

  return addDoc(collection(db, 'tasks'), {
    uidCurrentUser,
    displayName,
    tittle,
    description,
    date: today,
    like: [],
  });
};
// --------------------Funcion de obtener los post-----------------
export const getTasks = () => getDocs(collection(db, 'tasks'));

// --------------------Funcion de obtener los post-----------------
export const onGetTasks = (callback) => {
  const queryPost = query(collection(db, 'tasks'), orderBy('date', 'desc'));
  onSnapshot(queryPost, callback);
};
// --------------------Funcion de borrar un post -----------------
export const deleteTask = (id) => deleteDoc(doc(db, 'tasks', id));

// --------------------Funcion de obtener un post -----------------
export const getTask = (id) => getDoc(doc(db, 'tasks', id));

export const updateTask = (id, newFields) => updateDoc(doc(db, 'tasks', id), newFields);

// --------------------Funcion de agregar like -----------------
export const addLikePost = (id, uidCurrentUser) => {
  updateDoc(doc(db, 'tasks', id), { like: arrayUnion(uidCurrentUser) });
};
// --------------------Funcion de quitar like -----------------
export const removeLikePost = (id, uidCurrentUser) => {
  updateDoc(doc(db, 'tasks', id), { like: arrayRemove(uidCurrentUser) });
};

// export const userAuntenticado = auth.onAuthStateChanged((user) => {
//  if (user) {
//    db.collection('posts')
//      .get()
//      .then((snapshot) => {
//        console.log(snapshot.docs);
//      });
//  } else {
//    console.log('no estaaa');
//  }
// });
