import { functionSignUp } from '../lib/index';

export const Register = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const loginContent = document.createElement('main');
  const divImgRegister = document.createElement('div');
  // const loginIcon = document.createElement('img');
  const tittleRegister = document.createElement('h2');
  const buttonHome = document.createElement('button');
  const HomeForm = document.createElement('div');
  const formRegister = document.createElement('form');
  const inputUser = document.createElement('input');
  const inputEmail = document.createElement('input');
  const inputPasword = document.createElement('input');
  const buttonRegister = document.createElement('button');
  // const mensajeValidacion = document.createElement('p');
  divImgRegister.className = 'imageDivRegister';
  HomeDiv.className = 'divRegister';
  HomeForm.className = 'formDiv';
  loginContent.className = 'homepage2';
  // loginIcon.src = './assets/img/LogotipoSinFondo.png';
  // loginIcon.className = 'logoFoodgram';
  inputUser.className = 'input_Login';
  inputEmail.className = 'input_Login';
  inputPasword.className = 'input_Login';
  tittleRegister.className = 'h1_home';
  formRegister.className = 'formRegister';
  buttonRegister.className = 'btn_register';
  buttonHome.className = 'btn_home';
  tittleRegister.textContent = 'Crear usuario';
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
      console.log(promiseResult);
      onNavigate('/login');
    }).catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        alert('El correo ya ha sido utilizado');
      } else if (error.code === 'auth/invalid-email') {
        alert('Correo Invalido');
      } else if (error.code === 'auth/weak-password') {
        alert('La contraseña es muy debil');
      } else {
        console.error(error);
        alert('El formulario tiene un error');
      }
    });
  });

  buttonHome.addEventListener('click', () => onNavigate('/'));

  formRegister.append(inputUser, inputEmail, inputPasword, buttonRegister, buttonHome);
  HomeForm.append(tittleRegister, formRegister);
  loginContent.append(divImgRegister, HomeForm);
  HomeDiv.append(loginContent);

  return HomeDiv;
};
