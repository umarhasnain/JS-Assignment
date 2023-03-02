//*************Chap # 05 *************/

//Task 1
// var user1 = +prompt("Enter No 1");
// var user2 = +prompt("Enter No 2");
// var result = user1 + user2
// document.write("The sum of "+ user1 + " and " + user2 +" is "+ result)


//Task 2
//Substraction(-)
// var user1 = +prompt("Enter No 1");
// var user2 = +prompt("Enter No 2");
// var result = user1 - user2
// document.write("The Substraction of "+ user1 + " and " + user2 +" is "+ result)

//Multiplication
// var user1 = +prompt("Enter No 1");
// var user2 = +prompt("Enter No 2");
// var result = user1 * user2
// document.write("The Substraction of "+ user1 + " and " + user2 +" is "+ result)

// //Division
// var user1 = +prompt("Enter No 1");
// var user2 = +prompt("Enter No 2");
// var result = user1 / user2
// document.write("The Division of "+ user1 + " and " + user2 +" is "+ result)




//Task 2
// var num;
// document.write("value after variable declaration " + num);

// var num = 5
// document.write("initial value " + num +"<br>");

// //(C)

// var num = 5 + 1
// document.write("Value After increment is " + num +"<br>");
// //(D)

// var num = 5 + 1 + 7
// document.write("Value After addition is " + num +"<br>");

// //(i,j)
// var num = 5 + 1 + 7 -1
// document.write("Value After decrement is " + num +"<br>");

// //(k)

// var num = 12 / 3
// document.write("The Remainder " + num);


//Task 3

// var num = 600;
// var total  = 5 * num ;
// document.write("Total cost to buy 5 Tickets to a movie is "+ total +"PKR" )


//Task 4

// var user = prompt("Enter Table No");
// document.write(user +'x' + 1 + "=" + user * 1 + "<br> ")
// document.write(user +'x' + 2 + "=" + user * 2 + "<br> ")
// document.write(user +'x' + 3 + "=" + user * 3 + "<br> ")
// document.write(user +'x' + 4 + "=" + user * 4 + "<br> ")
// document.write(user +'x' + 5 + "=" + user * 5 + "<br> ")
// document.write(user +'x' + 6 + "=" + user * 6 + "<br> ")
// document.write(user +'x' + 7 + "=" + user * 7 + "<br> ")
// document.write(user +'x' + 8 + "=" + user * 8 + "<br> ")
// document.write(user +'x' + 9 + "=" + user * 9 + "<br> ")
// document.write(user +'x' + 10 + "=" + user * 10 + "<br>")

// Loop Condition
// for(var i = 1; i <= 10; i++){
//     document.write('2x'+ i + "=" + 2 * i  + "<br>")
// }


//Task 5

// // Temperature change to Farenheit Given in Centigrade
// var user_c = +prompt("Enter Temperature In Centigrade To Change Fahrenheit");
// var tem_c =   1.8 * user_c + 32


// // Assignment Formula
// // var tem_c = (user_c -32)* 5 / 9;

// document.write(user_c + "°C is "+ tem_c+"°F" + "</br>")



// // Temperature change to Centigrade Given in Farenheit
// var user_f = +prompt("Enter Temperature In Fahrenheit To Change In Centigrade");

// var tem_f = (user_f - 32) / 1.8  ;

// // Assignment Formula
// // var tem_f = (user_f * 9 / 5 ) + 32

// document.write(user_f + "°F is "+ tem_f +"°C")



//Task 7

// var price1 = 650;
// var quantity1 = 3;
// var result1 = 650 * 3;
// // 1950
// console.log(result1)

// var price2 = 100;
// var quantity2 = 7;
// var result2 = 100 * 7
// // 700
// console.log(result2)

// var shipping_charges = 100;


// document.write("Price of item 1 is " + price1 + "<br>" + "Quantity of item 1 is " + quantity1
// + "<br>" + "Price of item 2 is " + price2 +"<br>" + "Quantity of item 2 is " + quantity2
//  + "<br>" +  "Shipping Charges " + shipping_charges + "<br>" 
// )

// var final_result =  result1 + result2 + shipping_charges;

// document.write("Total Cost Of Your Order is " + final_result)


//Task 8
// var total_marks = prompt("Enter Total Marks");
// var obtained_marks = prompt("Enter Obtained Marks");

// var percentage = (obtained_marks / total_marks ) * 100;

// document.write("Total Marks of: "+ total_marks + "<br>" + "Marks Obtained: "+ 
//  obtained_marks + "<br>" + "Percentage: "+ percentage
// )


//Task 9
//******************** Currency Converter ************************/
// var us_dollers = 10;
// var sudi_rayal = 25;

// var SR = 69.84;
// var us = 262.09;

// var result1 = us * us_dollers;
// var result2 = SR * sudi_rayal;
// var final_result = result1 + result2;

// document.write("Total Currency in PKR: " + final_result)

//Task 10
// var num = (5 * 10) / 2 ;
// document.write("The Sum Of All Calculation: "+ num )


//Task 11
//******************* Age Calculator ************** */

// var current_year = +prompt("Enter Your Current Year");
// var Birth_Year = +prompt("Enter Your Birth Year");

// var Age = current_year - Birth_Year;

// document.write("Your Age is: "+ Age )


//Task 12
// var radius = 20;

// var pie = 3.142 * 2;
// console.log(pie)

// var circumference =( pie ) * radius 
// console.log(circumference)

// var area = ( radius * radius) * 3.142 ;
// console.log(area)

// document.write("Radius of a circle: " + radius + "<br>");
// document.write("The Circumfarence is: " + circumference + "<br>");
// document.write("The Area is: " + area);


//Task 13

// var snacks = "chocolate chips";
// var current_age = 15;
// var max_age = 65;
// var age = max_age - current_age;
// var total_snacks = 3;
// var snacks_use = age * total_snacks;

// document.write("Favourite Snaks: "+snacks+ "<br>" +"Current Age: "+current_age + "<br>" + 
// "Estimated Maximum Age: "+ max_age + "<br>" + "Amount Of Snacks Per Day: "+total_snacks +
//  "<br>" + "You will need " + snacks_use + " " + snacks + " to last you until the ripe old age of "+ max_age )


//*********************Chapter 6-9 *******************************/

//Task 1
// var name="Result: <br> The value of a is: 10 <br> ----------------------------";

// document.write("<h3>"+name+"</h3>")

// var name="The Value of ++a is: 11  <br> Now the value of a is:11";


//  var name="The Value of a++ is: 11  <br> Now the value of a is:12";
//  document.write("<h3>"+name+"</h3>")


//  var name="The Value of --a is: 11  <br> Now the value of a is:11";
//  document.write("<h3>"+name+"</h3>")


//  var name="The Value of a-- is: 11  <br> Now the value of a is:10";
//  document.write("<h3>"+name+"</h3>")


//Task 2

