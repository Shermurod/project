// const modal = document.getElementById("modal");
// const openModal = document.getElementById("openModal");
// const closeModal = document.querySelector(".close");

// openModal.onclick = function() {
//   modal.style.display = "block";
// }

// closeModal.onclick = function() {
//   modal.style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// const inputs = document.getElementById('input'),
//       line = document.querySelector('.line'),
//       title = document.querySelector('.line-indicator'),
//       imgs = document.querySelector('img');

// imgs.addEventListener('click', ()=> {
//     inputs.type = inputs.type === "password" ? "text" : "password";
//     imgs.src = inputs.type === "password" ? "./eye.png" : "./hidden.png";
// })

// const submitBtn = document.querySelector(".ochiloyna");

// submitBtn.addEventListener('click', () => {
//     const loginValue = loginInput.value;
//     const passwordValue = passwordInput.value;

//     const loginRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

//     if (loginRegex.test(loginValue)) {
//         showErrorMessage('Login faqat @gmail.com bilan tugashi kerak!');
//     } else if (passwordValue === "") {
//         showErrorMessage('Parolni kiriting!');
//     } else {
//         alert("Ruyxatdan o'tildi!");
//         modal.style.display = 'none';
//     }
// });

// function showErrorMessage(message) {
//     errorMessage.textContent = message;
//     errorMessage.style.opacity = '1';
//     setTimeout(() => {
//         errorMessage.style.opacity = '0';
//     }, 2000);
// }

const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.querySelector(".close");

openModal.onclick = function() {
  modal.style.display = "block";
  modal.style.transition = "all 5s";
};

closeModal.onclick = function() {
  modal.style.display = "none";
  modal.style.transition = "all 5s";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modal.style.transition = "all 5s";
  }
};

const inputs = document.getElementById("input");
const imgs = document.querySelector("img");

imgs.addEventListener("click", () => {
  inputs.type = inputs.type === "password" ? "text" : "password";
  imgs.src = inputs.type === "password" ? "./eye.png" : "./hidden.png";
});

const submitBtn = document.querySelector(".tugma");
const loginInput = document.getElementById("login");
const passwordInput = document.getElementById("input");
const errorMessage = document.getElementById("error-message");

submitBtn.addEventListener("click", () => {
  const loginValue = loginInput.value;
  const passwordValue = passwordInput.value;

  const loginRegex = /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm;

  if (!loginRegex.test(loginValue)) {
    showErrorMessage("Login faqat @gmail.com bilan tugashi kerak!");
  } else if (passwordValue === "") {
    showErrorMessage("Parolni kiriting!");
  } else {
    alert("Ruyxatdan o'tildi!");
    modal.style.display = "none";
  }
});

function showErrorMessage(message) {
  errorMessage.textContent = message;
  errorMessage.style.opacity = "1";
  setTimeout(() => {
    errorMessage.style.opacity = "0";
  }, 2000);
}


// const modal = document.getElementById("modal");
// const openModal = document.getElementById("openModal");
// const closeModal = document.querySelector(".close");

// openModal.onclick = function() {
//   modal.style.display = "block";
// }

// closeModal.onclick = function() {
//   modal.style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// const inputPassword = document.getElementById('input'); // Password input
// const imgToggle = document.querySelector('.toggle-password'); // Password toggle icon

// // Toggle password visibility
// imgToggle.addEventListener('click', () => {
//   inputPassword.type = inputPassword.type === "password" ? "text" : "password";
//   imgToggle.src = inputPassword.type === "password" ? "./eye.png" : "./hidden.png";
// });

// const submitBtn = document.querySelector(".tugma");

// const loginInput = document.getElementById("login");
// const errorMessage = document.getElementById("error-message");

// submitBtn.addEventListener('click', () => {
//   const loginValue = loginInput.value;
//   const passwordValue = inputPassword.value;

//   const loginRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

//   if (!loginRegex.test(loginValue)) {
//     showErrorMessage('Login faqat @gmail.com bilan tugashi kerak!');
//   } else if (passwordValue === "") {
//     showErrorMessage('Parolni kiriting!');
//   } else {
//     // Email va parolni saqlash
//     saveUserCredentials(loginValue, passwordValue);
//     alert("Ruyxatdan o'tildi!");
//     modal.style.display = 'none';
//   }
// });

// function showErrorMessage(message) {
//   errorMessage.textContent = message;
//   errorMessage.style.opacity = '1';
//   setTimeout(() => {
//     errorMessage.style.opacity = '0';
//   }, 2000);
// }

// // Foydalanuvchi login va parolini saqlash funksiyasi
// function saveUserCredentials(email, password) {
//   const user = { email: email, password: password };
//   localStorage.setItem('userCredentials', JSON.stringify(user));
// }











