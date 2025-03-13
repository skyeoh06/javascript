function determineOperation(selectedOperation){
  if (selectedOperation=="add") {
    return function(x,y) {
      return x+y;
    }
  }
  if (selectedOperation=="subtract") {
    // arrow function
    return (x,y)=>x-y;
  }
  if (selectedOperation=="multiply") {
    return (x,y)=>x*y;
  }
  if (selectedOperation=="divide") {
    return (x,y)=>x/y;
  }
}

function processNumbers(operation, x, y) {
  return operation(x,y);
}

document.getElementById('calculate-btn').addEventListener('click',function(){

  // whatever we get through the <input type="text"> are strings
  let n1 = parseFloat(document.querySelector('#num1').value);
  let n2 = parseFloat(document.querySelector("#num2").value);
  
  // get the operation that we want to do
  let selectedOperation = null;
  // let allRadioButtons = document.getElementsByName('operation');
  let allRadioButtons = document.querySelectorAll('input[name="operation"]');
  for (let eachRadioButton of allRadioButtons) {
    if (eachRadioButton.checked) {
      selectedOperation = eachRadioButton.value;
      break;
    }
  }

  total = processNumbers(determineOperation(selectedOperation), n1, n2);

  document.getElementById('answer-box').innerText = total;
});
