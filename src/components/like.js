// import {
//   getTask,
//   addLikePost, removeLikePost, currentUserInfo,
// } from '../lib/index.js';
// import
// {

// } from './login.js';

// export const like = (taskContainer) => {
//   const usuarioId = currentUserInfo().uid;
//   const buttonLike = taskContainer.querySelectorAll('.btn-like');
//   buttonLike.forEach((likes2) => {
//     likes2.addEventListener('click', () => {
//       const buttonLiked = likes2.target.dataset.id;
//       console.log(buttonLiked);
//       getTask(buttonLiked).then((doclike) => {
//         const jusonePost = doclike.data();
//         console.log(jusonePost);
//         const userLikes = jusonePost.like;
//         console.log(userLikes);
//         if (userLikes.includes(usuarioId)) {
//           removeLikePost(buttonLiked, usuarioId);
//         } else {
//           addLikePost(buttonLiked, usuarioId);
//         }
//       }).catch((error) => {
//         console.log(error);
//       });
//     });
//   });
// };
