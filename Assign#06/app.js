//********************Chap 21-25 *******************/


// // Task 1
// var user1 = prompt("Enter Your First Name");
// var user2 = prompt("Enter Your Last Name");
// var fullName = user1 +" " + user2;

// document.write("Your Full Name is: "+ fullName)

//Task 2

// var user = prompt("Enter Your Favorite Mobile Phone Name");
// var Name = user.length
// document.write("Your Favorite Phone Name is:   "+ user   + " Length of String: " + Name  )

//Task 3

// var user = "pakistani"
// document.write("String: " + user + "<br>" +  "Index of 'n': " + (user.indexOf("n") ) ) 

//Task 4

// var user = "Hello World";
// document.write("String: " + user + "<br>" +  "Last Index of 'L': " + user.lastIndexOf("l")  )  


//Task 5

// var user = "pakistani"
// document.write("String: " + user + "<br>" +  "Index of '3': " + (user.charAt("3") ) ) 


//Task 6

// var user1 = prompt("Enter Your First Name");
// var user2 = prompt("Enter Your Last Name");
// // var fullName = user1 +" " + user2;
// document.write("Your Full Name is: "+ fullName )


//Task 7

// var city = "Hyderabad";
// var after = city.replace("Hyderabad" , "Islamabad" )
// document.write("City: "+city + "<br>"  +"After Replacement: "+after )

//Task 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var after =  message.replaceAll("and","&");

// document.write("Before Replacement: "+message + "<br>" +"After Replacement: "+ after )

//Task 9

// var str = "472";
// var num = Number(str);

// document.write("String Value: " + str + "<br>"+ 
// "String Type: "+ typeof str + "<br>" +
// "Number Value: "+ num + "<br>"+ 
// "Number Type: "+ typeof num + "<br>" )

//Task 10

// var user = prompt("Enter a Something");
// document.write("User Input: "+ user + "<br>" + "UpperCase: "+ user.toUpperCase())

//Task 11

// var user = prompt("Enter a Something");
// document.write("User Input: "+ user + "<br>" + "Title Case: "+ user.toLocaleUpperCase())


//Task 12

// var num = +prompt("Enter a Something");

// // var num = 472;

// var str = num.toString();

// document.write("String Value: " + num + "<br>"+ 
// "String Type: "+ typeof num + "<br>" +
// "Number Value: "+ str + "<br>"+ 
// "Number Type: "+ typeof str + "<br>" )


//Task 13
// CHATGPT CODE

// // Regular expression to match special characters @ and ]
// const specialCharsRegex = /[@\]\!\,\.]/;

// // Prompt user for username
// let username = prompt("Please enter your username:");

// // Check if username contains special characters
// while (specialCharsRegex.test(username)) {
//   alert("Invalid username! Please enter a username without @ or ]");
//   username = prompt("Please enter your username:");
// }

// // Print the valid username
// alert("Your username is: " + username);


//Task 14
//**********************  SEARCHING PROGRAM   ****************/


// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];

// const userInput = prompt("Enter an item to search for:");

// // Check if the item is in the array (case-insensitive)
// const found = arr.some(item => item.toLowerCase() === userInput.toLowerCase());

// if (found) {
//   alert(`The item "${userInput}" was found in the list!`);
// } else {
//   alert(`The item "${userInput}" was not found in the list.`);
// }


// ******************// Other Code  *****************

 // var foodItems = [  "coke", "apple pie", "pie", "cookie", "chips", "patties", "Burger", "zinger" , "Roll", "kabab" ];
     
//       var search = prompt("Enter food name");
      
//       var flag = false;
      
//       for (var i = 0; i < foodItems.length; i++) {
//         if (search === foodItems[i]) {
//           document.write(
//             "<h1>" + (i + 1) + ")" + foodItems[i] + " is available" + "</h1>"
//           );
//           flag = true;
//           break;
//         }
//       }
      
//       if(flag === false){
//           document.write("<h1>" + search + " is not available" + "</h1>");
//       }


//Task 15

//************************  PASSWORD REGIX  *****************/

// const passwordRegex = /^(?![0-9])[a-zA-Z0-9]{6,}$/;

// let password = prompt("Please enter your password:");

// while (!passwordRegex.test(password)) {
//   alert("Invalid password! Please enter a password that contains alphabets and numbers, is at least 6 characters long, and does not start with a number.");
//   password = prompt("Please enter your password:");
// }


// alert("Your password is: " + password);


//Task 16

// var name = "University of Karachi";
// var uni = name.split('');
// console.log(uni)



// Task 17
// var name = "Pakistan";
// var user = name.charAt(7)
// console.log(user)

// Task 18

// var str = "the quick the fox jumps the over the lazy dog the";
// var word = "the";
// var count = 0;

// for(var i = 0; i < str.length; i++){
//     if(str.slice(i, i + word.length).toLowerCase() === word){
//         count++
//     }
// }

// console.log(count)

// var str = "the quick";

// console.log(str.slice(4,9));


//Extra Code
// console.log(str.split("the").join("ghous"));
// var count = 0;

// for (var i = 0; i < str.length; i++) {
//   if(str.slice(i, i + 3) === "the"){
//     count++
//   }
// }

// console.log(count)