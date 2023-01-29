import {
  functionSignOut, getTasks, onGetTasks, saveTask, currentUserInfo,
} from '../lib/index.js';

export const Login = (onNavigate) => {
  // Creacion del DOM
  const homeDivFeed = document.createElement('div');
  const feedHearder = document.createElement('header');
  const feedeMain = document.createElement('main');
  // El post del feedMain
  const taskForm = document.createElement('form');
  const labelReceta = document.createElement('label');
  const inputTaskTittle = document.createElement('input');
  const labelDescripction = document.createElement('label');
  const textarea = document.createElement('textarea');
  const btnSave = document.createElement('button');
  const taskContainer = document.createElement('div');
  // El contenido del Header
  const logoIcon = document.createElement('img');
  const divMessageHeader = document.createElement('div');
  const iconMessage = document.createElement('i');
  const mensajeFeed = document.createElement('input');
  const feedPost = document.createElement('div');
  // const feedFooter = document.createElement('div');
  // El contenido del Footer
  const feedFooter = document.createElement('footer'); // agregado
  const divIconUser = document.createElement('div');
  const iconUser = document.createElement('i');
  const divIconPublish = document.createElement('div');
  const iconPublish = document.createElement('i');
  const buttonHome = document.createElement('button');

  // feedPost.innerHTML = templatePosts;
  homeDivFeed.className = 'homeDivFeed';
  feedHearder.className = 'feedHeader';
  logoIcon.src = 'https://raw.githubusercontent.com/YsisC/DEV003-social-network/main/src/assets/img/LogotipoSinFondo.png';
  logoIcon.className = 'logoFoodgramFeed';
  divMessageHeader.className = 'divIconMessage';
  iconMessage.className = 'fa-solid fa-pen';
  feedeMain.className = 'muroDiv';
  taskForm.id = 'task-form';
  inputTaskTittle.id = 'task-title';

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

  feedPost.id = 'taskDiv';
  labelReceta.setAttribute('for', 'tittle');
  labelReceta.textContent = 'Description';
  inputTaskTittle.type = 'text';
  inputTaskTittle.placeholder = 'Task tittle';
  btnSave.textContent = 'Save';
  textarea.placeholder = '¿Que receta estas pensando?';
  btnSave.id = 'btnToPost';

  taskForm.append(
    labelReceta,
    inputTaskTittle,
    labelDescripction,
    textarea,
    btnSave,
    taskContainer,
  );
  divMessageHeader.append(iconMessage, mensajeFeed);
  feedHearder.append(buttonHome, logoIcon, divMessageHeader);
  feedPost.append(taskForm);
  feedeMain.append(feedPost);
  divIconUser.appendChild(iconUser);
  divIconPublish.appendChild(iconPublish);
  feedFooter.append(divIconPublish, divIconUser);
  homeDivFeed.append(feedHearder, feedeMain, feedFooter);
  // Con template
  // const templatePosts = `
  // <form id="task-form">
  //   <label for="title">Receta:</label>
  //   <input type="text" placeholder="task tittle" id="task-title">
  //   <label for="description">Preparacion:</label>
  //   <textarea  id="task-description"  rows="3" placeholder="Comparte tu recetas"></textarea>
  //   <button id="btn-task-save">Save</button>
  //   <div id="tasks-container"></div>
  // </form>`;

  // const postlist = document.querySelector('#post');

  const taskConteiner = feedeMain.querySelector('#taskDiv');
  const taskForms = feedeMain.querySelector('#task-form');
  // Post
  const editStatus = false;
  const id = '';

  window.addEventListener('DOMContentLoaded', async () => {
    const querysnap = getTasks();
    console.log(querysnap);

    onGetTasks((querySnapshot) => {
      const html = '';
      console.log(querySnapshot, typeof querySnapshot);
      querySnapshot.forEach((doc) => {
        const dataPost = doc.data();
        console.log(dataPost);
      });
    });
    // html =
  });
  // const querySnapshot = await getTasks(dataset.id);
  // console.log(querySnapshot());
  // });

  // const taskForm = document.getElementById('task-form');
  console.log(taskForm);

  // Guardar los post Funciona
  taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = inputTaskTittle.value;
    const taskDescription = textarea.value;
    if (taskDescription !== '') {
      await saveTask(title, taskDescription);
      taskForm.reset();
    } else {
      alert('Escribe algo');
    }
  });

  buttonHome.addEventListener('click', () => {
    functionSignOut().then(() => {
      onNavigate('/');
    }).catch((error) => {
      if (error.code) {
        console.log(error.code);
      }
    });
  });

  // userAuntenticado();

  return homeDivFeed;
};
