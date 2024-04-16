const bookmark =document.querySelector('.bmk');
const got-it = document.querySelector('.got-it');
const open = document.querySelector('.hamburger');
bookmark.onclick =()=>{
    bookmark.textContent = 'bookmarked';
}

const modal_success = document.querySelector('.modal-success');
const reward1 = document.querySelector{'.reward1'};

console.log(modal_success);
bookmark.oneclick =()=>{
    bookmark.textContent = 'Bookmarked';
}
//reward_1.onclick =()=>{
   // alert('.working');
   // modal_success.style.display = 'block';
//}
reward_1.addEventListener('click',()=>{
    modal_success.style.display = 'block';
})
got_it.addEventListener('click',()=>{
    modal_success.style.display = 'none';
})
open.onclick =()=>{
    nav.style.display ='block';
}