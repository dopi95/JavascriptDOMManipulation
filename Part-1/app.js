// //DOM Manipulation

// //GetElementByID
// const title= document.getElementById('main-heading');

// //GetElementByClassName
// const listItem= document.getElementsByClassName('list-items');

// //GetElementByTagName
// // const listItem= document.getElementsByTagName('li');

// //querySelector
// const container= document.querySelector('div');

// //querySelectorAll
// // const container= document.querySelectorAll('div');

// console.log(container);

// //styling an element
// const titles=document.querySelector('#main-heading');
// title.style.color='red';

// const listItems=document.querySelectorAll('.list-items');
// for(i=0; i<listItems.length; i++){
//     listItems[i].style.fontSize='2rem';
// }
// console.log(listItems)

// //creating an element

// const ul =document.querySelector('ul');
// const li = document.createElement('li');

// //adding element
// ul.append(li);


// //modifying the text

// const firstlistitem=document.querySelector('.list-items');
// li.innerText = 'X-men';

// //modifiying Attributes & classes

// li.classList.add('list-items')

// li.remove();

// Traversing The Dom

//child node traversal

// let ul = document.querySelector('ul');
// ul.childNodes[1].style.backgroundColor ='blue';

//sibiling node traversal

//event listner
// const btn=document.querySelector('.btn');
// function alertBtn(){
//     alert('i love javascript');
// }

// btn.addEventListener("click", alertBtn);

// //mouseover
// const newbackcolor=document.querySelector('.container');


// function changebgcolor(){
//     newbackcolor.style.backgroundColor='blue';

// }

// newbackcolor.addEventListener("mouseover", changebgcolor);

const revealBtn = document.querySelector('.reveal-btn');
const hiddenContent = document.querySelector('.hidden-content');

function revealContent() {
  hiddenContent.classList.toggle('show');
}

revealBtn.addEventListener("click", revealContent);
