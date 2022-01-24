const numBtns = document.querySelectorAll("[data-num]");
const operationBtns = document.querySelectorAll("[data-operation]");
const funcBtns = document.querySelectorAll("[data-func]");

class Calculator {
    constructor(currentOperandTextElement) {
      this.currentOperandTextElement = currentOperandTextElement;
      this.clear()
    }

    clear() {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = undefined;
        this.func = undefined;
    }
    
    appendNumber(number) {
        if (number === "." && this.currentOperand.includes(".")) return ;
        switch(number){
            case "pi":
                number = Math.PI;
                break;
            case "e":
                number = Math.E;
                break;
            default:
                break;
        }
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }
    
    chooseOperation(operation) {
        if (this.currentOperand === "") {
            if(this.operation != null && this.previousOperand !== ""){
                this.operation = operation;
            } else{
                return ;
            }
        }

        if (this.previousOperand !== "") {
            this.compute();
        }     

        this.operation = operation;
    }
    
    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return ;
        switch (this.operation) {
            case "+":
                computation = prev + current;
                break;
            case "-":
                computation = prev - current;
                break;
            case "*":
                computation = prev * current;
                break;
            case "/":
                computation = prev / current;
                break;
            case "^":
                computation = prev ** current;
                break;
            default:
                return this.operation = operation; 
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = "";
    }

    chooseFunc(func) {
        if (this.currentOperand === "" || this.operation) return ;
        this.func = func;
        this.funcCompute()
    }

    funcCompute(){
        let funResult;
        const current = parseFloat(this.currentOperand);
        if (isNaN(current)) return ;
        switch (this.func) {
            case "sin":
                funResult = Math.sin(current);
                break;
            case "cos":
                funResult = Math.cos(current);
                break;
            case "tg":
                funResult = Math.tan(current);
                break;
            case "ctg":
                funResult = 1 / Math.tan(current);
                break;
            case "√":
                funResult = Math.sqrt(current);
                break;
            case "Rand":
                funResult = Math.round(current*100)/100;
                break;
            default:
                return ; 
        }
        this.currentOperand = funResult;
        this.func = undefined;
    }
    
    updateDisplay() {
        if(this.func){
            this.currentOperandTextElement.value = this.currentOperand;
        }
        if (this.operation != null) {
            if(this.previousOperand){
                this.currentOperandTextElement.value =
                 `${this.previousOperand} ${this.operation} ${this.currentOperand}`;
            } else{
                this.previousOperand = this.currentOperand;
                this.currentOperand = "";
                this.currentOperandTextElement.value =
                  `${this.previousOperand} ${this.operation}`;
            }
        } else {
            this.currentOperandTextElement.value = this.currentOperand;
        }
    }
}

const calculator = new Calculator(current);
  
numBtns.forEach(button => {
    button.addEventListener("click", () => {
      calculator.appendNumber(button.value);
      calculator.updateDisplay();
    })
});

operationBtns.forEach(button => {
    button.addEventListener("click", () => {
      calculator.chooseOperation(button.value);
      calculator.updateDisplay();
    })
})

funcBtns.forEach(button => {
    button.addEventListener("click", () => {
      calculator.chooseFunc(button.value);
      calculator.updateDisplay();
    })
})

equal.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})

clear.addEventListener("click", button => {
    calculator.clear();
    calculator.updateDisplay();
})

const opts = options.querySelectorAll("div");
const calc = document.body.querySelector(".calculator");
const expandBtn = document.querySelectorAll(".hidden");

opts.forEach(opt =>{
    opt.addEventListener("click", () => {
        opts.forEach(opt => opt.classList.toggle("bottom-line"));
        calc.classList.toggle("expanded");
        expandBtn.forEach(btn => btn.classList.toggle("hidden"));
    });
});