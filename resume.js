// adding project
const projectBTN = document.querySelector(".add-pj")
projectBTN.addEventListener("click", addProject);

function addProject(){
    console.log("avs")
    let newPjLabelForTitle = document.createElement("label");
    let newPjInp = document.createElement("input");
    let newPjLabelForDisc = document.createElement("label");
    let newPjDisc = document.createElement("textarea");
    newPjInp.classList.add("project");
    newPjLabelForTitle.setAttribute("for","project");
    newPjInp.setAttribute("type","text");
    newPjDisc.classList.add("project-dc");
    newPjLabelForDisc.setAttribute("for","project-dc");
    newPjInp.setAttribute("cols","20");
    newPjInp.setAttribute("rows","5");
}

// addingDetails();
// function addingDetails() {
//     let fName = document.getElementById("fname").value;
//     let firstName = document.getElementById("firstName");
//     firstName.innerHTML = fName;
// }

const submit = document.querySelector(".btn-submit");
submit.addEventListener("click", ()=>{
    console.log("asdf")

    //email
    document.getElementById("email-d").innerHTML = document.getElementById("email").value
    
    //domain
    // document.getElementById("domain-d").innerHTML = document.getElementById("domain").value
    
    //phone
    document.getElementById("phone-d").innerHTML = document.getElementById("phone").value

    //zipcode
    document.getElementById("zipcode-d").innerHTML = document.getElementById("zipcode").value

    //linkedin
    document.getElementById("linkedin-d").innerHTML = document.getElementById("linkedin").value

    //language
    document.getElementById("lang").innerHTML = document.getElementById("language").value
    
    //dob
    document.getElementById("dob-d").innerHTML = document.getElementById("dobIn").value

    //dobplace
    document.getElementById("dobplace-d").innerHTML = document.getElementById("pb").value

    //first name
    document.getElementById("firstName").innerHTML = document.getElementById("fname").value

    //first name
    document.getElementById("lastName").innerHTML = document.getElementById("lname").value
    // disccription
    document.getElementById("profile-d").innerHTML = document.getElementById("profile").value

    // education
    document.getElementById("course").innerHTML = document.querySelector(".coll").value
    document.getElementById("coll-d").innerHTML = document.querySelector(".coll-add").value

    // company name
    document.getElementById("org").innerHTML = document.querySelector(".exp").value
    document.getElementById("org-d").innerHTML = document.querySelector(".exp-dc").value
    
    // project name
    document.getElementById("proj").innerHTML = document.querySelector(".project").value
    document.getElementById("proj-d").innerHTML = document.querySelector(".project-dc").value
    
    // certification
    document.getElementById("certificate").innerHTML = document.getElementById("cert").value
    
    // achivement
    document.getElementById("achivem").innerHTML = document.getElementById("achiv").value
    

})

