export const Register = () => {
  const HomeDiv = document.createElement('div');
  const buttonHome = document.createElement('button');

  HomeDiv.textContent = 'Bienvenido al registro';
  buttonHome.textContent = 'Regresar';

  HomeDiv.appendChild(buttonHome);

  return HomeDiv;
};
