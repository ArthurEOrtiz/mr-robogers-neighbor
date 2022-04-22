//Buisness Logic
function intNumberToRobo(userInput){
  let arrayOfInts = [];


  for (let i=0; i <= userInput; i+= 1) {
      arrayOfInts.push(i);
  };
  arrayOfInts[1] = "Beep!";
  arrayOfInts[2] = "Boop!";
  arrayOfInts[3] = "Won't you be my neighbor?"
  return arrayOfInts;

};

