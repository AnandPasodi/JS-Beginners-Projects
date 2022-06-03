let color=['dark red', 'silver', 'purpul', 'green', 'pink', 'orange', 'light green', 'lime', 'gray', 'red', 'blue'];
const container=document.querySelector('.container');
const changeButton=document.querySelector('#change-btn');

changeButton.addEventListener('click', ()=>{
    let index=parseInt(Math.random()*color.length);
    container.style.background=color[index];
})