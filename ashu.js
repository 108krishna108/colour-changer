document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".button");
  
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function() {
        const color = this.id;
        document.body.style.backgroundColor = color;
      });
    }
  });

  //we use this also//


// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// buttons.forEach(function (button) {
//   console.log(button);
//   button.addEventListener('click', function (e) {
//     console.log(e);
//     console.log(e.target);
//     if (e.target.id === 'grey') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'white') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'blue') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'yellow') {
//       body.style.backgroundColor = e.target.id;
//     }
    
//   });
// });

//we use any of the code among three of these//



// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', function (e) {
//     if (e.target.id === 'grey' || e.target.id === 'white' || e.target.id === 'blue' || e.target.id === 'yellow') {
//       body.style.backgroundColor = e.target.id;
//     }
//   });
// }
