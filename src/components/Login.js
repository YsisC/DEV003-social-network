import { functionSignOut } from '../lib/index.js';

export const Login = (onNavigate) => {
  const homeDivFeed = document.createElement('div');
  const feedHearder = document.createElement('header');
  const feedeMain = document.createElement('main');
  const logoIcon = document.createElement('img');
  const mensajeFeed = document.createElement('input');
  const feedPost = document.createElement('div');
  const feedFooter = document.createElement('div');
  const buttonHome = document.createElement('button');

  homeDivFeed.className = 'homeDivFeed';
  feedeMain.className = 'feedMain';
  logoIcon.src = '/assets/img/LogotipoSinFondo.png';
  logoIcon.className = 'logoFoodgramFeed';
  feedHearder.className = 'feedHeader';
  feedPost.className = 'feedPost';
  feedFooter.className = 'feedFooter';
  mensajeFeed.className = 'mensajeFeed';
  mensajeFeed.placeholder = '¿Que recetas estas pensando 🥬?';
  buttonHome.className = 'Cerrar_Sesion';
  buttonHome.textContent = 'Cerrar Sesion';
  buttonHome.addEventListener('click', () => {
    functionSignOut();
    onNavigate('/');
  });

  feedHearder.append(buttonHome, logoIcon, mensajeFeed);
  feedeMain.append(feedPost);
  homeDivFeed.append(feedHearder, feedeMain, feedFooter);

  return homeDivFeed;
};
