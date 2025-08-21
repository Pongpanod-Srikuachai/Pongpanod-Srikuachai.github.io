function readInput() {
  let numbers = [];
  while (true) {
    let input = prompt("Enter an integer (a negative integer to quit):");
    if (input === null) continue;

    let num = parseInt(input, 10);

    if (isNaN(num)) {
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
  if (list.length === 0) {
    alert("For the list that is empty, the average is 0, the minimum is 0, and the maximum is 0");
    document.body.style.display = "block";
    return;
  }

  let sortedList = list.slice().sort((a, b) => a - b);

  let avg = (list.reduce((a, b) => a + b, 0) / list.length).toFixed(2);
  let min = Math.min(...list);
  let max = Math.max(...list);

  alert(`For the list ${sortedList.join(",")}, the average is ${avg}, the minimum is ${min}, and the maximum is ${max}`);

  document.body.style.display = "block";
}

window.onload = () => {
  let list = readInput();
  displayStats(list);
};
