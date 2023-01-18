// eslint-disable-next-line import/no-cycle
import { Home } from './components/Home.js';
import { Register } from './components/Register.js';
import { Login } from './components/Login.js';

const rootDiv = document.getElementById('root');

let routes = {
};

const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }

  rootDiv.appendChild(routes[pathname]());
};

routes = {
  '/': Home,
  '/register': Register,
  '/login': Login,
};

const component = routes[window.location.pathname];
window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild); // Borrar el primer nodo para dar espacio al nuevo
  }
  rootDiv.appendChild(component(onNavigate)); // Insertar el nodo con la funcion
};

rootDiv.appendChild(component(onNavigate));
