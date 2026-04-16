"use strict";
const size = 50;
let grid = Array.from({ length: size }, () => Array.from({ length: size }, () => "💀"));
function randomizePopulation() {
    grid = Array.from({ length: size }, () => Array.from({ length: size }, () => (Math.random() > 0.5 ? "😊" : "💀")));
}
randomizePopulation();
renderGrid(grid);
function renderGrid(g) {
    const output = g.map((row) => row.join(" ")).join("\n");
    console.log(output);
}
function runGameCycle() {
    const newGrid = Array.from({ length: size }, () => Array.from({ length: size }, () => "💀"));
    grid.forEach((row, rowI) => {
        row.forEach((population, pI) => {
            let aliveNeighborCount = 0;
            const neighbors = [
                grid?.[rowI - 1]?.[pI - 1],
                grid?.[rowI - 1]?.[pI],
                grid?.[rowI - 1]?.[pI + 1],
                grid?.[rowI]?.[pI - 1],
                grid?.[rowI]?.[pI + 1],
                grid?.[rowI + 1]?.[pI - 1],
                grid?.[rowI + 1]?.[pI],
                grid?.[rowI + 1]?.[pI + 1],
            ];
            neighbors.forEach((n) => {
                if (n === "😊")
                    aliveNeighborCount += 1;
            });
            // apply rules
            if (population === "😊") {
                if (aliveNeighborCount < 2 || aliveNeighborCount > 3) {
                    newGrid[rowI][pI] = "💀"; // dies
                }
                else {
                    newGrid[rowI][pI] = "😊"; // survives
                }
            }
            else {
                if (aliveNeighborCount === 3) {
                    newGrid[rowI][pI] = "😊"; // reproduction
                }
                else {
                    newGrid[rowI][pI] = "💀";
                }
            }
        });
    });
    return newGrid;
}
setInterval(() => {
    grid = runGameCycle();
    console.clear();
    renderGrid(grid);
}, 1000);
