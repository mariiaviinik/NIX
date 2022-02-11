//task1
// 1
// на 3 итерации i в итоге будет равняться 0, то есть false

//task2
// let A = 1, B = 2, C = 3;
// if(A <= B && B <= C){
//     A *= 2;
//     B *= 2;
//     C *= 2;
// } else{
//     A *= -1;
//     B *= -1;
//     C *= -1;
// }
// console.log(A, B, C);

//task3
// let A = 3, B = 1, C = 2;
// if((A <= B && B <= C) || (A >= B && B >= C)){
//     A *= 2;
//     B *= 2;
//     C *= 2;
// } else{
//     A *= -1;
//     B *= -1;
//     C *= -1;
// }
// console.log(A, B, C);

//task4
// let A = 3, B = 9, C = 6;
// let dist1 = Math.abs(A - B);
// let dist2 = Math.abs(A - C);
// if(dist1 < dist2){
//     console.log(B, dist1);
// }
// if(dist1 > dist2){
//     console.log(C, dist2);
// }
// if(dist1 == dist2){
//     console.log(B, C, dist1);
// }

//task5
// let x = 3, y = 3;
// if(x == 0 && y == 0){
//     alert(0);
// } else if(x == 0 && y != 0){
//     alert(1);
// } else if(x != 0 && y == 0){
//     alert(2);
// } else{
//     alert(3);
// }

//task6
// let x = 3, y = 0;
// if(x > 0 && y > 0){
//     alert("coordinate quadrant 1");
// } else if(x < 0 && y > 0){
//     alert("coordinate quadrant 2");
// } else if(x < 0 && y < 0){
//     alert("coordinate quadrant 3");
// } else if(x > 0 && y < 0){
//     alert("coordinate quadrant 4");
// } else{
//     alert("on the coordinate axis");
// }

//task7
// let x1 = 2, y1 = 5, x2 = 2, y2 = 1, x3 = 8, y3 = 1, x4, y4;
// if (x1 == x2){
//     x4 = x3;
// }
// if (x1 == x3){
//     x4 = x2;
// }
// if (x2 == x3){
//     x4 = x1;
// }
// if (y1 == y2){
//     y4 = y3;
// }
// if (y1 == y3){
//     y4 = y2;
// }
// if (y2 == y3){
//     y4 = y1;
// }
// alert(`(${x4}, ${y4})`);

//task8
// let year = 1300;
// if(year % 4 == 0 && year % 100 == 0 && year % 400 == 0){
//     alert("leap year");
// } else {
//     alert("not a leap year");
// }


//task9
// let num = 0;
// let descriprion = "";
// if(num < 0){
//     descriprion += "negative "
// } else{
//     descriprion += "positive "
// }
// if(num % 2 == 0){
//     descriprion += "even "
// } else{
//     descriprion += "odd "
// }
// if(num == 0){
//     descriprion = "zero ";
// }
// descriprion += "number"
// alert(descriprion);

//task10
// let num = 45;
// let descriprion = "";
// if(num % 2 == 0){
//     descriprion += "even "
// } else{
//     descriprion += "odd "
// }
// if(num / 10 < 1){
//     descriprion += "single "
// } else if(num / 100 < 1){
//     descriprion += "two-digit "
// } else{
//     descriprion += "three-digit "    
// }
// descriprion += "number"
// alert(descriprion);

//task11
// 1, 2, 3, 4
// 1, 2, 3, 4, 5
// Yes, except last one

//task12
// 0, 1, 2, 3, 4
// 0, 1, 2, 3, 4
// Yes

//task13
// for(let i=2; i<11; i++){
//     if(i % 2 != 0){
//         continue;
//     }
//     alert(i);
// }


//task14
// let i = 0;
// while(i<3){
//     alert( `number ${i}!` );
//     i++;
// }

//task15
// let num;
// while(1){
//     num = +prompt("Enter a number higher than 100");
//     if(num > 100  || num ==""){
//         break;
//     }
// }

//task16
// let n = 10;
// let nums = "";
// let condition;
// for(let i=2;i<=n; i++){
//     condition = true;
//     for(let j=2; j<i; j++){
//         if(i % j == 0){
//             condition = false
//             break;
//         } 
//     }
//     if(condition) nums += i + ", ";
// }
// alert(nums);

//task17
// let num1 = +prompt("Enter first number, please");
// let num2 = +prompt("Enter second number, please");
// alert((num1+num2)/2);

//task18
// let num = +prompt("Enter number, please");
// alert(`square of number is ${num**2}`);


//task19
// let a = +prompt("Enter number, please");
// let b = +prompt("Enter number, please");
// let c = +prompt("Enter number, please");
// alert(Math.max(a, b, c) - Math.min(a, b, c));

//task20
// let a = +prompt("Enter number, please");
// if(a % 2 == 0){
//     alert("even");
// } else{
//     alert("odd");
// }

//task21
// let a = 53, num;
// let sum = a;
// if(a / 10 < 1){
//     num = 1;
// } else{
//     num = 2;
//     sum = Math.trunc(a/10) + a % 10;
// } 
// alert(num + ", " + sum);

//task22
// let num = +prompt("Enter a num");
// let condition = prompt("Enter unit of measure(cm or inch)");
// let answer;
// switch (condition){
//     case "inch": answer = num * 2.54 + " cm";
//         break;
//     case "cm": answer = num / 2.54 + " inch";
//         break;
//     default: answer = "Try again";
// }
// alert(answer);

//task23
// let aStr = prompt("Enter three-digit number");
// let a = +aStr;
// let result = "";
// if(a % 2 == 0){
//     result += "even, ";
//     result += +aStr[0] + +aStr[1] + +aStr[2];
// } else{
//     result += "odd, ";
//     result += +aStr[0] * +aStr[1] * +aStr[2];
// }
// alert(result);

//Task24
// let a = +prompt("Enter number of first side, please");
// let b = +prompt("Enter number of second side, please");
// let c = +prompt("Enter number of third side, please");

// if((a+b) > c && (a+c) > b && (c+b) > a){
//     alert("triangle can exist");
// } else{
//     alert("triangle can not exist");
// }

//Task25
// let x = 4, y = 9, r = 10, length;
// length = Math.sqrt(x**2 + y**2);
// if(r >= length){
//     alert("This point lies inside the circle");
// } else{
//     alert("This point lies outside the circle");
// }

//Task26
// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

//Task27
// саму переменную переопределить нельзя, но свойства внутри объекта менять можно
// ДА

//Task28
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// let sum = 0;
// for(let person in salaries){
//     sum += salaries[person];
// }
// alert(sum);

//Task29
// i никогда не станет 10

