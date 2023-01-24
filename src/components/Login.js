import { functionSignOut } from '../lib/index.js';

export const Login = (onNavigate) => {
  const feedeMain = document.createElement('main');
  const logoIcon = document.createElement('img');
  const mensajeFeed = document.createElement('h2');
  const feedPost = document.createElement('div');
  const feedHearder = document.createElement('div');
  const feedFooter = document.createElement('div');
  const buttonHome = document.createElement('button');

  feedeMain.className = 'feedMain';
  logoIcon.src = '/assets/img/LogotipoSinFondo.png';
  logoIcon.className = 'logoFoodgramFeed';
  feedHearder.className = 'feedProfile';
  feedPost.className = 'feedPost';
  feedFooter.className = 'feedFooter';
  mensajeFeed.textContent = 'Bienvenida al login';
  buttonHome.className = 'Cerrar Sesion';
  buttonHome.textContent = 'Cerrar Sesion';
  buttonHome.addEventListener('click', () => {
    functionSignOut();
    onNavigate('/');
  });

  feedHearder.appendChild(logoIcon, buttonHome, mensajeFeed);
  feedeMain.appendChild(feedHearder, feedPost, feedFooter);

  return feedeMain;
};
