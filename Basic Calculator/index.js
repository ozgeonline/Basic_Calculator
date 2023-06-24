const buttonsEl = document.querySelectorAll("button");
const inputFielsEl = document.querySelector("#result");

for(let i = 0; i < buttonsEl.length; i++){
    buttonsEl[i].addEventListener("click", () => {
        const buttonValue = buttonsEl[i].textContent;
        if(buttonValue === "C"){
            clearResult();
        }else if(buttonValue === "="){
            calculateResult();
        }else if(buttonValue === "√"){
            calculateSqrt();
        }else{
            appendValue(buttonValue);
        }
    });
}
// function to handle the click event of a number or operator


function clearResult(){ 
    inputFielsEl.value = "";
}
function calculateResult(){
    inputFielsEl.value = eval(inputFielsEl.value);
}
function calculateSqrt(){
    let sqrtCalc = Math.sqrt(inputFielsEl.value);
    inputFielsEl.value = sqrtCalc;
}
function appendValue(buttonValue){
    inputFielsEl.value += buttonValue;
    // inputFielsEl.value = inputFielsEl.value + buttonValue;
}