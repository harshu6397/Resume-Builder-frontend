const tempCard = document.querySelector(".temp-card")
const tempImg = document.querySelector(".temp-img")

tempCard.addEventListener("mousemove",(e)=>{
    let x = (window.innerWidth/2 - e.pageX)/50;
    let y = (window.innerHeight/2 - e.pageY)/50;
    tempImg.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    console.log(e.pageX, e.pageY);
});

tempCard.addEventListener("mouseenter", (e)=>{
    tempImg.style.transition = `all .2s ease`;
    tempImg.style.transform = `translateZ(100px)`
});

tempCard.addEventListener("mouseleave", (e)=>{
    tempImg.style.transition = `all .5s ease`;
    tempImg.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
