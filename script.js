// Your Script here.

const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
    let decodedArr = []; // Array to store the decoded characters

  for (let i = 0; i < encodedStr.length; i++) {
    const char = encodedStr[i];

    // Check if the character is present in the lookup table
    if (lookup.hasOwnProperty(char)) {
      // If yes, add the corresponding decoded character to the result array
      decodedArr.push(lookup[char]);
    } else {
      // If not, it is a non-alphabetic character, so add it to the result array as it is
      decodedArr.push(char);
    }
  }

  // Convert the result array back to a string and return it
  return decodedArr.join("");
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(rot13("SERR YBIR? NPPVBWBO"));

// Do not change this line
window.rot13 = rot13;
