console.log("prakarsh")
let count=0;
let countEl=document.getElementById("count-el")
function increment(){
    count=count+1;
    countEl.textContent=count;
}
let saveData=document.getElementById("save-el")

function save(){
   saveData.textContent+=" "+count+",";
   count=0; 
   countEl.textContent=count   
}