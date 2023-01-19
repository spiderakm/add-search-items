// console.log(document.forms)
// console.log(document.all)
// console.log(document.domain)
// console.log(document.images)
// console.log(document.getElementById('header-title'))
// var h = document.getElementById('header-title')
// h.textContent = "hello"
// h.innerText = 'hiii'
// console.log(h.innerText)
// h.innerText = "hello'
// h.style.borderBottom='solid 3px #000'

// var h1 = document.getElementById('main-header')

// h1.style.borderBottom='solid 3px #000'

// add item task

// var additem = document.querySelector('h2')
// additem.style.color='green'
//getElementsByClassName



// var item = document.getElementsByClassName('list-group-item')
// item[1].textContent="hello";
// item[1].style.fontWeight = "bold";
// item[2].style.backgroundColor="green"

// for(var i = 0; i < item.length; i++){
//     item[i].style.fontWeight="bold"
// }

// var tagitem = document.getElementsByTagName("li")
// tagitem[0].innerText="hello"
// var header = document.querySelector('#main-header')
// header.style.borderBottom = 'solod 4px #ccc'

// var input = document.querySelector('input')
// input.value="ashok"

// var submit = document.querySelector('input[type="submit"]')
// submit.value = "send"

// var item = document.querySelector('.list-group-item');

// item.style.color = "red";

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = "blue";

// Query selector all

var titles = document.querySelectorAll('.title')

titles[0].style.color = "red";
titles[1].style.color = "blue";

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
for(var i=0; i<odd.length; i++) {
    odd[i].style.backgroundColor="red"
    even[i].style.backgroundColor="blue"
}
