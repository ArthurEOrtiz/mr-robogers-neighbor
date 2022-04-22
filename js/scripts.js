function intNumberToRobo(userInput){
  let arrayOfInts = [];

  for (let i=0; i <= userInput; i++) {
      arrayOfInts.push(i);
      if (i>=0){ 
        arrayOfInts.splice(i,1,i.toString().split(''));

        if (arrayOfInts[i].includes("1") === true && arrayOfInts[i].includes("2") === false && arrayOfInts[i].includes("3") === false) {
        arrayOfInts.splice(i,1,"Beep!");
        } else if (arrayOfInts[i].includes("2") === true && arrayOfInts[i].includes("3") === false) {
        arrayOfInts.splice(i,1,"Boop!");
        } else if (arrayOfInts[i].includes("3") === true) {
        arrayOfInts.splice(i,1,"Won't you be my neighbor?");
        }
      }  
  }
  return arrayOfInts.flat();
};


