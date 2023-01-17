// Configuracion de Firebase
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCgvp4FlD1VXHDiA1utormbbm1cNtrstOY',
  authDomain: 'foodgram-app.firebaseapp.com',
  projectId: 'foodgram-app',
  storageBucket: 'foodgram-app.appspot.com',
  messagingSenderId: '640089450578',
  appId: '1:640089450578:web:20f59556a3c66b74e0578b',
  measurementId: 'G-EDTSDYQKMQ',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const analytics = getAnalytics(app);
