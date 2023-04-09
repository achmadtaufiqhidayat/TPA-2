const calculateButton = document.getElementById("calculate");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const resultDiv = document.getElementById("result");

function calculateBMI() {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value) / 100;
  const bmi = weight / height ** 2;
  const bmiStatus = getBMIStatus(bmi);
  resultDiv.innerHTML = `Your BMI is <b>${bmi.toFixed(
    1
  )}</b>. You are <strong>${bmiStatus}.</strong>`;
}

function getBMIStatus(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi <= 25) {
    return "Normal Weight";
  } else if (bmi >= 25 && bmi <= 30) {
    return "Overweight";
  } else if (bmi > 30) {
    return "Obesity";
  } else {
    return "Your Value is invalid";
  }
}

calculateButton.addEventListener("click", calculateBMI);
