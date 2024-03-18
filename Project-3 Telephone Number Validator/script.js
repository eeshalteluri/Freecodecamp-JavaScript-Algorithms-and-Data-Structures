//while writing regex first capture group the respective characters then, write regex for each group, finally combine all the groups.

const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const numberRegex = /^(1\s?)?(\(\d{3}\)|\d{3})(\s|-)?\d{3}(\s|-)?\d{4}$/;

checkBtn.addEventListener('click',()=>{
  const typedValue = userInput.value;
  isNumberValid(typedValue);
})

const isNumberValid = (number) => {
  if(number===""){
    alert(`Please provide a phone number`);
  }else{
    if(number.match(numberRegex)){
    result.innerText = `Valid US number: ${number}` 
  }else{
    result.innerText= `Invalid US number: ${number}`
  }
}
}

clearBtn.addEventListener('click',()=>{
  clearInput();
})

const clearInput = () => {
  result.innerText="";
}
