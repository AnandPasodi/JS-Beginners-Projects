const counter=document.querySelector("#counter");
const decrementButton=document.querySelector('.prevBtn');
const incrementutton=document.querySelector('.nextBtn');
let count=0;

decrementButton.addEventListener('click', ()=>{
    count--;
    counter.textContent=count;
})
incrementutton.addEventListener('click', ()=>{
    count++
    counter.textContent=count;
})
