var emailSignIn = document.getElementById("emilLogin");
var passwordSignIn = document.getElementById("passwordLogin");
var buttonSignIn = document.getElementById("loginBtn");
// ??????????????????????????????????????????????
var nameSignUp = document.getElementById("nameSignUp");
var emailSignUp = document.getElementById("emailSignUp");
var passwordSignUp = document.getElementById("passwordSignUp");
var buttonSignUp = document.getElementById("SignUpBtn");
// ??????????????????????????????????????????????
var welcome = document.getElementById("welcome");

var systemArr = JSON.parse(localStorage.getItem("users")) || [];
if (document.getElementById("SignupForm")) {
  // >>>>>>>>>>>>>>>>>>>>>>Validation>>>>>>>>>>>>>>>>>>>>>>
  function validationNameInput() {
    let val = nameSignUp.value;
    regex = /^[a-zA-Z]{2,}$/;
    let result = regex.test(val);
    if (result) {
      nameSignUp.classList.add("is-valid");
      nameSignUp.classList.remove("is-invalid");
      return true;
    } else {
      nameSignUp.classList.remove("is-valid");
      nameSignUp.classList.add("is-invalid");
      return false;
    }
  }
  nameSignUp.addEventListener("input", (e) => {
    validationNameInput();
  });
  function validationEmailInput() {
    let val = emailSignUp.value;
    regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let result = regex.test(val);
    if (result) {
      emailSignUp.classList.add("is-valid");
      emailSignUp.classList.remove("is-invalid");
      return true;
    } else {
      emailSignUp.classList.remove("is-valid");
      emailSignUp.classList.add("is-invalid");
      return false;
    }
  }
  emailSignUp.addEventListener("input", (e) => {
    validationEmailInput();
  });
  function validationPasswordInput() {
    let val = passwordSignUp.value;
    regex = /^[\d]{3,}$/;

    let result = regex.test(val);
    if (result) {
      passwordSignUp.classList.add("is-valid");
      passwordSignUp.classList.remove("is-invalid");
      return true;
    } else {
      passwordSignUp.classList.remove("is-valid");
      passwordSignUp.classList.add("is-invalid");
      return false;
    }
  }
  passwordSignUp.addEventListener("input", (e) => {
    validationPasswordInput();
  });
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  buttonSignUp.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      validationPasswordInput() &&
      validationEmailInput() &&
      validationNameInput()
    ) {
      var obj = {
        userName: nameSignUp.value,
        email: emailSignUp.value,
        password: passwordSignUp.value,
      };
      systemArr.push(obj);
      localStorage.setItem("users", JSON.stringify(systemArr));
      document.getElementById("msgUp").classList.add("d-none");
      window.location.href = "index.html";
      console.log(systemArr);
    }
  });
}

if (document.getElementById("loginForm")) {
  buttonSignIn.addEventListener("click", (e) => {
    e.preventDefault();

    var email = emailSignIn.value;
    var password = passwordSignIn.value;
    // for loop
    var user = systemArr.find(
      (ele) => ele.email == email && ele.password == password
    );

    if (user) {
      localStorage.setItem("username", user.userName);
      window.location.href = "home.html";
      document.getElementById("msg").classList.add("d-none");
    } else {
      document.getElementById("msg").classList.remove("d-none");
    }
  });
}

if (document.getElementById("homePage")) {
  document.getElementById(
    "welcome"
  ).innerHTML = ` welcome ${localStorage.getItem("username")}`;
  document.getElementById("logoutBtn").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "index.html";
  });
}
