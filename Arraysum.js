
let num = [1, 2, 3, 4, 5]; //array of numbers
let sum = 0;
//tried initializing the average to 0 but ended up deleteing it as my console kept saying avg has already been declared

for(let i = 0; i <num.length; i++){ 
  sum += num[i];
} //loop that iterates over the array
                  
let avg = sum/ num.length; // define the avg
                   
  console.log ("sum:" + sum); //sum:15
  console.log ("average:" + avg); //average:3