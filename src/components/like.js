// import
// {
//   getTask,
//   updateTask,
//   currentUserInfo,
// } from '../lib/index.js';

// export const like = (taskContainer) => {
//   const buttonLike = taskContainer.querySelectorAll('.buttonLike');
//   buttonLike.forEach((likes2) => {
//     likes2.addEventListener('click', () => {
//       console.log(likes2);
//       console.log(like);
//       const id = likes2.dataset.id;
//       getTask(id).then((promise) => {
//         let likes = promise.data().like;
//         if (likes.lenght === 0) {
//           likes.push(currentUserInfo.email);
//         } else if (!likes.includes(currentUserInfo.email)) {
//           likes.push(currentUserInfo.email);
//         } else {
//           likes = likes.filter(
//             (email) => !email.includes(currentUserInfo.email),
//           );
//         }
//         updateTask(id, { likes });
//       });
//     });
//   });
// };
