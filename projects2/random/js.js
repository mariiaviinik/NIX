const resNum = document.querySelector("#res-num");

button.addEventListener("click", () => {
    let amountVal = +amount.value;
    let minVal = +min.value;
    let maxVal = +max.value;

    if(!minVal || !maxVal || !amountVal) {
        return alert("Fill in all fields!");
    }

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
    const arr = [];

    while(arr.length != amountVal) {
        arr.push(random(minVal, maxVal));
    }

    return arr;
}