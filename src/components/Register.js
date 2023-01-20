import { functionSignUp } from '../lib/index';

export const Register = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const buttonHome = document.createElement('button');
  const HomeForm = document.createElement('div');
  const formRegister = document.createElement('form');
  const tittleRegister = document.createElement('h1');
  const inputUser = document.createElement('input');
  const inputEmail = document.createElement('input');
  const inputPasword = document.createElement('input');
  const buttonRegister = document.createElement('button');

  HomeForm.className = 'formDiv';
  formRegister.className = 'formRegister';
  buttonRegister.className = 'btn register';
  buttonHome.className = 'btn home';

  tittleRegister.textContent = 'Bienvenido al registro';
  buttonHome.textContent = 'Regresar';
  buttonRegister.textContent = 'Resgistrarse';
  inputUser.placeholder = 'Usuario';
  inputEmail.placeholder = 'Correo electronico';
  inputPasword.placeholder = 'Pasword';
  inputPasword.type = 'password';
  inputEmail.type = 'email';
  inputUser.required = 'true';
  inputEmail.required = 'true';
  inputPasword.required = 'true';

  buttonRegister.addEventListener('click', (e) => {
    e.preventDefault();
    const email = inputEmail.value;
    const user = inputUser.value;
    const pasword = inputPasword.value;

    functionSignUp(user, email, pasword).then((promiseResult) => {
      if (promiseResult === 'auth/email-already-in-use') {
        alert('El correo ya ha sido utilizado');
      } else if (promiseResult === 'auth/invalid-email') {
        alert('Correo Invalido');
      } else if (promiseResult === 'auth/weak-password') {
        alert('La contraseña es muy debil');
      } else if (typeof (promiseResult) === 'object') {
        onNavigate('/login');
      } else {
        alert('El formulario tiene un error');
      }
    });
  });

  buttonHome.addEventListener('click', () => onNavigate('/'));
  formRegister.append(inputUser, inputEmail, inputPasword, buttonRegister);
  HomeForm.append(formRegister, buttonHome);
  HomeDiv.append(tittleRegister, HomeForm);

  return HomeDiv;
};
