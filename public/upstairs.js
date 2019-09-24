

// var socket = io.connect('https://ucode-doorbell.herokuapp.com/');

var socket = io('http://localhost:3000/');
socket.on('arrival', function (data) {
    console.log(data); 
    createCard(data.studentName);
});

const createCard = (student)=>{
    let arrivalCont = document.getElementById("arrivalContainer");

    let arrivalCard = document.createElement("section");
    arrivalCard.classList.add("cardStyle");

    let cardTitle = document.createElement("h2");
    cardTitle.innerHTML = "A Student has Arrived";

    let arrivalName = document.createElement("p");
    arrivalName.innerHTML = student;

    arrivalCard.appendChild(cardTitle);
    arrivalCard.appendChild(arrivalName);

    arrivalCont.appendChild(arrivalCard);
}