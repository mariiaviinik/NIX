//task1
// let admin, name;
// name = "Mariia Vynnyk";
// admin = name;
// alert(admin);

//task2
// Для переменной birthday можно использовать заглавные буквы, а для age - нет

//task3
// let name = "Ilya";
// alert( `hello ${1}` ); // hello 1
// alert( `hello ${"name"}` ); // hello name
// alert( `hello ${name}` ); // hello Ilya

//task4
// "" + 1 + 0 // 10 
// "" - 1 + 0 // -1
// true + false // 1
// 6 / "3" // 2
// "2" * "3" // 6
// 4 + 5 + "px" // 9px
// "$" + 4 + 5 // $45
// "4" - 2 // 2
// "4px" - 2 // NaN
// 7 / 0 // Infinity
// " -9 " + 5 // -95
// " -9 " - 5 // -14
// null + 1 // 1
// undefined + 1 // NaN

//task5
// let a = 1, b = 1;
// let c = ++a; // 2
// let d = b++; // 1

//task6
// let a = 2;
// let x = 1 + (a *= 2);
// a = 4, x = 5

//task7
// 5 > 4 // true
// "ананас" > "яблоко" // false
// "2" > "12" // true
// undefined == null // true
// undefined === null // false
// null == "\n0\n" // false
// null === +"\n0\n" // flase

//task8
// let name = prompt("Write your name below, please");
// alert(name);

//task9
// да, потому что "0" - строка

//task10
// let officialName =prompt("What is Is the \"official\" name for JavaScript?");
// if(officialName === "ECMAScript") { 
//     alert("Correct"); 
// } else{
//     alert("You don't know? ECMAScript!");
// }

//task11
// let number = prompt("Write a number");
// if(number > 0){
//     alert(1);
// } 
// if(number < 0){
//     alert(-1);
// }
// if(number == 0){
//     alert("0");
// }

//task12
// let result = (a + b < 4) ? 'Мало' : 'Много';

//task13
// let message = (login == 'Сотрудник') ? 'Привет':
// (login == 'Директор') ? 'Здравствуйте':
// (login == '') ? 'Нет логина' : '';

//task14
// 2

//task15
// 1

//task16
// null

//task17
// 1

//task18
// 3

//task19
// let age = prompt("Write your age");
// if(age >=14 && age <= 90) {
//     alert("in the range");
// } else{
//     alert("out of range");
// }

//task20
// let age = prompt("Write your age");
// if(!(age >=14 && age <= 90)) {
//     alert("in the range");
// } else{
//     alert("out of range");
// }
// if(age < 14 || age > 90) {
//     alert("in the range");
// } else{
//     alert("out of range");
// }

//task21
// if (-1 || 0) alert( 'first' ); // Да -1
// if (-1 && 0) alert( 'second' ); // Нет 0
// if (null || -1 && 1) alert( 'third' ); // Да 1 

//task22
// let login = prompt("Write login");
// let password;
// if (login == "admin"){
//     password = prompt("Write password");

//     if (password == "I'm boss") {
//         alert("Hello");
//     }else if(password == null){
//         alert("Canceled");
//     } else{
//         alert("Password is not correct");
//     } 
// } else if(login == null || login == ""){
//     alert("Canceled");
// } else{
//     alert("I don't know you");
// }

//task23
// if (browser == "Edge"){
//     alert( "You've got the Edge!" );
// } else if(browser == "Chrome" ||
//     browser == "Firefox" ||
//     browser == "Safari" ||
//     browser == "Opera"){
//         alert( 'Okay we support these browsers too' );
// } else{
//     alert( 'We hope that this page looks ok!' );
// }

//Task24
// let a = +prompt('a?', '');
// switch(a){
//     case 0: 
//         alert( 0 );
//         break;
//     case 1: 
//         alert( 1 );
//         break;
//     case 2:
//     case 3:
//         alert( '2,3' );
// }

//Task25
// let number = prompt("Write number");
// number = (number > 0) ? ++number : number;
// alert(number);

//Task26
// let number = prompt("Write number");
// number = (number > 0) ? ++number : number-2;
// alert(number);

//Task27
// let number = prompt("Write number");
// number = (number > 0) ? ++number :
// (number < 0) ? number-2 :
// (number == 0) ? 10 : "";
// alert(number);

//Task28
// let arr = [2, -8, 9];
// let sum = 0;
// if(arr[0] > 0){
//     sum += arr[0];
// }
// if(arr[1] > 0){
//     sum += arr[1];
// }
// if(arr[2] > 0){
//     sum += arr[2];
// }
// alert("Sum is " + sum);

//Task29
// let arr = [2, -8, 9];
// let positiveSum = 0,  negativeSum = 0;
// if(arr[0] > 0){
//     positiveSum += arr[0];
// } else{
//     negativeSum += arr[0];
// }
// if(arr[1] > 0){
//     positiveSum += arr[1];
// } else{
//     negativeSum += arr[1];
// }
// if(arr[2] > 0){
//     positiveSum += arr[2];
// } else{
//     negativeSum += arr[2];
// }
// alert("Sum of positive numbers is " + positiveSum + 
//     "\nSum of negative numbers is " + negativeSum);

//Task30
// let arr= [7, 3];
// if(arr[0] > arr[1]){
//     alert(arr[0]);
// } else{
//     alert(arr[1]);
// }

//Task31
// let arr= [7, 3];
// if(arr[0] > arr[1]){
//     alert(1);
// } else{
//     alert(2);
// }

//Task32
// let arr= [7, 3];
// if(arr[0] > arr[1]){
//     alert(arr[0] + ", " + arr[1]);
// } else{
//     alert(arr[1] + ", " + arr[0]);
// }

//Task33
// let a = 6, b = 2;
// if(b < a){
//     let value = a;
//     a = b;
//     b = value;
// }
// alert(a + ", " + b);

//TAsk34
// let a = 1, b = 5;
// if(a != b){
//     a = b = a + b;
// } else{
//     a = b = 0;
// }
// alert(a + ", " + b);

//Task35
// let a = 1, b = 5;
// if(a != b){
//     a = b = b;
// } else{
//     a = b = 0;
// }
// alert(a + ", " + b);

//Task36
// let a = 1, b = 2, c = 3;
// let min = a;
// if(min > b){
//     min = b 
// } 
// if(min > c){
//     min = c;
// }
// alert(min);

//Task37
// let a = 2, b = 5, c = 3;
// let avg = a;
// if(a > b && a < c || a > c && a < b){
//     avg = a;
// } else if(b > a && b < c || b > c && b < a){
//     avg = b;
// } else{
//     avg = c;
// }
// alert(avg);

//Task38
// let a = 3, b = 2, c = 1;
// let min = a, max = a;
// if(min > b){
//     min = b 
// } 
// if(min > c){
//     min = c;
// }
// if(max < b){
//     max = b 
// } 
// if(max < c){
//     max = c;
// }
// alert(min + ", " + max);

//Task39
// let a = 3, b = 2, c = 1;
// let min = a;
// let sumMax = a + b + c;
// if(min > b){
//     min = b 
// } 
// if(min > c){
//     min = c;
// }
// alert(sumMax - min);

//Task40
// let a = 2, b = 3, c = 3;
// if(a == b){
//     alert(3);
// }
// if(a == c){
//     alert(2);
// }
// if(c == b){
//     alert(1);
// }