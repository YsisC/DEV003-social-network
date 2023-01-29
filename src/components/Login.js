import {
  functionSignOut, getTasks, onGetTasks, saveTask, currentUserInfo,
} from '../lib/index.js';

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

  // Con variables
  const taskForm = document.createElement('form');
  const labelReceta = document.createElement('label');
  const inputTaskTittle = document.createElement('input');
  const labelDescripction = document.createElement('label');
  const textarea = document.createElement('textarea');
  const btnSave = document.createElement('button');
  const taskContainer = document.createElement('div');

  btnSave.textContent = 'Save';

  taskForm.append(labelReceta, inputTaskTittle, labelDescripction, textarea, btnSave, taskContainer);

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
  const divIconUser = document.createElement('div');
  const iconUser = document.createElement('i');
  const divIconPublish = document.createElement('div');
  const iconPublish = document.createElement('i');
  const buttonHome = document.createElement('button');

  // feedPost.innerHTML = templatePosts;
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

  divMessage.append(iconMessage, mensajeFeed);
  feedHearder.append(buttonHome, logoIcon, divMessage);
  feedPost.append(taskForm);
  feedeMain.append(feedPost);
  divIconUser.appendChild(iconUser);
  divIconPublish.appendChild(iconPublish);
  feedFooter.append(divIconPublish, divIconUser);
  homeDivFeed.append(feedHearder, feedeMain, feedFooter);
  // Post
  const editStatus = false;
  const id = '';
  window.addEventListener('DOMContentLoaded', async () => {
    onGetTasks((QuerySnapshot) => {
      const html = '';
      console.log(QuerySnapshot);
      QuerySnapshot.forEac((doc) => {
        const showPost = doc.data();
        console.log(showPost);
        const time = showPosts.date.seconds;
        const date = new Date(time * 1000);
        const datePost = `${date.getDate()
        }/${date.getMonth() + 1
        }/${date.getFullYear()
        } ${date.getHours()
        }:${date.getMinutes()
        }:${date.getSeconds()}`;

        html = `
        <div class = 'eachPost'>
        <span class='user_content'>
        <p class='eachPost_user'>${showPosts.user}</p> 
        <p class='eachPost_content'>${showPosts.content}</p>
        </span>
        <span class='btn_date'>
        <span class='span_btns'>
        ${currentUserInfo().uid === showPosts.uid ? `<button class='btn-delete' data-id='${doc.id}'>Delete</button>` : ''}
        ${currentUserInfo().uid === showPosts.uid ? `<button class='btn-edit' data-id='${doc.id}'>Edit</button>` : ''}
        </span>
        <span class='eachPost_date'><p class='p_date'> ${datePost} </p></span>
        </span>
        </div>`;
      });
    });
    // html =
  });
  // const querySnapshot = await getTasks(dataset.id);
  // console.log(querySnapshot());
  // });

  // const taskForm = document.getElementById('task-form');
  // console.log(taskForm);

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
