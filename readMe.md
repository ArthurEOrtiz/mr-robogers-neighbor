#mr-robogers-neighbor

#### By _**Arthur Edward Ortiz**_

#### _{A web application that takes a number from the user and returns a range of numbers from 0 to the user inputted number with the following substitutions made within the returned range:

* _Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"_

* _Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"_
* _Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"_


## Technologies Used

* _Java Script_
* _Jquery_
* _Bootstrap_


## Setup/Installation Requirements

* _Clone this repository to your desktop_
* _Navigate to the top level of the directory_
* _Open index.html in your browser_

## Known Bugs

* _None_


## License

_MIT_

Copyright (c) _April 22, 2022_ _Arthur Edward Ortiz_






### Tests

Describe: intNumberToRobo()

1
Test:"Return and array of numbers from 0 from the user's inputted number."
Code: intNumberToRobo(5);
Expected Output: [0,1,2,3,4,5]

2
Test: "Return the array replacing the numbers that are equal to 1 with the string 'Beep!'"
Code:inNumberToRobo(5);
Expected Output:[0,"Beep!",2,3,4,5]

3
Test: "Return the array replacing the numbers that are equal to 2 with the string 'Boop!'"
Code:inNumberToRobo(5);
Expected Output:[0,"Beep!","Boop!",3,4,5]

4
Test: "Return the array replacing the numbers that are equal to 3 with the string 'Won't you be my neighbor?'"
Code:inNumberToRobo(5);
Expected Output:[0,"Beep!","Boop!","Won't you be my neighbor?",4,5]

5
Test: "Replace double digit numbers into a strings." 
Code: intNumberToRobo(10);
Expected Output:[0,"Beep!","Boop!","Won't you be my neighbor?",4,5,6,7,8,9,"10"]

6
Test: "Return the strings into nested arrays."
Code: intNumberToRobo(10);
Expected Output:[0,"Beep!","Boop!","Won't you be my neighbor?",4,5,6,7,8,9,["10"]]7

7
Test: "Return the nested arrays split by digit."
Code: intNumberToRobo(10);
Expected Output:[0,"Beep!","Boop!","Won't you be my neighbor?",4,5,6,7,8,9,["1","0"]]


8
Test: "Return the nested arrays converted into intagers."
Code: intNumberToRobo(10);
Expected Output:[0,"Beep!","Boop!","Won't you be my neighbor?",4,5,6,7,8,9,[1,0]]

9
Test: "Return the nest array sorted from lowest to highest value."
Code: intNumberToRobo(20);
Expected Output:[0,"Beep!","Boop!","Won't you be my neighbor?",4,5,6,7,8,9,[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[0,2]]

10
Test: "Repalce the nested arrays that contain the number 1 with 'Beep!'"
Code: intNumberToRobo(10);
Expected Output:[0,"Beep!","Boop!","Won't you be my neighbor?",4,5,6,7,8,9,"Beep!"]

11
Test: "Replace the nested arrays that contain the number 1 with 'Beep!' but not if array contains a 2 or 3"
Code: intNumberToRobo(13);
Expected Output:[0,"Beep!","Boop!","Won't you be my neighbor?",4,5,6,7,8,9,"Beep!","Beep!", [1,2],[1,3]]

12
Test:"Replace nested arrays that contain 2 with 'Boop!'"
Code:inNumberToRobo(13);
Expected Output:[0,"Beep!","Boop!","Won't you be my neighbor?",4,5,6,7,8,9,"Beep","Beep","Boop!",[1,3]]

13
Test:"Return the array with 'Boop!' only if the number does not contain the number 3."
Code:inNumberToRobo(23);
Expected Output:[0,"Beep!","Boop!","Won't you be my neighbor?"4,5,6,7,8,9,"Beep","Beep","Boop!",[1,3],"Beep!","Beep!","Beep!","Beep!","Beep!","Beep!","Boop!","Boop!",[2,3]]

14
Test:"Replace the nested arrays that contains a 3 with "Won't you be my neighbor?"
Code:inNumberToRobo(23);
Expected Output:[0,"Beep!","Boop!",3,4,5,6,7,8,9,"Beep","Beep","Boop!","Won't you be my neighbor?","Beep!","Beep!","Beep!","Beep!","Beep!","Beep!","Boop!","Boop!",""Won't you be my neighbor?"]
