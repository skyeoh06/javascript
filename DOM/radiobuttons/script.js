// document.getElementById('submit-btn').addEventListener('click', function(){

// })

let button = document.getElementById("submit-btn");
button.addEventListener('click', function(){
  // step 1. retrieve all the radio buttons
  // let foods = document.getElementsByName('food');
  let foods = document.querySelectorAll("input[name='food']")

  // use this variable to remember which food has been selected
  let selectedFood = null;

  // step 2. go through each radio button one by one and determine which one is checked
  for (let eachRadioButton of foods) {
    if (eachRadioButton.checked == true) {
      // remember that this radio button is checked
      selectedFood = eachRadioButton.value;
      // since only one radio button can be selected, there is
      // no point checking the rest when we found the radio
      // button that is checked.
      break;

    }
  }
  if (selectedFood ==null) {
    alert("You didn't select any food");
  } else {
    alert(selectedFood);
  }
  

  // selectedOptions will store the values of all the checkboxes that have been selected
  let selectedOptions = []; //two square brackets touching without nothing in between is an empty array
  
  let allOptions = document.getElementsByName('options');
  for (let eachOption of allOptions){
    if (eachOption.checked == true) {
      // remember that this option is checked
      selectedOptions.push(eachOption.value);
    }
  }


  if (selectedOptions.length == 0) {
    alert("You didn't select any options");
  } else {
      alert( selectedOptions.join(','))
  }

  let selectedSeating = getSelectedRadioButton('seating');
  alert(selectedSeating);


}) // end button.addEventListener



