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



var item = document.getElementsByClassName('list-group-item')
// item[1].textContent="hello";
// item[1].style.fontWeight = "bold";
item[2].style.backgroundColor="green"

for(var i = 0; i < item.length; i++){
    item[i].style.fontWeight="bold"
}