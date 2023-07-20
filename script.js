const button = document.querySelector(".btn");
const image = document.querySelector(".img");
const url = "https://cataas.com/cat";

async function fetchHendler() {
try {
const response = await fetch(url, { 
    headers: {
    "Content-type": "image/jpeg"
    }});
console.log(response);
const data = await response.blob();
const objectURL = await URL.createObjectURL(data);
console.log(data);
image.src = objectURL;
} catch (error) {
    console.log(error);
}
};

button.addEventListener("click",fetchHendler);