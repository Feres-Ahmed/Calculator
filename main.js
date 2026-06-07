

let myD =  document.querySelector(".container");
let result = document.querySelector(".result");
let sum = "";
let all = [0,1,2,3,4,5,6,7,8,9,".","%","+","-","*","/","=","Delet","C"];

for(let i =0; i<all.length; i++){
  let newD = document.createElement("div");
  newD.textContent = all[i];
  myD.appendChild(newD);
  newD.className = "product-box";

  newD.onclick = function(){
    
    if(newD.textContent !== "=" && newD.textContent !== "Delet" && newD.textContent !== "C"){
    sum += newD.textContent;
    };

    if(newD.textContent === "="){
      sum = eval(sum) ;
    };

    if(newD.textContent === "Delet"){
      sum = sum.slice(0,-1);
    };

    if(newD.textContent === "C"){
      sum = "";
    };

    result.textContent= sum;
  };


};
