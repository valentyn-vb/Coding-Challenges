const size = 50;

let grid = Array.from(
  { length: size },
  () => Array.from({ length: size }, () => "💀"), // 0 = dead, 1 = alive
);
console.log("🚀 ~ grid:", grid);

function randomizePopulation() {
  grid = Array.from(
    { length: size },
    () =>
      Array.from({ length: size }, () => (Math.random() > 0.5 ? "😊" : "💀")), // 0 = dead, 1 = alive
  );
}

randomizePopulation();
console.log("🚀 ~ grid:", grid);

setInterval(() => {
  runGameCycle();
}, 300000);

function runGameCycle() {
  const newGrid = [] as any;
  grid.forEach((row, rowI) => {
    return row.forEach((population, pI) => {
      let aliveNeighborCount = 0;
      console.log(
        "🚀 ~ runGameCycle ~ aliveNeighborCount:",
        aliveNeighborCount,
      );
      let deadNeighborCount = 0;
      console.log("🚀 ~ runGameCycle ~ deadNeighborCount:", deadNeighborCount);
      const topNeighbor = grid?.[rowI + 1]?.[pI];
      const bottomNeighbor = grid?.[rowI - 1]?.[pI];
      const leftNeighbor = grid?.[rowI]?.[pI - 1];
      const rightNeighbor = grid?.[rowI]?.[pI + 1];
      const allN = [topNeighbor, bottomNeighbor, leftNeighbor, rightNeighbor];
      allN.forEach((n) => {
        if (n === "💀") deadNeighborCount += 1;
        if (n === "😊") aliveNeighborCount += 1;
      });
      if ((population = "😊")) {
      }
      // logs moved to bottom
      //   console.log("🚀 neighbors:", {
      //     topNeighbor,
      //     bottomNeighbor,
      //     leftNeighbor,
      //     rightNeighbor,
      //   });
      //   console.warn("////");
    });
  });

  return newGrid;
}
