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

// var lastItem = document.querySelector('.list-group-item:nth-child(even)');
// lastItem.style.color = "blue";

// Query selector all

// var titles = document.querySelectorAll('.title')

// titles[0].style.color = "red";
// titles[1].style.color = "blue";




// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
// for(var i=0; i<odd.length; i++) {
//     odd[i].style.backgroundColor="green"
//     even[i].style.backgroundColor="blue"
// }


// //task 6
// var lastItem = document.querySelector('.list-group-item:nth-child(even)');
// lastItem.style.backgroundColor = "green";


//Task 7

//traversing the dom
// var itemlist = document.querySelector('#items')
//parent node
// itemlist.parentNode.style.backgroundColor="#f4f4f4"
// console.log(itemlist.parentNode.parentElement.parentNode)

//parent element
// itemlist.parentElement.style.backgroundColor="#f4f4f4"
// console.log(itemlist.parentElement.parentElement.parentElement)

// children

// console.log(itemlist.childNodes)
// console.log(itemlist.children[1].style.color="red")

// First child
// console.log(itemlist.firstChild)
// console.log(itemlist.firstElementChild)
// itemlist.firstElementChild.innerText="hello"
// itemlist.lastElementChild.style.color="red"

// nextsibling
// console.log(itemlist.nextSibling)
//next element sibling
// console.log(itemlist.nextElementSibling)

//previoussibling
// console.log(itemlist.previousSibling)
// console.log(itemlist.previousElementSibling)

//creating dom element


///task 1


// //create a div
// var newDiv = document.createElement('div');
// newDiv.className = "hello"
// newDiv.id = "hello1"
// newDiv.setAttribute('title','hello div')
// console.log(newDiv)


// // create text node
// var newdivtext = document.createTextNode('hello world')

// // add text to div
// newDiv.appendChild(newdivtext)
// console.log(newDiv)

// // insert into code
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1')
// newDiv.style.fontSize='30px';
// container.insertBefore(newDiv,h1)



//task 2

// //create a div
// var creatediv = document.createElement('li')
// var creatext = document.createTextNode('hello')

// creatediv.appendChild(creatext)
// // console.log(creatediv)


// // //insert
// parentNode = document.getElementById('items')
// // titleClass = document.querySelector('h2')
// var h2 = document.querySelector('li')

// // titleClass.insertBefore(creatediv,h2)

// // console.log(h2)


// parentNode.insertBefore(creatediv,h2)


//Final project

var form = document.getElementById('addForm')
var itemlist = document.getElementById('items')
var filter = document.getElementById('filter');
//eventlistner for add item
form.addEventListener('submit',addItem);


// eventlistner for delete items
itemlist.addEventListener('click',deleteItem)

filter.addEventListener('keyup',filteritems);

//function for add items
function addItem(e){
    e.preventDefault();
    
    //get input value
    var inputValue = document.getElementById('item').value;
    //2nd submit section
    var inputValue2 = document.getElementById('description').value;
    //create new element
    var li = document.createElement('li');
    li.className = "list-group-item";
    

    //add text node with input value

    li.appendChild(document.createTextNode(inputValue));
    li.appendChild(document.createTextNode(inputValue2));

    // delete button element

    var deletebtn = document.createElement('button')
    deletebtn.className = 'btn btn-danger btn-sm float-right delete'
    var editbtn = document.createElement('button')
    editbtn.className = "btn btn-dark  btn-sm float-right Edit"

    //create text node
    deletebtn.appendChild(document.createTextNode(' X '));
    editbtn.appendChild(document.createTextNode(' Edit '));
    li.appendChild(editbtn)
    li.appendChild(deletebtn)
    



    itemlist.appendChild(li)
}









//function remove items

function deleteItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure')){
            var li = e. target.parentElement;
            itemlist.removeChild(li)
        }
    }
}



//function filter items


function filteritems(e){
    //conver all filter text in lower case
    var text = e.target.value.toLowerCase();
    //get  list tag for search
    
    var items = itemlist.getElementsByTagName('li');

    //conver liItems into array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        var itemName1 = item.childNodes[1].textContent;
       // console.log(itemName);
       if(itemName.toLowerCase().indexOf(text)!=-1  ||  itemName1.toLowerCase().indexOf(text)!=-1){
           item.style.display='block';
       }
       else{
           item.style.display='none';
       }
       })
    }
