const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={[}]|:;<>.?/".split("");

const passwordLength = 15;

function getRandomCharacter(charSet) {
    const randomChar = Math.floor(Math.random() * charSet.length);
    return charSet[randomChar];
}

function ensureCharacterTypes(password) {
    if (!/[A-Z]/.test(password)) {
        password = password.replace(/./, getRandomCharacter("ABCDEFGHIJKLMNOPQRSTUVWXYZ"));
    }
    if (!/[a-z]/.test(password)) {
        password = password.replace(/./, getRandomCharacter("abcdefghijklmnopqrstuvwxyz"));
    }
    if (!/[0-9]/.test(password)) {
        password = password.replace(/./, getRandomCharacter("0123456789"));
    }
    if (!/[~`!@#$%^&*()_+\-=\{\}\[\]|:;<>.?/]/.test(password)) {
        password = password.replace(/./, getRandomCharacter("~`!@#$%^&*()_+\-=\{\}\[\]|:;<>.?/"));
    }
    return password;
}

function generateRandomPassword() {
    let randomPassword = "";
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter(characters);
    }
    return ensureCharacterTypes(randomPassword);
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Password copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
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

    passwordDisplay1.addEventListener("click", function () {
        copyToClipboard(passwordDisplay1.value);
    });

    passwordDisplay2.addEventListener("click", function () {
        copyToClipboard(passwordDisplay2.value);
    });

    generateButton.setAttribute("aria-label", "Generate Passwords");
    passwordDisplay1.setAttribute("aria-label", "Generated Password 1");
    passwordDisplay2.setAttribute("aria-label", "Generated Password 2");
});
