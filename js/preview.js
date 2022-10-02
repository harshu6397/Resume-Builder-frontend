// getting details from the local storage

document.addEventListener('DOMContentLoaded', () => {

    // first name
    document.getElementById("firstName").innerHTML = window.localStorage.getItem('firstName')


    // last name
    document.getElementById("lastName").innerHTML = window.localStorage.getItem('lastName')

    // domain
    document.getElementById("domain-d").innerHTML = window.localStorage.getItem('domain-d')

    // email
    document.getElementById("email-d").innerHTML = window.localStorage.getItem('email-d')

    //phone
    document.getElementById("phone-d").innerHTML = window.localStorage.getItem('phone-d')

    // address
    document.getElementById("address-d").innerHTML = window.localStorage.getItem('address-d')

    // zipcode
    document.getElementById("zipcode-d").innerHTML = window.localStorage.getItem('zipcode-d')

    // linkedin
    document.getElementById("linkedin-d").innerHTML = window.localStorage.getItem('linkedin-d')

    // github
    document.getElementById("github-d").innerHTML = window.localStorage.getItem('github-d')

    // language
    document.getElementById("lang").innerHTML = window.localStorage.getItem('lang')

    // dob
    document.getElementById("dob-d").innerHTML = window.localStorage.getItem('dob-d')

    // dobplace
    document.getElementById("dobplace-d").innerHTML = window.localStorage.getItem('dobplace-d')

    // disccription
    document.getElementById("profile-d").innerHTML = window.localStorage.getItem('profile-d')

    // education
    document.getElementById("course").innerHTML = window.localStorage.getItem('course')

    // certificate
    document.getElementById("certificate").innerHTML = window.localStorage.getItem('certificate')

    // skills
    document.getElementById("skills").innerHTML = window.localStorage.getItem('skills')

    // experience
    document.getElementById("experience").innerHTML = window.localStorage.getItem('experience')

    // projects
    document.getElementById("projects").innerHTML = window.localStorage.getItem('projects')

    // achievements
    document.getElementById("achivem").innerHTML = window.localStorage.getItem('achievements')


})