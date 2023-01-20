import { functionSignOut } from '../lib/index.js';

export const Login = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const buttonHome = document.createElement('button');

  HomeDiv.textContent = 'Bienvenida al login';
  buttonHome.textContent = 'Cerrar Sesion';
  buttonHome.addEventListener('click', () => {
    functionSignOut();
    onNavigate('/');
  });

  HomeDiv.appendChild(buttonHome);

  return HomeDiv;
};
