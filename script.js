const container = document.querySelector("#container");
const btn = document.createElement("button");


// container.append(btn);

function sketch(gridItems) {
    let value = parseInt(gridItems);
    if (value > 100) {
        value = 100;
    }

    for (let i = 0; i < gridItems; i++) {
        for (let j = 0; j < gridItems; j++) {
            const square = document.createElement("div");
            square.classList = "grid-item";
            // square.textContent = j.toString();
            square.addEventListener("mouseover", (e) => {
                e.target.style.background = "black"
            });
    
            container.append(square);
    }
}

    btn.addEventListener("click", (e) => {
        let input = prompt("Change grid size");
        sketch(input);
    })
}

sketch(16);


