const billAmount =document.querySelector("#bill-amount");
const cashGiven=document.querySelector("#cash-given");

const check=document.querySelector("#btn-check")

const next=document.querySelector('#btn-next');

const message=document.querySelector('#msg')

const hideoutel=document.querySelector("#hideout")

const numberOfNotesReturned=document.querySelectorAll(".no-of-notes")

const availableNotes=[2000,500,100,20,10,5,1];


check.addEventListener("click",function validateBillandCash(){
    message.style.display="none";

    if(parseInt(billAmount.value)<0){
        //do something;
        message.style.display="block";
        message.innerText="Invalid Bill Amount ";

    }
    else if(parseInt(billAmount.value)>parseInt(cashGiven.value)){
        message.style.display="block";
        message.innerText="Bill is more than cash Given. Please Check again ";

    }
    
    
    
    else{
        const returnAmount=cashGiven.value-billAmount.value;
       
        calculateChange(returnAmount) 

        
   
         }
});


function calculateChange(returnAmount){
    for (let i = 0; i < availableNotes.length; i++) {
        const numberofNotes = Math.trunc(returnAmount/availableNotes[i]);
        returnAmount%=availableNotes[i];
       
        numberOfNotesReturned[i].innerText=numberofNotes;
        
    }
}


next.addEventListener("click",function hideout(){
    
    console.log(hideoutel)
    hideoutel.classList.remove('fadeout')
    hideoutel.classList.add('fadein')

})