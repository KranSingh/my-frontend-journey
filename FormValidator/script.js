let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#loginForm");

form.addEventListener("submit", function (dets) {
  dets.preventDefault();
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  let emailans = emailRegex.test(email.value);
  let passwordlans = passwordRegex.test(password.value);

  if (!emailans) {
    document.querySelector("#emailError").textContent = "Email is incorrect";
    document.querySelector("#emailError").style.display = "initial";
  }

  if (!password) {
    document.querySelector("#passwordError").textContent =
      "Password is incorrect";
    document.querySelector("#passwordError").style.display = "initial";
  }
});
