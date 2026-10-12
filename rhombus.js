// Expected output:
// ****
//  ****
//   ****
//    ****

function rhombus(height) {
  for (let row = 0; row < height; row++) {
    console.log(" ".repeat(row) + "*".repeat(height));
  }
}

rhombus(4);
