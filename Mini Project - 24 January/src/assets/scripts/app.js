// const loginForm = document.querySelector(".loginForm");

// loginForm.addEventListener("submit", (e) => {
//   accountLogin(email, password);
// });

// const registerForm = document.querySelector(".registerForm");

// registerForm.addEventListener("submit", (e) => {
//   accountRegister(name, surname, phone, email, password, confirmPassword);
// });

function accountLogin(email, password) {}

function accountRegister(
  name,
  surname,
  phone,
  email,
  password,
  confirmPassword
) {
  const user = {
    name,
    surname,
    phone,
    email,
    password,
    confirmPassword,
    profilePictureURL: "",
    balance: 0,
    favorites: [],
    accountCreationDate: Date.now(),
    totalSpentMoney: 0,
  };
  console.log(user);
}

accountRegister(
  "John",
  "Doe",
  "123456789",
  "john@example",
  "password",
  "password"
);
