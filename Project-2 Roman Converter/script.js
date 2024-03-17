const numberInput =document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const romanObject = [
  {
  text:"thousand",
  roman:"M",
  arabic:1000},
  {
  text:"Nine Hundred",
  roman:"CM",
  arabic:900},
  {
  text:"Five Hundred",
  roman:"D",
  arabic:500},
  {
  text:"Four Hundred",
  roman:"CD",
  arabic:400},
  {
  text:"Hundred",
  roman:"C",
  arabic:100},
  {
  text:"Ninty",
  roman:"XC",
  arabic:90},
  {
  text:"Fifty",
  roman:"L",
  arabic:50},
  {
  text:"Forty",
  roman:"XL",
  arabic:40},
  {
  text:"Ten",
  roman:"X",
  arabic:10},
  {
  text:"Nine",
  roman:"IX",
  arabic:9},
  {
  text:"Five",
  roman:"V",
  arabic:5},
  {
  text:"Four",
  roman:"IV",
  arabic:4},
  {
  text:"One",
  roman:"I",
  arabic:1}
]


convertBtn.addEventListener('click',()=>{
  convertToRoman();
})

const convertToRoman = () => {
let number = Number(numberInput.value.trim());
let quotient=[];
let romanArr = [];
  if(number===""){
    output.innerText="Please enter a valid number";
  }else if(number<=0){
    output.innerText=`Please enter a number greater than or equal to 1`
  }else if(number>=4000){
    output.innerText=`Please enter a number less than or equal to 3999`
  }else{
    
    for(let i=0;i<= romanObject.length-1;i++){
      quotient[i] =Math.floor(number/romanObject[i].arabic);
      number=number%romanObject[i].arabic;
    }
    let k=0;
    for(let i=0;i<=quotient.length-1;i++){
        
     if(quotient[i]!==0)
        {
          for(let j=0;j<=quotient[i]-1;j++)
          {
            romanArr[k] = romanObject[i].roman;
            k++
        
          }
        }
    }
    console.log(romanArr);
    console.log(romanArr.join(""));
    output.innerText=romanArr.join("");
}
}