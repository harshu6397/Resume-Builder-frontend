// adding acadmics details
const AddAcadmicsBTN = document.querySelector(".add-coll")
AddAcadmicsBTN.addEventListener("click", ()=>{
    // label and input - course
    let NewExpNameLabel1 = document.createElement("label")
    NewExpNameLabel1.setAttribute("for","course");
    NewExpNameLabel1.innerHTML = "Course"
    let NewExpNameInput1 = document.createElement("input")
    NewExpNameInput1.setAttribute("type","text");
    NewExpNameInput1.classList.add("course")

    // 2 - branch
    let NewExpNameLabel2 = document.createElement("label")
    NewExpNameLabel2.setAttribute("for","coll-branch");
    NewExpNameLabel2.innerHTML = "Branch"
    let NewExpNameInput2 = document.createElement("input")
    NewExpNameInput2.setAttribute("type","text");
    NewExpNameInput2.classList.add("coll-branch")

    // 3 - college name
    let NewExpNameLabel3 = document.createElement("label")
    NewExpNameLabel3.setAttribute("for","coll");
    NewExpNameLabel3.innerHTML = "School/College Name and Address"
    let NewExpNameInput3 = document.createElement("input")
    NewExpNameInput3.setAttribute("type","text");
    NewExpNameInput3.classList.add("coll")

    let AcadmicBox = document.querySelector(".academic-detail")

    AcadmicBox.insertBefore( NewExpNameLabel1, AddAcadmicsBTN)
    AcadmicBox.insertBefore( NewExpNameInput1, AddAcadmicsBTN)
    
    AcadmicBox.insertBefore( NewExpNameLabel2, AddAcadmicsBTN)
    AcadmicBox.insertBefore( NewExpNameInput2, AddAcadmicsBTN)
    
    AcadmicBox.insertBefore( NewExpNameLabel3, AddAcadmicsBTN)
    AcadmicBox.insertBefore( NewExpNameInput3, AddAcadmicsBTN)
    
})

// adding project
const projectBTN = document.querySelector(".add-pj")
projectBTN.addEventListener("click", ()=>{
    // label and input
    let NewExpNameLabel = document.createElement("label")
    NewExpNameLabel.setAttribute("for","project");
    NewExpNameLabel.innerHTML = "Project title"
    let NewExpNameInput = document.createElement("input")
    NewExpNameInput.setAttribute("type","text");
    NewExpNameInput.classList.add("project")


    //label and textarea
    let NewExpNameLabelD = document.createElement("label")
    NewExpNameLabelD.setAttribute("for","project-dc");
    NewExpNameLabelD.innerHTML = "Project-discription"
    let NewExpNameTxt = document.createElement("textarea")
    NewExpNameTxt.setAttribute("row","5");
    NewExpNameTxt.classList.add("project-dc") 

    let expBox = document.querySelector(".projBox")
    expBox.appendChild(NewExpNameLabel)
    expBox.appendChild(NewExpNameInput)
    expBox.appendChild(NewExpNameLabelD)
    expBox.appendChild(NewExpNameTxt)
});

// adding experience
const ExpBTN = document.querySelector(".add-ex")
ExpBTN.addEventListener("click", ()=>{
    // label and input
    let NewExpNameLabel = document.createElement("label")
    NewExpNameLabel.setAttribute("for","exp");
    NewExpNameLabel.innerHTML = "Company Name"
    let NewExpNameInput = document.createElement("input")
    NewExpNameInput.setAttribute("type","text");
    NewExpNameInput.classList.add("exp")


    //label and textarea
    let NewExpNameLabelD = document.createElement("label")
    NewExpNameLabelD.setAttribute("for","exp-dc");
    NewExpNameLabelD.innerHTML = "Describe role"
    let NewExpNameTxt = document.createElement("textarea")
    NewExpNameTxt.setAttribute("row","5");
    NewExpNameTxt.classList.add("exp-dc") 

    let expBox = document.querySelector(".expBox")
    expBox.appendChild(NewExpNameLabel)
    expBox.appendChild(NewExpNameInput)
    expBox.appendChild(NewExpNameLabelD)
    expBox.appendChild(NewExpNameTxt)
})


//adding certificate
const CertBTN = document.querySelector(".add-cert")
CertBTN.addEventListener("click", ()=>{
    let certBox = document.querySelector(".certficate-detail")
    let newCert = document.createElement("input")
    newCert.classList.add('cert')
    certBox.insertBefore(newCert, CertBTN);
})


// adding achievement input box
let achiveBox = document.querySelector(".achive")
const addAchivBtn = document.querySelector(".add-achiv");
addAchivBtn.addEventListener("click", () => {
    let newAchive = document.createElement("input")
    newAchive.classList.add('achiv')
    achiveBox.insertBefore(newAchive, addAchivBtn);
})

const submit = document.querySelector(".btn-submit");
submit.addEventListener("click", () => {
    //email
    document.getElementById("email-d").innerHTML = document.getElementById("email").value

    // domain
    document.getElementById("domain-d").innerHTML = document.getElementById("domain").value

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
    document.getElementById("course").innerHTML = document.querySelector(".course").value
    document.getElementById("branch").innerHTML = document.querySelector(".coll-branch").value
    document.getElementById("coll-d").innerHTML = document.querySelector(".coll").value

    // company name
    document.getElementById("org").innerHTML = document.getElementById("exp").value
    document.getElementById("org-d").innerHTML = document.querySelector(".exp-dc").value

    // project name
    document.getElementById("proj").innerHTML = document.querySelector(".project").value
    document.getElementById("proj-d").innerHTML = document.querySelector(".project-dc").value
    // let projInp = document.getElementsByClassName("cert");
    // let projStr = "";
    // for (let e of projInp) {   
    //     projStr = projStr + `<li> ${e.value} </li>`
    //     console.log(e)
    // }
    // document.getElementById("projBoxRes").innerHTML = projStr;



    // certification
    let certInp = document.getElementsByClassName("cert");
    let certStr = "";
    for (let e of certInp) {   
        certStr = certStr + `<li> ${e.value} </li>`
        // console.log(e)
    }
    document.getElementById("certificate").innerHTML = certStr;


    // achivement
    let achivInp = document.getElementsByClassName("achiv");
    let AchivStr = "";
    for (let e of achivInp) {   
        AchivStr = AchivStr + `<li> ${e.value} </li>`
        console.log("yup")
    }
    document.getElementById("achivem").innerHTML = AchivStr;

})

