function savedata() {
  // var Email = document.getElementById("email").value;
  // // var Pass = document.getElementById("password").value;
  // //   const data = {
  // //     email: Email,
  // //     password: Pass,
  // //   };

  // window.localStorage.setItem("email", Email);

  // console.log(window.localStorage.getItem("email"));
  var Email = document.getElementById("email").value;
  var Emails = document.getElementById("email").value;
  var Pass = document.getElementById("password").value;
  const data = {
    email: Email,
    // password: Pass,
  };
  // console.log(data);
  window.localStorage.setItem("email", Email);
  window.localStorage.setItem("emails", Emails);
  window.localStorage.setItem("user", JSON.stringify(data));
  console.log(JSON.parse(window.localStorage.getItem("user")));
}
console.log(JSON.parse(window.localStorage.getItem("user")));
var name = localStorage.getItem("emails");
document.getElementById("username").innerHTML = name;
// console.log(window.localStorage.getItem("email"));

// document.getElementById("username").innerHTML = localStorage.getItem("email");

// function savedata() {
//   var Email = document.getElementById("email").value;
//   var Emails = document.getElementById("email").value;
//   var Pass = document.getElementById("password").value;
//   const data = {
//     email: Email,
//     // password: Pass,
//   };
//   // console.log(data);
//   window.localStorage.setItem("email", Email);
//   window.localStorage.setItem("emails", Emails);
//   window.localStorage.setItem("user", JSON.stringify(data));
//   console.log(JSON.parse(window.localStorage.getItem("user")));
// }
// console.log(JSON.parse(window.localStorage.getItem("user")));
// var name = localStorage.getItem("emails");
// document.getElementById("Username").innerHTML = name;
// // console.log(JSON.parse(localStorage.getItem("user")));
// // console.log(name);
