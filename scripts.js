// Define list of reviews
const reviews = [
    {
        name: "Juan Dela Cruz",
        job: "UX Designer",
        img: "assets/plant1.jpg",
        text: "Nag-anyaya ng pagpapacain nang isáng hapunan, ng magtátapos ang Octubre, si Guinoong Santiago de los Santos, na lalong nakikilala ng bayan sa pamagát na Capitang Tiago"
    },
    {
        name: "Manuel Quezon",
        job: "President of the Philippines",
        img: "assets/plant2.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod laborum esse voluptatum suscipit itaque nesciunt a, numquam recusandae deleniti quam ipsam, atque, repudiandae quibusdam qui."
    },
    {
        name: "Marie Curie",
        job: "Nobel Prize Winner",
        img: "assets/plant3.jpg",
        text: "Si Guinoong Santiago de los Santos, na lalong nakikilala ng bayan sa pamagát na Capitang Tiago itaque nesciunt a, numquam recusandae deleniti quam ipsam, atque, repudiandae quibusdam qui."
    },
    {
        name: "Leonhard Euler",
        job: "Mathemagician",
        img: "assets/plant1.jpg",
        text: "lorem is not just a normal snippet—it’s actually a generator. Every time you expand it, it will generate a 30-words dummy text, splitted into a few sentences."
    },
    {
        name: "Jose Rizal",
        job: "Opthalmologist",
        img: "assets/plant3.jpg",
        text: "lorem is Every just a normal snippet—it’s actually a generator. Every a everyday everyone es todo por hoy cuándo el mundo más lo necesitaba you expand it, it eso no va a pasar."
    },
];

// Define elements in DOM
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job"
);
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// Show first item in reviews
let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
    showPerson(currentItem);
});

// Add Event Listeners for buttons
nextBtn.addEventListener("click", () => {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

randomBtn.addEventListener("click", () => {
    const previousItem = currentItem;
    while (previousItem == currentItem) {
        currentItem = Math.floor( Math.random() * reviews.length );
    }
    showPerson(currentItem);
})

function showPerson(personNumber) {
    const item = reviews[personNumber];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}