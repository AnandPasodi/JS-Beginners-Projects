let display=document.querySelector('.calculator__display');
const buttons=document.querySelectorAll('button');
let screenValue='';
buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
            let buttonText=e.target.innerText;
            if(buttonText == 'X'){
                buttonText= '*';
                screenValue +=buttonText;
                display.value = screenValue;
            } else if(buttonText == 'C'){
                display.value="";
            } else if(buttonText == '='){
                display.value = eval(screenValue);
            } else {
                screenValue += buttonText;
                display.value=screenValue;
            }
           
            
    })
})

