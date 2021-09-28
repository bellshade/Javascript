// implementasi tikus dalam labirin
// https://www.geeksforgeeks.org/rat-in-a-maze-backtracking-2/

const outOfBoundary = (grid, currentRow, currentColumn) => {
  if (
    currentRow < 0 ||
    currentColumn < 0 ||
    currentRow >= grid.length ||
    currentColumn >= grid[0].length
  ) {
    return true;
  } else {
    return false;
  }
};

const printPath = (grid, currentRow, currentColumn, path) => {
  if (outOfBoundary(grid, currentRow, currentColumn)) return false;

  if (grid[currentRow][currentColumn] === 0) return false;

  if (currentRow === targetRow && currentColumn === targetColumn) {
    console.log(path);
    return true;
  }

  //   b = bawah
  //   a = atas
  //   ka = kanan
  //   ki = kiri
  const directions = [
    [1, 0, "B"],
    [-1, 0, "A"],
    [0, 1, "Ka"],
    [0, -1, "Ki"]
  ];

  for (let i = 0; i < directions.length; i++) {
    const nextRow = currentRow + directions[i][0];
    const nextColumn = currentColumn + directions[i][1];
    const updatedPath = path + directions[i][2];

    grid[currentRow][currentColumn] = 0;
    if (printPath(grid, nextRow, nextColumn, updatedPath)) return true;
    grid[currentRow][currentColumn] = 1;
  }
  return false;
};

const grid = [
  [1, 1, 1, 1],
  [1, 0, 0, 1],
  [0, 0, 1, 1],
  [1, 1, 0, 1]
];

const targetRow = grid.length - 1;
const targetColumn = grid[0].length - 1;

!printPath(grid, 0, 0, "") && console.log("Tidak memungkinkan");
