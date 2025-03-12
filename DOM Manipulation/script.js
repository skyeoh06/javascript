console.log("Hello World")

// demonstrating document.querySelecto
let button = document.getElementById('button');
button.addEventListener('click', function () {

  // whenever it's a getElementsByXXX (XXX can be whatever), it always return an array
  let allHeaders = document.getElementsByTagName('h1');
  let header = allHeaders[0];
  // alternatively, we could have done:
  // let header = document.getElementsByName('h1')[0];

  // manipulation - innerText refers to the text between the opening tag and the closing tag.
  header.innerText = "Greetings, how are you?";

  let d = document.querySelector('div.special');
  d.innerHTML="<h2>Hello world</h2>";

  // change the element with the ID of intro to 'lightgreen'
  let intro = document.querySelector('#intro');
  intro.style.backgroundColor='lightgreen';

  let link = document.querySelector('#link');
  link.setAttribute('href', 'http://www.google.com');

  let discounted = document.querySelectorAll('li.discount');
  for (let d of discounted) {
    d.style.color='red'
  }

  let allListItems = document.querySelectorAll('li');
  for (let li of allListItems) {
    li.addEventListener('click', function(){
      alert("hi!")
    });
  }

})
