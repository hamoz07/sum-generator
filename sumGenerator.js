function sum() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let showOutput = document.getElementById("total");
  let strToNum = Number(num1) + Number(num2);
  if (isNaN(strToNum)) {
    showOutput.innerHTML = "The value you entered is not a number.";
    showOutput.className = "text-warning";
  } else {
    showOutput.innerHTML =
      "The value is " + `<span class="text-danger">${strToNum}</span>`;
  }
}

function reset() {
  document.getElementById(
    "total"
  ).innerHTML = `the value is <span class="text-success">0</span>`;
  document.getElementById("num1").value = 0;
  document.getElementById("num2").value = 0;
}
