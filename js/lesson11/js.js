//task1
function camelize(str){
    let arr = str.split("-");

    for(let i=1; i<arr.length; i++){
        arr[i]  = arr[i][0].toUpperCase() + arr[i].slice(1);
    }

    return arr.join("");
}

// console.log(camelize("list-style-image"));

//task2
function filterRange(arr, a, b){
    let filterArr = arr.filter(item => item >= a && item <= b);
    return filterArr;
}

// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert( filtered );

//task3
function filterRangeInPlace(arr, a, b){
    for(let i=0; i<arr.length; i++){
        if(a > arr[i] || arr[i] > b){
            arr.splice(i, 1);
            i--;
        }
    }
}

// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); 
// alert( arr ); 

//task4
// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);
// alert( arr ); 

//task5
function copySorted(arr){
    let copied = arr.slice();
    return copied.sort();
}

// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// alert( sorted ); 
// alert( arr );

//task6
function calculator(a, b, sign) {
    switch(sign) {
    case '+': return a+b;
    case '-': return a-b;
    case '*': return a*b;
    case '/': return a/b;
  }
  return false;
}

// let a = +prompt("Enter a");
// let sign = prompt("Enter sign");
// let b = +prompt("Enter b");

// alert(calculator(a, b, sign));

//task7
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let users = [ vasya, petya, masha ];
// let names = [], i = 0;

// for(let user of users){
//     names[i] = user.name;
//     i++;
// }

// alert( names ); 

//task8
// function sortByAge(arr){
//     arr.sort((a, b) => a.age - b.age);
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// sortByAge(arr);

// alert(arr[0].name); 
// alert(arr[1].name); 
// alert(arr[2].name); 

//task9
function getAverageAge(users){
    let sum = 0;

    users.forEach(el => {
        sum += el.age;
    });

    return sum/users.length;
}
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };
// let arr = [ vasya, petya, masha ];
// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

//task10
// function unique(arr) {
//     let uniqueArr = [];

//     for(let el of arr){
//         if(!uniqueArr.includes(el)){
//             uniqueArr.push(el);
//         }
//     }

//     return uniqueArr;
// }
// let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
// alert( unique(strings) ); // кришна, харе, :-O

//task11
function unique(arr) {
    let set = new Set();

    for(let el of arr){
        set.add(el);
    }
    
    return Array.from(set);
}

// let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
// alert( unique(values) ); // Hare,Krishna,:-O

//task12
// keys нужно конвертировать  в массив
// let keys = Array.from(map.keys());

//task13
// да
// 0
// 1

//task14
// да
// 1
// 2
// 1

//task15
function factorial(n){
    return (n != 1) ? n * factorial(n - 1) : 1;
}

// alert(factorial(3));
