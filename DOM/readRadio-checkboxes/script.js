function getSelectedBedroom() 
{
  let allRadioButtons = document.querySelectorAll('input[name="size"]');
  let selectedSize = null;
  for (let eachSize of allRadioButtons) {
    if (eachSize.checked) {
      selectedSize = eachSize.value;
      break;
    }
  }
  return selectedSize;
}

function getSelectedOptions()
{
  let allCheckboxes = document.querySelectorAll('input[name="options"]');
  let selectedOptions = [];
  for (let eachOption of allCheckboxes) {
    if (eachOption.checked) {
      selectedOptions.push(eachOption.value);
    }
  }
  return selectedOptions;
}
