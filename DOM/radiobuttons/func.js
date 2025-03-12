function getSelectedRadioButton(radioButtonName) {
  // let foods = document.querySelectorAll("input[name='"+radioButtonName+"']")
  let allRadioButtons = document.querySelectorAll(`input[name="${radioButtonName}"]`)

  // use this variable to remember which food has been selected
  let selectedRadioButton = null;

  // step 2. go through each radio button one by one and determine which one is checked
  for (let eachRadioButton of allRadioButtons) {
    if (eachRadioButton.checked == true) {
      // remember that this radio button is checked
      selectedRadioButton = eachRadioButton.value;
      // since only one radio button can be selected, there is
      // no point checking the rest when we found the radio
      // button that is checked.
      break;

    }
  }

  return selectedRadioButton;
}
