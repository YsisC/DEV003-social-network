// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Login = () => {
  const HomeDiv = document.createElement('div');
  const buttonHome = document.createElement('button');

  HomeDiv.textContent = 'Bienvenida al login';
  buttonHome.textContent = 'Cerrar Sesion';
  buttonHome.addEventListener('click', () => onNavigate('/'));
  HomeDiv.appendChild(buttonHome);

  return HomeDiv;
};
