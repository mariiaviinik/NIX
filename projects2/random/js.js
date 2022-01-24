const resNum = document.querySelector("#res-num");
let checkBox = document.querySelector("#unique");

button.addEventListener("click", () => {
    let amountVal = +amount.value;
    let minVal = +min.value;
    let maxVal = +max.value;

    if(!minVal || !maxVal || !amountVal) 
        return alert("Fill in all fields!");

    if(maxVal < minVal)  
        return alert("Min number can not be bigger than Max number");

    if(checkBox.checked && (maxVal - minVal + 1) < amountVal) 
        return alert("Can not make unique collection");

    let nums = generateNums(amountVal, minVal, maxVal);

    let str = "All numbers:"
    nums.forEach(val => str  += " " + val + ",");
    result.innerText = str.slice(0, -1);

    let i = 0;
    setInterval(() => {
        for(i; i<nums.length;){
            resNum.innerText = nums[i];
            i++;
            break;
        }
    }, 1000);
});

function random(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.trunc(Math.random() * (max - min + 1) + min);
}

function generateNums(amountVal, minVal, maxVal){
    let collection = []; 

    if(checkBox.checked){
        collection = new Set();
        
        while(collection.size != amountVal) {
            collection.add(random(minVal, maxVal));
            console.log(collection.length, amountVal);
        }

    } else{
        while(collection.length != amountVal) {
            collection.push(random(minVal, maxVal));
        }
    }

    return [...collection];
}