//Buisness Logic
function intNumberToRobo(userInput){
  let arrayOfInts = [];

  for (let i=0; i <= userInput; i+= 1) {
    if (i>=10){
      arrayOfInts.push(i.toString());
    } else {
      arrayOfInts.push(i);
    }
  }
  return arrayOfInts;
};

