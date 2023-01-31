import { functionSignin, functionUserGoogle } from '../lib/index';

export const Home = (onNavigate) => {
  const HomeContent = document.createElement('main');
  const HomeDivImage = document.createElement('div');
  const logoIcon = document.createElement('img');
  const inputUser = document.createElement('input');
  const inputPasword = document.createElement('input');
  const divbuttongoogle = document.createElement('div');
  const iconGoogle = document.createElement('i');
  const tittleLogin = document.createElement('h1');
  const mensajeLogin = document.createElement('h2');
  const HomeForm = document.createElement('div');
  const buttonLogin = document.createElement('button');
  const buttonRegister = document.createElement('button');
  const buttonLoginGoogle = document.createElement('button');

  mensajeLogin.textContent = 'Te gusta comer a nosotros tambien!';
  logoIcon.src = 'https://raw.githubusercontent.com/YsisC/DEV003-social-network/main/src/assets/img/LogotipoSinFondo.png';
  logoIcon.className = 'logoFoodgram';
  inputUser.className = 'inputLogin';
  inputPasword.className = 'inputLogin';

  HomeContent.className = 'homepage';
  HomeDivImage.className = 'imageDiv';
  divbuttongoogle.className = 'group_button';
  iconGoogle.className = 'fa-brands fa-google';
  mensajeLogin.className = 'h2_home';

  tittleLogin.className = 'h1_home';
  HomeForm.className = 'formDiv';
  buttonRegister.className = 'btn register';
  buttonLogin.className = 'btn login';
  buttonLoginGoogle.className = 'btn loginGoogle';
  buttonRegister.id = 'btnRegister';
  inputUser.placeholder = 'Correo electronico';
  inputPasword.placeholder = 'Contraseña';
  inputPasword.type = 'password';
  inputPasword.required = 'true';

  tittleLogin.textContent = 'Iniciar sesión';
  buttonRegister.textContent = 'Registrate';
  buttonLogin.textContent = 'Ingresar';
  buttonLoginGoogle.textContent = 'Ingresa con Google';

  buttonLogin.addEventListener('click', (e) => {
    e.preventDefault();
    const email = inputUser.value;
    const pasword = inputPasword.value;
    functionSignin(email, pasword).then(() => {
      onNavigate('/login');
    }).catch((error) => {
      if (error.code === 'auth/invalid-email') {
        Toastify({
          text: 'Verifique su correo',
          duration: 3000,
          className: 'alertError',
          style: {
            background: 'linear-gradient(to right, #e07f11, #e07f11)',
          },
          onClick() {}, // Callback after click
        }).showToast();
        // alert('Verifique su correo');
      } else if (error.code === 'auth/wrong-password') {
        Toastify({
          text: 'La contraseña es invalida',
          duration: 3000,
          destination: 'https://github.com/apvarun/toastify-js',
          newWindow: true,
          close: true,
          gravity: 'bottom', // `top` or `bottom`
          position: 'right', // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: 'linear-gradient(to right, #e07f11, #e07f11)',
          },
          onClick() {}, // Callback after click
        }).showToast();
        // alert('La contraseña invalida');
      } else {
        Toastify({
          text: 'Verifique sus datos',
          duration: 3000,
          destination: 'https://github.com/apvarun/toastify-js',
          newWindow: true,
          close: true,
          gravity: 'bottom', // `top` or `bottom`
          position: 'right', // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: 'linear-gradient(to right, #e07f11, #e07f11)',
          },
          onClick() {}, // Callback after click
        }).showToast();
        // alert('Verifique sus datos o registrese');
      }
    });
  });
  // userAuntenticado();

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLoginGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    functionUserGoogle().then((promiseGoogle) => {
      if (promiseGoogle !== 'error') {
        onNavigate('/login');
      }
    });
  });

  HomeContent.appendChild(logoIcon);
  HomeContent.appendChild(HomeDivImage);
  HomeContent.appendChild(HomeForm);

  // HomeForm.appendChild(inputform);
  HomeForm.appendChild(tittleLogin);
  HomeForm.appendChild(mensajeLogin);
  HomeForm.appendChild(inputUser);
  HomeForm.appendChild(inputPasword);
  HomeForm.appendChild(buttonLogin);
  HomeForm.appendChild(buttonRegister);
  HomeForm.appendChild(divbuttongoogle);
  divbuttongoogle.appendChild(iconGoogle);
  divbuttongoogle.appendChild(buttonLoginGoogle);

  return HomeContent;
};
