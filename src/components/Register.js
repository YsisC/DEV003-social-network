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
  // const mensajeValidacion = document.createElement('p');

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

  buttonRegister.addEventListener('click', async () => {
    // onNavigate('/');
    const email = inputEmail.value;
    const user = inputUser.value;
    const pasword = inputPasword.value;
    const result = await functionSignUp(user, email, pasword);
    console.log(result);
    // mensajeValidacion.textContent = 'El formulario tiene un error';
    // onNavigate('/login');
    // if (typeof result === 'object') {
    //   console.log(result);
    //   // console.log(result.auth.displayName);
    //   // onNavigate('/login');
    // } else if (result === 'auth/email-already-in-use') {
    //   // alert('El correo ya ha sido utilizado');
    //   mensajeValidacion.textContent = 'El correo ya ha sido utilizado';
    // } else if (result === 'auth/invalid-email') {
    //   // alert('Correo Invalido');
    //   mensajeValidacion.textContent = 'Correo Invalido';
    // } else if (result === 'auth/weak-password') {
    //   // alert('La contraseña es muy debil');
    //   mensajeValidacion.textContent = 'La contraseña es muy debil';
    // } else {
    //   // alert('El formulario tiene un error');
    //   mensajeValidacion.textContent = 'El formulario tiene un error';
    // }
    // // alert('Bienvenido');
  });
  buttonHome.addEventListener('click', () => onNavigate('/'));
  formRegister.append(inputUser, inputEmail, inputPasword, buttonRegister);
  HomeForm.append(formRegister, buttonHome);
  HomeDiv.append(tittleRegister, HomeForm);

  return HomeDiv;
};
