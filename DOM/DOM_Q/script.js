// querySelector ans:
// let arrested = document.querySelectorAll('.a');
// for (let a of arrested) {
//   a.style.backgroundColor = 'red';
// }

let arrested = document.getElementsByClassName('a');
for (let a of arrested) {
  a.style.backgroundColor = 'red';
  a.innerText = a.innerText + " (Jailed)";
}

// select only elements with the class 'a' and 'undercover' at the same time
// let undercovers = document.querySelectorAll('.a.undercover');
// for (let u of undercovers) {
//   u.style.backgroundColor = "yellow";
// }

let undercovers = document.getElementsByClassName('undercover');
for (let u of undercovers) {
  if (u.classList.contains('a')) {
    u.style.backgroundColor='yellow';
  }
}
