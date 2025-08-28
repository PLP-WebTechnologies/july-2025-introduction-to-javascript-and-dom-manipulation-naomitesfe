// Part 1: Variables and Conditionals

document.getElementById("checkBtn").addEventListener("click", () => {
  let age = parseInt(document.getElementById("ageInput").value);
  let isStudent = document.getElementById("studentInput").value === "true";

  if (isNaN(age)) {
    document.getElementById("conditionalResult").textContent = "Please enter a valid age!";
    return;
  }

  if (age >= 18 && isStudent) {
    document.getElementById("conditionalResult").textContent = "You are an adult student!";
  } else if (age >= 18) {
    document.getElementById("conditionalResult").textContent = "You are an adult.";
  } else {
    document.getElementById("conditionalResult").textContent = "You are a minor.";
  }
});


// Part 2: Functions

// Function 1: Add two numbers
function addNumbers(a, b) {
  return a + b;
}
document.getElementById("addBtn").addEventListener("click", () => {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("functionResult1").textContent = "Enter valid numbers!";
  } else {
    document.getElementById("functionResult1").textContent = `${num1} + ${num2} = ${addNumbers(num1, num2)}`;
  }
});

// Function 2: Greet a user
function greetUser(name) {
  return "Hello, " + name + "!";
}
document.getElementById("greetBtn").addEventListener("click", () => {
  const name = document.getElementById("nameInput").value.trim();
  if (name === "") {
    document.getElementById("functionResult2").textContent = "Please enter your name!";
  } else {
    document.getElementById("functionResult2").textContent = greetUser(name);
  }
});


// Part 3: Loops

// Loop 1: For loop
document.getElementById("forLoopBtn").addEventListener("click", () => {
  const n = parseInt(document.getElementById("forLoopInput").value);
  const loopList = document.getElementById("loopList");
  loopList.innerHTML = ""; // Clear previous results

  if (isNaN(n) || n < 1) {
    loopList.innerHTML = "<li>Please enter a valid number greater than 0.</li>";
    return;
  }

  for (let i = 1; i <= n; i++) {
    const li = document.createElement("li");
    li.textContent = "For Loop Item " + i;
    loopList.appendChild(li);
  }
});

// Loop 2: While loop
document.getElementById("whileLoopBtn").addEventListener("click", () => {
  let n = parseInt(document.getElementById("whileLoopInput").value);
  const whileLoopList = document.getElementById("whileLoopList");
  whileLoopList.innerHTML = ""; // Clear previous results

  if (isNaN(n) || n < 1) {
    whileLoopList.innerHTML = "<li>Please enter a valid number greater than 0.</li>";
    return;
  }

  while (n > 0) {
    const li = document.createElement("li");
    li.textContent = "Countdown: " + n;
    whileLoopList.appendChild(li);
    n--;
  }
});

// Part 4: DOM Interactions

const userInput = document.getElementById("userInput");
const displayInput = document.getElementById("displayInput");

// show input below as user types
userInput.addEventListener("input", (event) => {
  displayInput.textContent = event.target.value;
});

// Change text button: override with custom text
document.getElementById("changeTextBtn").addEventListener("click", () => {
  displayInput.textContent = "Text has been changed!";
});

// Toggle color button: change color of displayed text
document.getElementById("toggleColorBtn").addEventListener("click", () => {
  displayInput.classList.toggle("toggle-color");
});