import { functionSignUp } from '../lib/index';

export const Register = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const loginContent = document.createElement('main');
  const divImgRegister = document.createElement('div');
  const tittleRegister = document.createElement('h1');
  const buttonHome = document.createElement('button');
  const HomeForm = document.createElement('div');
  const formRegister = document.createElement('form');
  const inputUser = document.createElement('input');
  const inputEmail = document.createElement('input');
  const inputPasword = document.createElement('input');
  const buttonRegister = document.createElement('button');

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
  buttonRegister.textContent = 'Registrarse';
  inputUser.placeholder = 'Usuario';
  inputEmail.placeholder = 'Correo electronico';
  inputPasword.placeholder = 'Password';
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
      onNavigate('/Muro');
    }).catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        Toastify({
          text: 'El correo ya ha sido utilizado',
          className: 'info',
          style: {
            background: 'linear-gradient(to right, #00b09b, #96c93d)',
          },
        }).showToast();
      } else if (error.code === 'auth/invalid-email') {
        Toastify({
          text: 'El correo invalido',
          className: 'info',
          style: {
            background: 'linear-gradient(to right, #00b09b, #96c93d)',
          },
        }).showToast();
      } else if (error.code === 'auth/weak-password') {
        Toastify({
          text: 'La contraseña es muy debil',
          className: 'info',
          style: {
            background: 'linear-gradient(to right, #00b09b, #96c93d)',
          },
        }).showToast();
      } else {
        Toastify({
          text: 'El formulario tiene un error',
          className: 'info',
          style: {
            background: 'linear-gradient(to right, #00b09b, #96c93d)',
          },
        }).showToast();
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
