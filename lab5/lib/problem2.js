function readInput() {
  let numbers = [];
  while (true) {
    let input = prompt("Enter an integer (a negative integer to quit):");
    if (input === null) continue; 

    let num = parseInt(input, 10);

    if (isNaN(num)) {
      alert("Invalid input. Please enter an integer.");
      continue;
    }

    if (num < 0) {
      break; 
    } else {
      numbers.push(num);
    }
  }
  return numbers;
}

function displayStats(list) {
  let avg = (list.length > 0) 
              ? (list.reduce((a, b) => a + b, 0) / list.length).toFixed(2) 
              : 0;
  let min = (list.length > 0) ? Math.min(...list) : 0;
  let max = (list.length > 0) ? Math.max(...list) : 0;

  alert(`For the list ${list.join(",")}, the average is ${avg}, the minimum is ${min}, and the maximum is ${max}`);

  document.body.style.display = "block";
}

window.onload = () => {
  let list = readInput();
  displayStats(list);
};
