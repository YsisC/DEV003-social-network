// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { app } from '../lib/firebase.js';

export const Home = () => {
  const HomeContent = document.createElement('main');
  const HomeDivImage = document.createElement('div');
  const logoIcon = document.createElement('img');
  const inputUser = document.createElement('input');
  const inputPasword = document.createElement('input');
  const divbuttongoogle = document.createElement('div');
  const iconGoogle = document.createElement('i');
  const tittleLogin = document.createElement('h1');
  const mensajeLogin = document.createElement('h2');

  const HomeForm = document.createElement('form');
  const buttonLogin = document.createElement('button');
  const buttonRegister = document.createElement('button');
  const buttonLoginGoogle = document.createElement('button');
  // const inputform = document.createElement('form');

  logoIcon.src = '../img/LogotipoSinFondo.png';
  logoIcon.className = 'logoFoodgram';
  HomeContent.className = 'homepage';
  HomeDivImage.className = 'imageDiv';
  divbuttongoogle.className = 'group_button';
  iconGoogle.className = 'fa-brands fa-google';

  tittleLogin.className = 'h1_home';
  HomeForm.className = 'formDiv';
  buttonRegister.className = 'btn register';
  buttonLogin.className = 'btn login';
  buttonLoginGoogle.className = 'btn loginGoogle';
  buttonRegister.id = 'btnRegister';
  inputUser.placeholder = 'Nombre o correo electronico';
  inputPasword.placeholder = 'Contraseña';
  inputPasword.type = 'password';
  inputPasword.required = 'true';

  tittleLogin.textContent = 'Iniciar sesión';
  buttonRegister.textContent = 'Registrate';
  buttonLogin.textContent = 'Ingresar';
  buttonLoginGoogle.textContent = 'Ingresa con Google';

  buttonLogin.addEventListener('click', () => {
    // e.preventDefault();

    // const email = inputUser.value;
    // const pasword = inputPasword.value;

    // console.log(email, pasword);
    // try {
    //   const userCredentials = await create;
    // } catch (error) {

    // }
    onNavigate('/login');
  });
  buttonRegister.addEventListener('click', () => onNavigate('/register'));

  HomeContent.appendChild(logoIcon);
  HomeContent.appendChild(HomeDivImage);
  HomeContent.appendChild(HomeForm);

  // HomeForm.appendChild(inputform);
  HomeForm.appendChild(tittleLogin);
  HomeForm.appendChild(inputUser);
  HomeForm.appendChild(inputPasword);
  HomeForm.appendChild(buttonLogin);
  HomeForm.appendChild(buttonRegister);
  HomeForm.appendChild(divbuttongoogle);
  divbuttongoogle.appendChild(iconGoogle);
  divbuttongoogle.appendChild(buttonLoginGoogle);

  return HomeContent;
};
