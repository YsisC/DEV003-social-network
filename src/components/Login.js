import {
  functionSignOut, getTask, onGetTasks, saveTask, currentUserInfo, deleteTask,
  updateTask, addLikePost,
} from '../lib/index.js';

export const Login = (onNavigate) => {
  // Creacion del DOM
  const homeDivFeed = document.createElement('div');
  const feedHearder = document.createElement('header');
  const feedeMain = document.createElement('main');
  // El post del feedMain
  const taskForm = document.createElement('form');
  const dialogForm = document.createElement('dialog');
  const labelReceta = document.createElement('label');
  const inputTaskTittle = document.createElement('input');
  const labelDescripction = document.createElement('label');

  const textarea = document.createElement('textarea');
  const btnSave = document.createElement('button');
  const btnClose = document.createElement('button');
  const taskContainer = document.createElement('div');
  // El contenido del Header
  const logoIcon = document.createElement('img');
  const spanMenu = document.createElement('span');
  const iconMenu = document.createElement('i');
  const ulMenu = document.createElement('ul');
  ulMenu.className = 'navBar';
  ulMenu.id = 'navBar';
  const liCerrarSesion = document.createElement('li');
  const aLiCerrarSesion = document.createElement('a');
  const buttonHome = document.createElement('button');

  // <span class="menu-icon"><img src ="./img/menuf.png"></span>
  const divMessageHeader = document.createElement('div');
  const iconMessage = document.createElement('i');
  const mensajeFeed = document.createElement('input');
  const feedPost = document.createElement('div');
  // const feedFooter = document.createElement('div');
  /* //El contenido del Footer */
  const feedFooter = document.createElement('footer'); // agregado
  const divIconUser = document.createElement('div');
  const iconUser = document.createElement('i');
  const divIconPublish = document.createElement('div');
  const iconPublish = document.createElement('i');

  // feedPost.innerHTML = templatePosts;
  homeDivFeed.className = 'homeDivFeed';
  feedHearder.className = 'feedHeader';
  logoIcon.src = 'https://raw.githubusercontent.com/YsisC/DEV003-social-network/main/src/assets/img/LogotipoSinFondo.png';
  logoIcon.className = 'logoFoodgramFeed';
  spanMenu.className = 'menuIcon';
  dialogForm.className = 'dialogForm';
  iconMenu.className = 'fa-solid fa-bars';
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
  const usuario = currentUserInfo().displayName;
  const usuarioId = currentUserInfo().uid;
  mensajeFeed.placeholder = `¿Que recetas estas pensando ${usuario}?`;
  buttonHome.className = 'Cerrar_Sesion';
  buttonHome.textContent = 'Cerrar Sesión';

  feedPost.id = 'taskDiv';
  labelReceta.setAttribute('id', 'tittle');
  labelReceta.textContent = '▪ ¿Cual es el nombre de tu receta?:';
  labelDescripction.textContent = '▪Ingredientes:';
  labelDescripction.className = 'descriptionReceta';
  inputTaskTittle.type = 'text';
  inputTaskTittle.placeholder = 'Nombre de la receta';
  btnSave.textContent = 'Guardar';
  btnClose.textContent = 'Cerrar';
  textarea.placeholder = 'Ingredientes de tu receta';
  btnSave.id = 'btn-task-save';
  btnClose.id = 'btn-task-cerrar';
  dialogForm.append(labelReceta, inputTaskTittle, labelDescripction, textarea, btnSave, btnClose);
  taskForm.append(
    dialogForm,
    taskContainer,
  );
  ulMenu.appendChild(liCerrarSesion);
  liCerrarSesion.appendChild(aLiCerrarSesion);
  aLiCerrarSesion.appendChild(buttonHome);
  spanMenu.appendChild(iconMenu);
  divMessageHeader.append(iconMessage, mensajeFeed);
  feedHearder.append(logoIcon, spanMenu, ulMenu, divMessageHeader);
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

  // Post
  let editStatus = false;
  let id = '';
  console.log(currentUserInfo());
  // FUNCION DE GETTASKS
  // const querySnapshot = await getTasks();

  const user = currentUserInfo().displayName;
  console.log(user);
  // console.log(userDisplayName);

  onGetTasks((querySnapshot) => {
    let html = '';

    querySnapshot.forEach((doc) => {
      const task = doc.data();
      // console.log(doc.id);
      html += `
        <div class='cardPostPublication'>
          <h3>${task.tittle}</h3>
          <p>${task.description}<p>
          <p class='displayName'> 👨🏽‍🍳${task.displayName}</p>
          <button class='btn-like' data-id='${doc.id}'>🖤</button>
          <p class='numLike' data-id='${doc.id}>${task.like}</p>
          <button class='btn-delete' data-id='${doc.id}'>Delete</button>
          <button class='btn-edit' data-id='${doc.id}'>Edit</button>
        </div>
          `;
    });

    taskContainer.innerHTML = html;

    // -----------------------------------------------------Boton Delete-------------------

    const btnsDelete = taskContainer.querySelectorAll('.btn-delete');
    // console.log(btnsDelete);
    btnsDelete.forEach((btn) => {
      btn.addEventListener('click', ({ target: { dataset } }) => {
        deleteTask(dataset.id);
      });
    });
    /// ---------------------------boton likes-----------------------------------------------
    const btnLike = taskContainer.querySelectorAll('.btn-like');
    const countLike = taskContainer.querySelectorAll('.numLike');
    console.log(countLike);

    // console.log(btnLike);
    countLike.textContent = 0;
    btnLike.forEach((btn) => {
      let count = 0;
      const numLike = [];
      btn.addEventListener('click', ({ target: { dataset } }) => {
        addLikePost(dataset.id, usuarioId);
        if (dataset) {
          count += 1;
          console.log(count);
          countLike.textContent = count;
        }
        console.log(btn);
        console.log(dataset.id);
      });
    });
    /// ---------------------------boton edit-----------------------------------------------
    const btnsEdit = taskContainer.querySelectorAll('.btn-edit');

    btnsEdit.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const doc = await getTask(e.target.dataset.id);
        const task = doc.data();

        taskForm['task-title'].value = task.tittle;
        taskForm['task-description'].value = task.description;

        editStatus = true;
        id = doc.id;
        taskForm['btn-task-save'].innerText = 'Guardar';
        dialogForm.showModal();
      });
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') { dialogForm.showModal(); }
      });
    });
  });

  btnSave.addEventListener('click', () => {
    dialogForm.close();
  });
  btnClose.addEventListener('click', () => {
    dialogForm.close();
  });
  /// ---------------------------Funcion del menu bar-----------------------------------------------
  spanMenu.addEventListener('click', () => {
    ulMenu.classList.toggle('show');
  });
  // const taskForm = document.getElementById('task-form');
  console.log(taskForm);

  /// ---------------------------Guardar los post-----------------------------------------------
  taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const userLikes = []; // se declara array vacio para likes
    const title = inputTaskTittle.value;
    const taskDescription = textarea.value;
    if (taskDescription !== '' && title !== '') {
      if (!editStatus) {
        saveTask(title, taskDescription, usuario, usuarioId, userLikes);
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
  divMessageHeader.addEventListener('click', () => {
    dialogForm.showModal();
  });
  divIconPublish.addEventListener('click', () => {
    dialogForm.showModal();
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
