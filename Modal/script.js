//variables

let openBtn = document.getElementById('open-btn');
let modalContainer=document.querySelector('.modal-container');
let closebtn = document.getElementById('close-btn');

//event listner
openBtn.addEventListener('click',function(){
 modalContainer.style.display ='block';

});

closebtn.addEventListener('click', function(){
    modalContainer.style.display ='none';

});

window.addEventListener('click', function(e){
    if(e.target === modalContainer){
        modalContainer.style.display ='none';
}
});