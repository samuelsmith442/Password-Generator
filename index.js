const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const passwordLength = 15;

function getRandomCharacter() {
    const randomChar = Math.floor(Math.random() * characters.length);
    return characters[randomChar];
}

function generateRandomPassword() {
    let randomPassword = "";
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter();
    }
    return randomPassword;
}

document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generateButton");
    const passwordDisplay1 = document.getElementById("passwordDisplay1");
    const passwordDisplay2 = document.getElementById("passwordDisplay2");

    generateButton.addEventListener("click", function () {
        const generatedPassword1 = generateRandomPassword();
        const generatedPassword2 = generateRandomPassword();

        passwordDisplay1.value = generatedPassword1;
        passwordDisplay2.value = generatedPassword2;
    });
});

