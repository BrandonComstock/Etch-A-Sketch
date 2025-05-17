const container = document.querySelector("#container");
const body = document.querySelector("body")
const btn = document.createElement("button");

btn.textContent = "Change grid size";

body.append(btn);

function sketch(size) {
    // Clear existing grid
    container.innerHTML = "";

    let value = parseInt(size);
    if (value > 100) {
        value = 100;
    }

    // Create grid squares
    for (let i = 0; i < value; i++) {
        for (let j = 0; j < value; j++) {
            const square = document.createElement("div");
            square.classList = "grid-item";

            square.style.width = (100 / value) + "%";

            // Turns square black when mouse hovers over
            square.addEventListener("mouseover", (e) => {
                e.target.style.background = "black"
            });
    
            container.append(square);
        }
    }
}

 // Button on top of screen that can change grid size
 btn.addEventListener("click", (e) => {
    let input = prompt("Change grid size");
    sketch(input);
})

sketch(16);


