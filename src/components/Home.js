// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Home = () => {
  const HomeDiv = document.createElement('div');
  const HomeDivImage = document.createElement('div');
  const logoIcon = document.createElement('img');

  const HomeForm = document.createElement('div');
  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');

  //   logoIcon.src = './src/img/Logotipo_minimalista_para_sibfondo.png';
  HomeDiv.setAttribute('id', 'homepage');
  HomeDivImage.setAttribute('class', 'imageDiv');

  HomeForm.setAttribute('class', 'formDiv');
  buttonRegister.setAttribute('class', 'btn register');
  buttonLogin.setAttribute('class', 'btn login');
  buttonRegister.setAttribute('id', 'btnRegister');

  buttonRegister.textContent = 'Registrate';
  buttonLogin.textContent = 'Inicia sesión';

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  HomeDiv.appendChild(logoIcon);
  HomeDiv.appendChild(HomeDivImage);
  HomeDiv.appendChild(HomeForm);
  HomeForm.appendChild(buttonLogin);
  HomeForm.appendChild(buttonRegister);

  return HomeDiv;
};
