const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
var check = function () {
  if (
    document.getElementById("password").value ==
    document.getElementById("confirmpassword").value
  ) {
    document.getElementById("message").style.color = "green";
    document.getElementById("message").innerHTML = "matching";
  } else {
    document.getElementById("message").style.color = "red";
    document.getElementById("message").innerHTML = "not matching";
  }
};

function PassCheck() {
  var password = document.getElementById("password");
  var copassword = document.getElementById("confirmpassword");

  if (password.value != confirmpassword.value) {
    document.getElementById("signup").disabled = true;
  } else {
    document.getElementById("signup").disabled = false;
  }
}
