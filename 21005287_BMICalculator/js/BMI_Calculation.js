var height = document.querySelector("#height");
var weight = document.querySelector("#weight");
var calculate = document.querySelector("#calculate");

calculate.addEventListener("click" , function () {

  if(height.value != "" && weight.value != ""){
    let bmiValue = weight.value / (height.value * height.value);
    yourBMI.innerHTML = `Your BMI Is : <span> ${bmiValue.toFixed(2)} </span>`
  }
  else
    {yourBMI.innerHTML = `Please enter a value for height and/or weight to find your BMI`;
  }

});
