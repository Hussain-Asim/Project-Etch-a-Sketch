const container = document.querySelector(".container");

function loopDivs(mulSquareSides, dialogueBox) {
    mulSquareSides = mulSquareSides || 256;


    for (let i = 1; i <= mulSquareSides; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-divs");
        container.appendChild(div);

        if (mulSquareSides === 256) {
            div.style.height = "31.25px";
            div.style.width = "31.25px";
        }
        else {
            div.style.height = `${500 / dialogueBox}px`;
            div.style.width = `${500 / dialogueBox}px`;

        }

        div.addEventListener("mouseover", () => {

            div.style.backgroundColor = `${getRandomColor()}`;
        });
    }
}

loopDivs();

const btn = document.querySelector("button");

btn.addEventListener("click", () => {

    container.innerHTML = "";

    const dialogueBox = prompt("Choose grid size per-squares!", `100`);

    const mulSquareSides = dialogueBox * dialogueBox;
    loopDivs(mulSquareSides, dialogueBox);

});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];

    }
    return color;
}


