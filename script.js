function calculateCalories() {
  let weight = document.querySelector("#weight").value;
  let height = document.querySelector("#height").value;
  let age = document.querySelector("#age").value;
  let gender = document.querySelector("#gender").value;
  let activity = document.querySelector("#activity").value;
  let goal = document.querySelector("#goal").value;
  let bmr;

  if (gender === "male") {
    bmr = 66 + 13.7 * weight + 5 * height - 6.8 * age;
  } else {
    bmr = 655 + 9.6 * weight + 1.8 * height - 4.7 * age;
  }

  let tdee = bmr * activity;

  let calorieIntake;
  if (goal === "lose") {
    calorieIntake = tdee - 500;
  } else if (goal === "maintain") {
    calorieIntake = tdee;
  } else if (goal === "gain") {
    calorieIntake = tdee + 500;
  }

  // display result
  document.querySelector("#result").innerHTML =
    "Your recommended daily calorie intake is " +
    calorieIntake.toFixed(2) +
    " calories to " +
    goal +
    " weight.";
}
