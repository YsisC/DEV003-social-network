export const Login = () => {
  const HomeDiv = document.createElement('div');
  const buttonHome = document.createElement('button');

  HomeDiv.textContent = 'Bienvenida al login';
  buttonHome.textContent = 'Regresar';

  HomeDiv.appendChild(buttonHome);

  return HomeDiv;
};
