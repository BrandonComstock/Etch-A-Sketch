const columnDivs = [];
const rowDivs = [];
const container = document.querySelector("#container");

function sketch (item) {
    
}
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.classList = "grid-item";
        // square.textContent = "test";
        square.addEventListener("mouseover", (e) => {
            e.target.style.background = "black"
        });

        container.append(square);
    }
}

