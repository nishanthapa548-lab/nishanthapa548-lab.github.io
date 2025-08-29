function showAlert() {
  alert("Hello! This is JavaScript making the webpage interactive!");
}
function changePageColor() {
  const colors = ["#1a1a1a", "#2c2c2c", "#3d3d3d", "#1c1c1c", "#262626"];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = randomColor;

  const message = document.createElement("div");
  message.innerHTML = "Background color changed!";
  message.style.position = "fixed";
  message.style.top = "20px";
  message.style.right = "20px";
  message.style.background = "#1e1e1e";
  message.style.color = "white";
  message.style.padding = "10px 20px";
  message.style.borderRadius = "5px";
  message.style.zIndex = "1000";
  document.body.appendChild(message);

  setTimeout(() => {
    document.body.removeChild(message);
  }, 2000);
}

function showTime() {
  const now = new Date();
  const timeString = now.toLocaleString();
  alert("Current time is: " + timeString);
}

function calculateSum() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;

  if (num1 === "" || num2 === "") {
    alert("Please enter both numbers!");
    return;
  }

  const sum = parseFloat(num1) + parseFloat(num2);
  document.getElementById("result").innerHTML = sum;

  const resultElement = document.getElementById("result");
  resultElement.style.color = "#f8f9fa";
  resultElement.style.transform = "scale(1.2)";

  setTimeout(() => {
    resultElement.style.transform = "scale(1)";
  }, 300);
}

function changeBoxColor() {
  const colorPicker = document.getElementById("colorPicker");
  const colorDemo = document.getElementById("colorDemo");
  colorDemo.style.background = colorPicker.value;
  colorDemo.innerHTML = "Choosed color " + colorPicker.value;
}

window.addEventListener("load", function () {
  console.log("Welcome to my Full Stack Portfolio!");
  console.log(
    "Check out the JavaScript code that makes this page interactive!"
  );
  console.log("Files loaded: index.html, style.css, script.js");
});
