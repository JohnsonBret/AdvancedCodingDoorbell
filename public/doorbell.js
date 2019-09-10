let enterButton = document.getElementById("enterBtn");

enterButton.addEventListener("click", ()=>{

    console.log("clicked Enter");
    let formCont = document.getElementById("formContainer");
    formCont.style.display = "none";

    let ringo = document.getElementById("ringer");
    ringo.style.display = "inline";
});