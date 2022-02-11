//task1
function isEmpty(obj){
    for(var key in obj)
    {
        return false;
    }
    return true;
}

//task2
function multiplyNumeric(obj){
    for(var key in obj)
    {
        if(typeof(obj[key]) == "number"){
            obj[key] *= 2;
        }
    }
}

//task3
function readNumber(){
    let num;      
    do {
        num = prompt("Enter numver");
    } while ( isNaN(num) );
    if (num === null || num === '') return null;
    return +num;
}
// readNumber();

//task4
function random(min, max){
    let num = Math.random() * (max - min) + min;
    return num;
}
// alert( random(1, 5) );

//task5
function randomInteger(min, max){
    let num = Math.random() * (max - min) + min + 0.5;
    return Math.trunc(num);
}
// alert( randomInteger(1, 5) );

//task6
function ucFirst(str){
    str = str[0].toUpperCase() + str.slice(1);
    return str;
}
// alert(ucFirst("hello"));

//task7
function checkSpam(str){
    newStr = str.toLowerCase();
    return newStr.includes("viagra") || newStr.includes("xxx");
}
// alert(checkSpam("buy ViAgRA now"));

//task8
function truncate(str, maxlength){
    if(str.length > maxlength){
        let shortStr = str.slice(0, maxlength);
        return shortStr + ("...");
    }
    return str;
}
// alert(truncate("Вот, что мне хотелось бы сказать", 20));

//task9
function extractCurrencyValue(str){
    return parseInt(str.slice(1, str.length));
}
// alert(extractCurrencyValue("$120"));

//task10
function sumInput(){
    let arr = [], sum = 0;
    for(let i=0; ; i++){
        let num = prompt("Enter number");
        if(isNaN(num) || num === null || num === ''){
            break;
        }
        arr[i] = +num;
    }
    for (let el of arr){
        sum += el;
    }
    return sum;
}
// alert(sumInput());

//task12
// нет
// нет

//task13
// function checkAge(age) {
//     let res  = (age > 18) ? true : confirm("Родители разрешили?");
//     return res;
// }
function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}
// alert(checkAge(5));

//task14
function min(a,b){
    return a < b ? a : b;
}
// alert(min(2, 5));

//task15
function pow(x,n){
    if(n > 0 && n%1 == 0){
        return x**n;
    }
    return alert("Not correct power");
}

// let x = prompt("Enter number", '');
// let n = prompt("Enter power", '');

// alert(pow(x, n));


//task16
const ask = (question, yes, no) => { return confirm(question) ? yes() : no(); }
// ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
// );

//task17
let income = 3333;
let price = 8000;
let costs = 1750;

function calc(income, price, costs){
    let clearIncome = income - costs;
    let res = (price - income) / clearIncome;
    return Math.round(res) + " months";
}
// alert(calc(income, price, costs));

//task18
// let arr = [], sum = 0;
// for(let i=0; i<10; i++){
//     arr[i] = +prompt("Enter number");
// }
// arr.forEach((num) => { 
//     if(num < 0) sum += num;
//     return sum;
// });
// alert(sum);

//task19
// 4

//task20
// let arr = ["Jazz", "Blues"];
// arr.push("Rock'n'roll");
// arr.splice(arr.length/2, 1, "Classic");
// let firstDeleted = arr.shift();
// console.log(firstDeleted);
// arr.unshift("Rap", "Reggae");

//task21 
// a, b, function() {console.log( `${this}` );}

