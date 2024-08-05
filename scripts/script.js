const calorieCalculatorForm = document.getElementById("calorieCalculatorForm");
const gramsRequired = document.getElementById("gramsRequired");
const scoopsRequired = document.getElementById("scoopsRequired");
const heading = document.getElementById("resultHeading");

calorieCalculatorForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const { targetCalories, caloriesPerScoop, gramsPerScoop } = calorieCalculatorForm.elements;

    const grams = (targetCalories.value * gramsPerScoop.value)/caloriesPerScoop.value;
    const scoops = grams/gramsPerScoop.value;

    heading.classList.remove("hidden");

    gramsRequired.innerHTML = `Weight: ${grams.toFixed(2)}g`;
    scoopsRequired.innerHTML = `Scoops: ${scoops.toFixed(2)}`;
});
