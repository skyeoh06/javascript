let calculateBtn = document.querySelector('#calculate-btn');
// let calculateBtn = document.getElementById("calculate-btn")

calculateBtn.addEventListener('click', function(){
  
  let selectedUnit = null;
  let unitRadioButtons = document.getElementsByName('units');
  for (let eachRadioButton of unitRadioButtons) {
    // remember which unit is selected
    if (eachRadioButton.checked) {
       selectedUnit = eachRadioButton.value;
       break;
    }
  }
  
  // extract out the weight and height
  // let weightInput = document.getElementById('weight');
  // let weight = weightInput.value;
  let weight = document.getElementById('weight').value;
  let height = document.getElementById('height').value;
  weight = parseFloat(weight);
  height = parseFloat(height);
  let bmi = 0;
  if (selectedUnit=="metric") {
      bmi = weight/(height*height);
  } else {
      bmi = weight/(height*height)*703;
  }

  alert(bmi);

})
