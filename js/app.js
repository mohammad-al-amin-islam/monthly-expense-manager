//handle calculate button
document.getElementById('caluculate-btn').addEventListener('click', function () {
    const incomeInput = getElement('income-input').value;
    const foodExpense = getElement('food-expense');
    const rentExpense = getElement('rent-expense');
    const colthExpense = getElement('cloth-expense');
    const totalExpenseDisplay = getElement('total-expense');
    const remainBalanceDisplay = getElement('remain-balance');

    //total expenses calculation
    const totalExpense = parseFloat(foodExpense.value) + parseFloat(rentExpense.value) + parseFloat(colthExpense.value);

    totalExpenseDisplay.innerText = totalExpense;
    const remaingBalance = caluculateRemainingBalance(incomeInput,totalExpense);
    remainBalanceDisplay.innerText = remaingBalance;

});

//get element function
function getElement(id) {
    const input = document.getElementById(id);
    return input;
}

//calculating remaining balance
function caluculateRemainingBalance(amount,totalUsed) {
    const remainingBalance = parseFloat(amount) - totalUsed;
    return remainingBalance;
}

//handle save button
document.getElementById('save-button').addEventListener('click',function(){
    const saveInput = getElement('save-percentage').value;
    const saveAmounDisplay = getElement('saved-amount');
    const finalBalanceDisplay = getElement('remaining-balance');
    const incomeInput = getElement('income-input').value;

    //calculating saved balance
    const savedAmount = parseFloat(incomeInput)* (parseFloat(saveInput)/100);
    
    const remainBalanceDisplayValue = getElement('remain-balance').innerText;
    if(savedAmount>remainBalanceDisplayValue){
        alert('You have not enough balance to save that you want');
    }
    else if(savedAmount<0){
        alert('Please enter correct value');
    }
    else{
        const finalBalance = caluculateRemainingBalance(remainBalanceDisplayValue,savedAmount);
        saveAmounDisplay.innerText = savedAmount;
        finalBalanceDisplay.innerText = finalBalance;
    }
    
})

