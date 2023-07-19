let inputSlider = document.getElementById("slider");
let sliderValue = document.getElementById("sliderValue");
let box = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let characters = document.getElementById("characters");
let btn = document.getElementById("btn");
let copyBtn = document.getElementById("copyBtn")

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => { sliderValue.textContent = inputSlider.value });

btn.addEventListener('click', () => { box.value = generatePassword() })

let upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerChar = 'abcdefghijklmnopqrstuvwxyz';
let numChar = '0123456789';
// let sym = '@#$%&*';

//functions to generate password

function generatePassword() {
    let getPass ="";
    let allChar ="";

    allChar += lowercase.checked ? lowerChar : "";
    allChar += uppercase.checked ? upperChar : "";
    allChar += numbers.checked ? numChar : "";
    // allChar += characters.checked ? sym : "";

    if (allChar == "" || allChar.length == 0) {
        return getPass;
    }

    for(i =1; i<=inputSlider.value; i++){

    getPass += allChar.charAt( Math.floor( Math.random() * allChar.length));
    }
    return getPass;
}

copyBtn.addEventListener("click", () => {
    if(box.value != "" || box.value.length >=1){
        navigator.clipboard.writeText(box.value);
        copyBtn.innerHTML = "check";

        setTimeout(() => {
            copyBtn.innerHTML ="content_copy"
        },2000)
    }
})