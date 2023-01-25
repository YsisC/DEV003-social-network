import { functionSignOut } from '../lib/index.js';

export const Login = (onNavigate) => {
  const homeDivFeed = document.createElement('div');
  const feedHearder = document.createElement('header');
  const feedeMain = document.createElement('main');
  const logoIcon = document.createElement('img');
  const mensajeFeed = document.createElement('input');
  const feedPost = document.createElement('div');
  // const feedFooter = document.createElement('div');
  const feedFooter = document.createElement('footer'); // agregado
  const divIconUser = document.createElement('div');
  const iconUser = document.createElement('i');
  const divIconPublish = document.createElement('div');
  const iconPublish = document.createElement('i');
  const buttonHome = document.createElement('button');

  homeDivFeed.className = 'homeDivFeed';
  feedeMain.className = 'feedMain';
  logoIcon.src = 'https://raw.githubusercontent.com/YsisC/DEV003-social-network/main/src/assets/img/LogotipoSinFondo.png';
  logoIcon.className = 'logoFoodgramFeed';
  feedHearder.className = 'feedHeader';
  feedPost.className = 'feedPost';
  feedFooter.className = 'feedFooter';
  mensajeFeed.className = 'mensajeFeed';
  divIconUser.className = 'divIconUser';
  divIconPublish.className = 'divIconPublish';
  iconUser.className = 'fa-solid fa-user';
  iconPublish.className = 'fa-regular fa-square-plus';

  mensajeFeed.placeholder = '¿Que recetas estas pensando 🥬?';
  buttonHome.className = 'Cerrar_Sesion';
  buttonHome.textContent = 'Cerrar Sesion';
  buttonHome.addEventListener('click', () => {
    functionSignOut();
    onNavigate('/');
  });

  feedHearder.append(buttonHome, logoIcon, mensajeFeed);
  feedeMain.append(feedPost);
  divIconUser.appendChild(iconUser);
  divIconPublish.appendChild(iconPublish);
  feedFooter.append(divIconPublish, divIconUser);
  homeDivFeed.append(feedHearder, feedeMain, feedFooter);

  return homeDivFeed;
};
