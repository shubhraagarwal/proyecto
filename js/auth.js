function savedata() {
    var Email = document.getElementById("email").value;
    // var Pass = document.getElementById("password").value;
    //   const data = {
    //     email: Email,
    //     password: Pass,
    //   };
  
    window.localStorage.setItem("email", Email);
  
    console.log(window.localStorage.getItem("email"));
  }
  console.log(window.localStorage.getItem("email"));

  document.getElementById("username").innerHTML = localStorage.getItem("email");
  