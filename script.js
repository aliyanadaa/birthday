const correctCode = "020525";

let enteredCode = "";

const inputs = document.querySelectorAll(".code-inputs input");


function enterNumber(number) {

    if (enteredCode.length >= 6) {
        return;
    }

    enteredCode += number;

    updateInputs();
}


function updateInputs() {

    inputs.forEach((input, index) => {

        input.value = enteredCode[index] || "";

    });
}


function clearCode() {

    enteredCode = "";

    updateInputs();

    document.getElementById("wrong-code").textContent = "";
}


function checkCode() {

    const message = document.getElementById("wrong-code");

    if (enteredCode === correctCode) {

        message.textContent = "";

        showPage("birthday");

    } else {

        message.textContent = "hmm... salah 😭 coba lagi";

        enteredCode = "";

        setTimeout(() => {
            updateInputs();
        }, 500);
    }
}


function showPage(pageId) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");
}


function showBouquet() {

    showPage("bouquet");

}


function showLetter() {

    showPage("letter");

}

// =========================
// FALLING PETALS
// =========================

const petalContainer =
    document.querySelector(".petal-container");

for (let i = 0; i < 18; i++) {

    const petal =
        document.createElement("div");

    petal.classList.add("petal");

    petal.style.left =
        Math.random() * 100 + "%";

    petal.style.animationDuration =
        6 + Math.random() * 6 + "s";

    petal.style.animationDelay =
        Math.random() * 6 + "s";

    petal.style.transform =
        `scale(${0.6 + Math.random() * 0.8})`;

    petalContainer.appendChild(petal);
}