// adding project
const projectBTN = document.querySelector(".add-pj")
projectBTN.addEventListener("click", addProject);

function addProject(){
    console.log("avs")
    // let newPjLabelForTitle = document.createElement("label");
    // let newPjInp = document.createElement("input");
    // let newPjLabelForDisc = document.createElement("label");
    // let newPjDisc = document.createElement("textarea");
    // newPjInp.classList.add("project");
    // newPjLabelForTitle.setAttribute("for","project");
    // newPjInp.setAttribute("type","text");
    // newPjDisc.classList.add("project-dc");
    // newPjLabelForDisc.setAttribute("for","project-dc");
    // newPjInp.setAttribute("cols","20");
    // newPjInp.setAttribute("rows","5");
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
    let fName = document.getElementById("fname").value;
    let firstName = document.getElementById("firstName");
    firstName.innerHTML = fName;

    //email
    document.querySelector(".email").innerHTML = document.getElementById(".email").value
    
    //phone
    document.getElementById("phone").innerHTML = document.getElementById(".phone").value

    //zipcode
    document.getElementById("zipcode").innerHTML = document.getElementById(".zipcode").value

    //linkedin
    document.getElementById("linkedin").innerHTML = document.getElementById(".linkedin").value

    //country
    document.getElementById("country").innerHTML = document.getElementById(".country").value

    //dob
    document.getElementById("dob").innerHTML = document.getElementById(".dob").value

    //dobplace
    document.getElementById("dobplace").innerHTML = document.getElementById(".dobplace").value


})

