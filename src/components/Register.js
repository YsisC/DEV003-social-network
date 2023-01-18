// import { functionSignUp } from '../lib/index';

export const Register = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const buttonHome = document.createElement('button');
  const HomeForm = document.createElement('div');
  const inputUser = document.createElement('input');
  const inputEmail = document.createElement('input');
  const inputPasword = document.createElement('input');
  const buttonRegister = document.createElement('button');

  HomeForm.className = 'formDiv';
  buttonRegister.className = 'btn register';
  buttonHome.className = 'btn home';

  HomeDiv.textContent = 'Bienvenido al registro';
  buttonHome.textContent = 'Regresar';
  buttonRegister.textContent = 'Resgistrarse';
  inputUser.placeholder = 'Usuario';
  inputEmail.placeholder = 'Correo electronico';
  inputPasword.placeholder = 'Pasword';

  buttonRegister.addEventListener('click', () => {
    onNavigate('/');
    // const email = inputEmail.value;
    // const user = inputUser.value;
    // const pasword = inputPasword.value;
  });
  buttonHome.addEventListener('click', () => onNavigate('/'));

  HomeDiv.append(inputUser, inputEmail, inputPasword, buttonRegister, buttonHome);

  return HomeDiv;
};
