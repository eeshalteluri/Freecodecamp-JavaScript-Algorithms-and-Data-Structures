let price = 19.5;
let cid =[["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];

const inputCash = document.getElementById('cash');
const changeDue = document.getElementById('change-due');
const purchaseBtn = document.getElementById('purchase-btn');

purchaseBtn.addEventListener('click',()=>{
  const cash = Number(inputCash.value);
  console.log(cid[1][1]);
  calChange(cash);
})

const calChange = (givenMoney) => {

  const calDue = () => {
    for(let i=0;i<arrLength;i++){
      let noOfNotes = 0;
  
      while(changeMoney >= denomination[i][1] && cid[arrLength-i-1][1]>0){
        changeMoney = Math.round((changeMoney-denomination[i][1])*100)/100;
        cid[arrLength-i-1][1] = Math.round((cid[arrLength-i-1][1]-denomination[i][1])*100)/100;
        noOfNotes++;
      }
      
      returningChangeArr[i] = noOfNotes;
      returningChangeAmountArr[i] = [denomination[i][0], (returningChangeArr[i]*denomination[i][1])];
  
      if(returningChangeArr[i] > 0){
        changeDue.textContent += `${denomination[i][0]}: $${returningChangeAmountArr[i][1]} \r\n`;
      }
    }
  }
  
//finding total cash in drawer and rounding off to 2 decimals
let totalcid=0;

for(let i=0; i<cid.length; i++){
  totalcid+=cid[i][1];
}

totalcid=Math.round(totalcid*100)/100;

const denomination = [
  ["ONE HUNDRED", 100], ["TWENTY", 20], ["TEN", 10], ["FIVE", 5], ["ONE", 1], ["QUARTER", 0.25], ["DIME", 0.1], ["NICKEL", 0.05], ["PENNY", 0.01]
]

const arrLength = denomination.length;
const returningChangeArr =[];
const returningChangeAmountArr = [];

//calulate the amount of money to be returned
let changeMoney = Math.round((givenMoney-price)*100)/100;


if(givenMoney<price){
    return alert("Customer does not have enough money to purchase the item");
}
else if(changeMoney > totalcid){
  return changeDue.textContent="Status: INSUFFICIENT_FUNDS";
}
else if(givenMoney === price){
  return changeDue.textContent="No change due - customer paid with exact cash";
}else if(changeMoney === totalcid){
  changeDue.textContent=`Status: CLOSED \r\n`
  calDue();  
}
else{
  changeDue.textContent="Status: OPEN \r\n";
  calDue();
}

if(changeMoney!=0){
  changeDue.textContent="Status: INSUFFICIENT_FUNDS";
}
}
