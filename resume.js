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
})

