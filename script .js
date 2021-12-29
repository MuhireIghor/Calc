class Calculator{
    constructor(previousOperandTextelement,currentOperandTextelement){
        this.previousOperandTextelement = previousOperandTextelement
        this.currentOperandTextelement= currentOperandTextelememt
        this.clear()
    }
    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined

    }
    delete(){
        this.currentOperand = this.currentOperand.tostring().slice(0,-1)

    }
    appendNumber(number){
        if(number ==='.'&& this.currentOperand.includes('.'))return
        this.currentOperand = this.currentOperand.tostring()+number.tostring()

    }
    chooseOperation(operation){
        if (this.currentOperand === '') return
        if (this.previousOperand !== ''){
            this.compute()
        }
        this.operation=operation
        this.previousOpearand = this.currentOperand
        this.currentOperand = ''

    }
    compute(){
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation){
            case '+':
                computation = prev + current
                break
             case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
             case './.':
                computation = prev / current
                break
              default:
                  return  
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
 }

  getDisplayNumber(number) {
  const stringNumber = number.tostring()
  const integerDigits = parseFloat(stringNumber.split('.')[0])
  const decimalDigits = stringNumber.split('.')[1]
  let integerDisplay
  if (isNaN(integerDigits)) {
      integerDisplay = ''
  } else {
      integerDisplay = integerDigits.toLocaleString('en', {
          maximumFractionDigits: 0  })

  }
  if (decimalDigits != null) {
      return '${integerDisplay}.${decimalDigits}'
   } else {
       return integerDisplay
   }
}

    updateDisplay(){
        this.currentOperandTextelement.innerText = 
        this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) {
             this.previousOperandTextelement.innerText =
         '${this.getDisplayNumber(this.previousOperand)} $ {this.operation}'
  } else {
      this.previousOperandTextelement.innerText = ''
  }

    }
        
}






const numberButtons=document.querySelectorAll('[data-number]');
const operationsButtons=document.querySelectorAll('[data-operation]');
const cosineButton=document.querySelector('[data-cosine]');
const sineButton=document.querySelector('[data-sine]');
const exponentButton=document.querySelector('[data-exponent]');
const equalsButton=document.querySelector('[data-equals]');
const allClearButton=document.querySelector('[data-all-clear]');
const previousOperandTextElement=document.querySelector('[data-previous-operand]');
const currentOperandTextElement=document.querySelector('[data-current-operand]');
const calculator = new Calculator(previousOperandTextelement, currentOperandTextelement)

    numberButtons.forEach(button =>{
        button.addEventListener('click',() =>{
            calculator.appendNumber(button.innnerText)
            calculator.updateDisplay()
        })

    })
    operationButtons.forEach(button =>{
        button.addEventListener('click',() =>{
            calculator.chooseOperation(button.innnerText)
            calculator.updateDisplay()
        })
    })

    equalsButton.addEventListener('click', button =>{
        calculator.compute()
        calculator.updateDispaly()

    })
    allClearButton.addEventListener('click', button =>{
        calculator.clear()
        calculator.updateDispaly()

    })
    deleteButton.addEventListener('click', button =>{
        calculator.delete()
        calculator.updateDispaly()

    })

