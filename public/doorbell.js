let enterButton = document.getElementById("enterBtn");

enterButton.addEventListener("click", ()=>{

    console.log("clicked Enter");
    let formCont = document.getElementById("formContainer");
    formCont.style.display = "none";

    let ringo = document.getElementById("ringer");
    ringo.style.display = "flex";
}); 

let ringerButton = document.getElementById("ringerBtn");

ringerButton.addEventListener("click", async ()=>{
    console.log("Clicked Ringer");

    let inputValue = document.getElementById("userName").value;

    console.log(inputValue);
    //Fetch API is AJAX!
    const rawResponse = await fetch('/ring', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userName: inputValue
        })
    });
    // const content = await rawResponse.json()
});
  
