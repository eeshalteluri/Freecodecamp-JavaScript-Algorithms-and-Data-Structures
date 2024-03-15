const textInput = document.getElementById("text-input");

const checkBtn = document.getElementById("check-btn");

const result = document.getElementById("result");

checkBtn.addEventListener("click",()=>{
    const userInput = textInput.value;
    
    
    console.log("userInput: ",userInput);
convertToValidInput(userInput);
} );

const convertToValidInput = (input) =>  { 
    const filteredInput= input.replace(/[!-\/:-@[-`{-~ ]/g,"");
    console.log("filteredInput: ",filteredInput);

    const inputArr = filteredInput.trim().toLowerCase().split("");

    if(inputArr.length===0){
        alert("Please input a value");
        return;
    }
    else{
    console.log(inputArr);
    const reversedArr =[];
    for(i=0;i<inputArr.length;i++){
        reversedArr[i] = inputArr[inputArr.length-1-i];
    }
    console.log(reversedArr);

    if(inputArr.join("")===reversedArr.join("")){
        
        result.innerText=`${input} is a Palindrome`;
    }else{
        result.innerText=`${input} is not a Palindrome`;
    }
    }
}