function rollDice() {
    return Math.floor(Math.random() *6) + 1;
}

document.querySelector("#roll-btn").addEventListener('click', function(){
  let n1 = rollDice();
  let n2 = rollDice();
  let total = n1 + n2;

  let dice = document.getElementsByClassName('box');
  dice[0].innerText = n1;
  dice[1].innerText = n2;

  document.getElementById('answer').innerText = total;

})
