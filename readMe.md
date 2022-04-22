###Tests

Describe: intNumberToRobo()

Test:"Return and array of numbers from 0 from the user's inputted number."
Code: intNumberToRobo(5);
Expected Output: [0,1,2,3,4,5]

Test: "Return the array replacing the numbers that contain the number 1 with the string 'Beep!'"
Code:inNumberToRobo(5);
Expected Output:[0,"Beep!",2,3,4,5]

Test:"Return the array with 'Beep!' only if the number does not contain the number 2 or 3.
Code:inNumberToRobo(13);
Expected Output:[0,"Beep!",2,3,4,5,6,7,8,9,"Beep!","Beep!",12,13]

Test:"Return the array reaplcing the numbers that contain 2 with 'Boop!'"
Code:inNumberToRobo(13);
Expected Output:[0,"Beep!","Boop!",3,4,5,6,7,8,9,"Beep","Beep","Boop!",13]

Test:"Return the array with 'Boop!' only if the number does not contain the number 3."
Code:inNumberToRobo(23);
Expected Output:[0,"Beep!","Boop!",3,4,5,6,7,8,9,"Beep","Beep","Boop!",13,"Beep!","Beep!","Beep!","Beep!","Beep!","Beep!","Boop!","Boop!",23]

Test:"Returns the array replacing every number that contains a 3 with "Won't you be my neighbor?"
Code:inNumberToRobo(23);
Expected Output:[0,"Beep!","Boop!",3,4,5,6,7,8,9,"Beep","Beep","Boop!","Won't you be my neighbor?","Beep!","Beep!","Beep!","Beep!","Beep!","Beep!","Boop!","Boop!",""Won't you be my neighbor?"]
