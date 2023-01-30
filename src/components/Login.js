import {
  functionSignOut, getTask, onGetTasks, saveTask, currentUserInfo, deleteTask, updateTask,
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
  textarea.id = 'task-description';

  feedPost.className = 'feedPost';
  taskContainer.className = 'divPostPublication';
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
  labelReceta.textContent = 'Title:';
  labelDescripction.textContent = 'Descrption:';
  inputTaskTittle.type = 'text';
  inputTaskTittle.placeholder = 'Task tittle';
  btnSave.textContent = 'Save';
  textarea.placeholder = '¿Que receta estas pensando?';
  btnSave.id = 'btn-task-save';

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
  let editStatus = false;
  let id = '';

  console.log(currentUserInfo());
  window.addEventListener('DOMContentLoaded', async () => {
    // FUNCION DE GETTASKS
    // const querySnapshot = await getTasks();

    onGetTasks((querySnapshot) => {
      let html = '';

      querySnapshot.forEach((doc) => {
        const task = doc.data();
        // console.log(doc.id);
        html += `
        <div>
          <h3>${task.tittle}</h3>
          <p>${task.description}<p>
          <button class='btn-delete' data-id='${doc.id}'>Delete</button>
          <button class='btn-edit' data-id='${doc.id}'>Edit</button>
        </div>
          `;
      });
      taskContainer.innerHTML = html;
      const btnsDelete = taskContainer.querySelectorAll('.btn-delete');
      // console.log(btnsDelete);

      btnsDelete.forEach((btn) => {
        btn.addEventListener('click', ({ target: { dataset } }) => {
          deleteTask(dataset.id);
        });
      });
      const btnsEdit = taskContainer.querySelectorAll('.btn-edit');

      btnsEdit.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          const doc = await getTask(e.target.dataset.id);
          const task = doc.data();

          taskForm['task-title'].value = task.tittle;
          taskForm['task-description'].value = task.description;

          editStatus = true;
          id = doc.id;
          taskForm['btn-task-save'].innerText = 'Update';
        });
      });
    });

    // FUNCION DE GETTAKS CON THEN----------------------comienza
    // const querysnap = getTasks().then((result) => {
    // console.log(result);
    // console.log(querysnap);
    // });
    // ------------------------------termina
    // console.log(currentUserInfo());

    // FUNCION DE ONGETTASKS

    // await onGetTasks((querySnapshot) => {
    //   const html = '';
    //   console.log(querySnapshot);
    // querySnapshot.forEach((doc) => {
    //   const dataPost = doc.data();
    //   html += `
    //   <div>
    //     <h3>${dataPost.tittle}</h3>
    //     <p>${dataPost.description}<p>
    //     <button>Delete</button>
    //   </div>
    //     `;
    //   console.log(`${doc.id} => ${doc.data()}`);
    //   console.log(dataPost);
    // });
    // });
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
    if (taskDescription !== '' && title !== '') {
      if (!editStatus) {
        saveTask(title, taskDescription);
      } else {
        updateTask(id, {
          tittle: title,
          description: taskDescription,

        });
        editStatus = false;
      }

      taskForm.reset();
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
