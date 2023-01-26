import { functionSignOut, userAuntenticado } from '../lib/index.js';

export const Login = (onNavigate) => {
  const homeDivFeed = document.createElement('div');
  const feedHearder = document.createElement('header');
  const feedeMain = document.createElement('main');
  const logoIcon = document.createElement('img');
  const divMessage = document.createElement('div');
  const iconMessage = document.createElement('i');
  const mensajeFeed = document.createElement('input');
  const feedPost = document.createElement('div');
  // const feedFooter = document.createElement('div');
  const feedFooter = document.createElement('footer'); // agregado
  const templatePosts = `<div class="container">
    <div class="row">
        <div class="columnas">
            <ul class="group" id="post">
            </ul>
        </div>
    </div>
</div>`;
  const postlist = document.querySelector('#post');
  const divIconUser = document.createElement('div');
  const iconUser = document.createElement('i');
  const divIconPublish = document.createElement('div');
  const iconPublish = document.createElement('i');
  const buttonHome = document.createElement('button');

  feedPost.innerHTML = templatePosts;
  homeDivFeed.className = 'homeDivFeed';
  feedeMain.className = 'feedMain';
  logoIcon.src = 'https://raw.githubusercontent.com/YsisC/DEV003-social-network/main/src/assets/img/LogotipoSinFondo.png';
  logoIcon.className = 'logoFoodgramFeed';
  feedHearder.className = 'feedHeader';
  divMessage.className = 'divIconMessage';
  iconMessage.className = 'fa-solid fa-pen';

  feedPost.className = 'feedPost';
  feedFooter.className = 'feedFooter';
  mensajeFeed.className = 'mensajeFeed';
  divIconUser.className = 'divIconUser';
  divIconPublish.className = 'divIconPublish';
  iconUser.className = 'fa-solid fa-user';
  iconPublish.className = 'fa-regular fa-square-plus';
  mensajeFeed.placeholder = '¿Que recetas estas pensando?  ';
  buttonHome.className = 'Cerrar_Sesion';
  buttonHome.textContent = 'Cerrar Sesión';
  buttonHome.addEventListener('click', () => {
    functionSignOut();
    onNavigate('/');
  });

  userAuntenticado();
  divMessage.append(iconMessage, mensajeFeed);
  feedHearder.append(buttonHome, logoIcon, divMessage);
  feedeMain.append(feedPost);
  divIconUser.appendChild(iconUser);
  divIconPublish.appendChild(iconPublish);
  feedFooter.append(divIconPublish, divIconUser);
  homeDivFeed.append(feedHearder, feedeMain, feedFooter);

  return homeDivFeed;
};
