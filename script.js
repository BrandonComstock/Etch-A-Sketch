const columnDivs = [];
const rowDivs = [];
const container = document.querySelector("#container");

function sketch (item) {
    
}
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.addEventListener("mouseenter", (e) => {
            e.target.style.background = "black"
        })
        square.textContent = "test";
        square.classList = "grid-item";
        container.append(square);
    }
}

