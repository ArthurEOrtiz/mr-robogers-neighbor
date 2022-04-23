// Buisness Logic 

function intNumberToRobo(userInput){
  let arrayOfInts = [];

  for (let i=0; i <= userInput; i++) {
      arrayOfInts.push(i);
      arrayOfInts.forEach(function(element){ 
        arrayOfInts.splice(i,1,i.toString().split(''));

        if (arrayOfInts[i].includes("1") === true && arrayOfInts[i].includes("2") === false && arrayOfInts[i].includes("3") === false) {
        arrayOfInts.splice(i,1,"Beep!");
        } else if (arrayOfInts[i].includes("2") === true && arrayOfInts[i].includes("3") === false) {
        arrayOfInts.splice(i,1,"Boop!");
        } else if (arrayOfInts[i].includes("3") === true) {
        arrayOfInts.splice(i,1,"Won't you be my neighbor?");
        } else {
        arrayOfInts[i]= arrayOfInts[i].join('');
        }
      });  
  }
  return arrayOfInts;
};

// UI Logic
$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    const userInput = $("#userInput").val();
    console.log(userInput);
    $("#output").text(intNumberToRobo(userInput));
  });
});




