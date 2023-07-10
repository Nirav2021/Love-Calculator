'use strict';
//index.js temeplete copied from url
//https://mdbootstrap.com/docs/standard/extended/login/
//login page image option url
//https://images.unsplash.com/photo-1674171444663-7835ab92f84f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=399&q=80

// const yourName = prompt('Type Your Name');
// const yourCrushName = prompt('Type Your Crush Name');
// const matchScore = Math.trunc(Math.random() * 100);
// console.log(matchScore);

// if (matchScore < 70) {
//   alert(
//     `Danger!😯, ${yourName} and ${yourCrushName} are not made for eachother.`
//   );
// } else {
//   alert(
//     `Perfect Match!👍,${yourName} and ${yourCrushName} are made for eachother.`
//   );
// }

// const yourName = document.querySelector('.yoursname').textContent;
// const yourCrushName = document.querySelector('.crushname').textContent;

document.querySelector('.btn').addEventListener('click', function () {
  const yourName = document.querySelector('.yoursname').value;
  // console.log(yourName);
  const yourCrushName = document.querySelector('.crushname').value;
  // console.log(yourCrushName);

  const matchScore = Math.trunc(Math.random() * 100);
  if (yourName && yourCrushName) {
    document.querySelector(
      '.small'
    ).innerHTML = `<b>Score: ${matchScore} Out of 100</b>`;
    if (matchScore < 70) {
      document.querySelector(
        '.rdata'
      ).innerHTML = `<b>Danger😯 ${yourName} and ${yourCrushName} are not suitable for Eachother. Move On.</b>`;
    } else {
      document.querySelector(
        '.rdata'
      ).innerHTML = `<b>Great😊 ${yourName} and ${yourCrushName} are Perfect Match. Let's Meet.</b>`;
    }
  }
});
