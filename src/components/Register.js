// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Register = () => {
  const HomeDiv = document.createElement('div');
  const buttonHome = document.createElement('button');

  HomeDiv.textContent = 'Bienvenido al registro';
  buttonHome.textContent = 'Regresar';

  buttonHome.addEventListener('click', () => onNavigate('/'));

  HomeDiv.appendChild(buttonHome);

  return HomeDiv;
};
