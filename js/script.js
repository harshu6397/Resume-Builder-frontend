// const tempCard = document.querySelector(".temp-card")
// const tempImg = document.querySelector(".temp-img")

// tempCard.addEventListener("mousemove",(e)=>{
//     let x = (window.innerWidth/2 - e.pageX)/50;
//     let y = (window.innerHeight/2 - e.pageY)/50;
//     tempImg.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
//     console.log(e.pageX, e.pageY);
// });

// tempCard.addEventListener("mouseenter", (e)=>{
//     tempImg.style.transition = `all .2s ease`;
//     tempImg.style.transform = `translateZ(100px)`
// });

// tempCard.addEventListener("mouseleave", (e)=>{
//     tempImg.style.transition = `all .5s ease`;
//     tempImg.style.transform = `rotateY(0deg) rotateX(0deg)`;
// });

// Login SignUp Form JS
let loginMsg = document.querySelector('.loginMsg');
let signupMsg = document.querySelector('.signupMsg');
let frontbox = document.querySelector('.frontbox');
let login = document.querySelector('.login');
let signup = document.querySelector('.signup');
let switch1 = document.querySelector('#switch1');

switch1.addEventListener('click', function () {
    frontbox.classList.add('moving');
    login.classList.add('hide');
    signup.classList.remove('hide');
    signupMsg.classList.remove('visibility');
    loginMsg.classList.add('visibility');
});

let switch2 = document.querySelector('#switch2');

switch2.addEventListener('click', function () {
    frontbox.classList.remove('moving');
    login.classList.remove('hide');
    signup.classList.add('hide');
    signupMsg.classList.add('visibility');
    loginMsg.classList.remove('visibility');
});

setTimeout(function () {
    switch1.click();
}, 1000);

setTimeout(function () {
    switch2.click();
}, 3000);

// Sign Up
let signUpBtn = document.querySelector('.signUpBtn');
signUpBtn.addEventListener('click', function () {
    let signUpUsername = document.querySelector('#signUpUsername').value;
    let signUpEmail = document.querySelector('#signUpEmail').value;
    let signUpPassword = document.querySelector('#signUpPassword').value;

    let signUpData = {
        name: signUpUsername,
        email: signUpEmail,
        password: signUpPassword,
        cpassword: signUpPassword
    };
    fetch('https://web-notebook-apis.herokuapp.com/api/auth/createuser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signUpData)
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        if (data.status === true) {
            alert('Sign Up Successfully');
        }
        else {
            alert(data.errors[0].msg);
        }
    });
});

// Login
let loginBtn = document.querySelector('.loginBtn');
loginBtn.addEventListener('click', function () {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;
    var data = {
        email: email,
        password: password
    };
    fetch('https://web-notebook-apis.herokuapp.com/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        if (data.status == true) {
            // Get User Info
            fetch("https://web-notebook-apis.herokuapp.com/api/auth/getuser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": data.authToken
                }
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                localStorage.setItem("name", data.name);
                window.location.href = "./main.html";
            });
        } else {
            alert("Invalid email or password");
        }
    });
});


