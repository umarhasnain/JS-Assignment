// ****************   //Chapter 14-16 *****************

//Task1
// var arr = new array();

//Task2
// var arr = [];

//Task 3
// var str = ["Khi","Lahore","Isl"];

//Task 4
// var num = [1,2,3,4,5];

//Task 5
// var boll = [true,false];

//Task 6
// var arr = ["Khi", 12,true];


// Task 7
// var arr = ["SSC","HSC","BSC","BS","BCOM","MSC","M.PHILL","PHD"];

// document.write("<h1>"+ arr[0] + "</h1>")
// document.write("<h1>"+ arr[1] + "</h1>")
// document.write("<h1>"+ arr[2] + "</h1>")
// document.write("<h1>"+ arr[3] + "</h1>")
// document.write("<h1>"+ arr[4] + "</h1>")
// document.write("<h1>"+ arr[5] + "</h1>")
// document.write("<h1>"+ arr[6] + "</h1>")
// document.write("<h1>"+ arr[7] + "</h1>")


//Task 8

// var stdName = ["Umar","Hasnain","Ali"];
// var score = ["200","300","400"] ;

// document.write("Score of "+ stdName[0]+ " is " + score[0] +"</br>" ) 
// document.write("Score of "+ stdName[1]+ " is " + score[1]+"</br>")
// document.write("Score of "+ stdName[2]+ " is " + score[2]+"</br>")

//Task 9

// var arr = ["Red" , "Green" ,"Yellow"];
// var user = prompt("In which colour you wants to add in the array");
// var newUser = user
// //(a)
// // arr.unshift("White","Blue")
// arr.unshift(newUser)

// document.write(arr)

// (b)

// var arr = ["Red" , "Green" ,"Yellow"];
// var user = prompt("In which colour you wants to add in the array");
// var newUser = user

// arr.push(newUser)
// document.write(arr)

//(C)
// var arr = ["Red" , "Green" ,"Yellow"];
// arr.unshift("Gray","Pink");

// document.write(arr)

//(d)
// var arr = ["Red" , "Green" ,"Yellow"];
// arr.shift(arr);

// document.write(arr)

//(e)
// var arr = ["Red" , "Green" ,"Yellow"];
// arr.pop(arr)

// document.write(arr)

//(f)
// var arr = ["Red" , "Green" ,"Yellow"];
// var user = prompt("In which colour you wants to add in the array");
// var newUser = user

// arr.splice(2,0, newUser)
// document.write(arr)

//(g)

// var arr = ["Red" , "Green" ,"Yellow","Pink","Brown","Blue"];
// var user = +prompt("In which index no you wants to remove in the array");
// var newUser = user

// arr.splice(2,newUser)
// document.write(arr)


        //Task 10

// var arr = [320,230,480,120];
// document.write("Scores of Student " + arr + "<br>")

// var arr = [320,230,480,120].sort()
// document.write("Ordered Scores of Student " + arr)

        //Task 11

// var arr = ["karachi","hederabad","lahore","multan","islamabad"];
// var user = prompt("Select index no to select city");
// var userSecond = prompt("Select  Second index no to select city");

// document.write(arr[user] + " " + arr[userSecond])

        //Task 12

// var arr = ["This", "is", "my","cat"];
// // arr.join(",")
// document.write(arr.join(" "))

//Task 13
// var arr = [];
// arr.push("keyboard","mouse","printer","monitar");
// document.write(arr[0]+ "<br>")
// document.write(arr[1]+ "<br>")
// document.write(arr[2]+ "<br>")
// document.write(arr[3]+ "<br>")

//Task 14

// var arr = [];
// arr.push("keyboard","mouse","printer","monitar");
// document.write(arr[3]+ "<br>")
// document.write(arr[2]+ "<br>")
// document.write(arr[1]+ "<br>")
// document.write(arr[0]+ "<br>")

//Task 15

// var arr = ["Apple","Samsung", "Motorola", "Nokia", "Sony" , "Haier"];


// ****************** Chap # 17-20******************
// Task 1
// var arr = [std1 , std2 , std3]

//Task 2
// var arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1] ]

// document.write("<h1>"+ arr[0].join(" ") +"</h1>")
// document.write("<h1>"+ arr[1].join(" ") +"</h1>")
// document.write("<h1>"+ arr[2].join(" ") +"</h1>")

//Task 3

// for(var i = 0; i <= 10; i++){
//         document.write("<li>" + i )
// }

//Task 4 
// var user = prompt("Enter a number to show its multiplicatio table");
// var tblt = prompt("Enter length multiplication table")

// for(var i = 0; i <= tblt; i++){
// document.write(user + 'x' + i + "=" + user*i +"</br>" )
// }

//Task 5

// var arr = ["apple","banana","mango","orange","strawbery"];

// for(var i = 0; i < arr.length; i++){
// document.write("</br>"+ arr[i])
// }

//Task 6
// (a)//
// for(var i =0; i<=15; i++)
// { 
//         document.write(i +"<br>")        
// }

// (b)
// for(var i = 10; i >= 1; i--){
//         document.write(  i +"<br>")
// }

//(c)
// for (var i = 0; i <= 20; i += 2) {
//         document.write(i + "<br>");
//       }

//(d)
// for (var i = 1; i <= 19; i += 2) {
//         document.write(i + "<br>");
//       }

//(e)
// for (let i = 1; i <= 10; i++) {
//        document.write(i * 2 + "k" + "<br>");
//       }

//Task 7

// var foodItems = [  "cake", "apple pie", "pie", "cookie", "chips", "patties", "Burger", "zinger" , "Roll", "kabab" ];
     
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


//Task 8

// var arr = [24,53,78,91,12,118];
// var max = 0;
// for(var i=0; i<arr.length; i++){
//         if(max < arr[i]){
//                 max=arr[i];
//         }
// }

// document.write(max)



//Task 9
// var arr = [24,53,78,91,12,118];
// var min = 0;
// for(var i=0; i < arr.length; i++){
//         if(min < arr[i]){
//                 min =arr[i];
//         }
// }

// document.write(min)


// COPY

// const A = [24,8, 53, 78, 91, 12,9];

// // Initialize the smallest number as the first element in the array
// let smallest = A[0];

// // Loop through the array and compare each element with the current smallest number
// for (let i = 1; i < A.length; i++) {
//   if (A[i] < smallest) {
//     smallest = A[i];
//   }
// }


// document.write(`The smallest number in the array is: ${smallest}`);

// //Task 10

// for (let i = 1; i <= 20; i++) {
//        document.write(i * 5+ "<br>");
//       }