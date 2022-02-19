 function checkYear (year) 
 {
     if (year % 4 ==0 )
     {
         if (year % 400 ==  0 || year % 100 == 0)
         {
             return true;
         }
         else
         {
             return false;
         }
     }
     else {
         return false;
     }
 }
 userInput = prompt("Enter the year you wish to test:")
 if (checkYear(userInput))
 {
     console.log(`${userInput} is a leap year`)
 }
 else {
    console.log(`${userInput} is not a leap year`)
 }