//handle calculate button
document.getElementById('caluculate-btn').addEventListener('click', function () {
    const incomeInput = getElement('income-input').value;
    const foodExpense = getElement('food-expense');
    const rentExpense = getElement('rent-expense');
    const colthExpense = getElement('cloth-expense');
    const totalExpenseDisplay = getElement('total-expense');
    const remainBalanceDisplay = getElement('remain-balance');

    const totalExpense = parseFloat(foodExpense.value) + parseFloat(rentExpense.value) + parseFloat(colthExpense.value);
    totalExpenseDisplay.innerText = totalExpense;
    const remaingBalance = caluculateRemainingBalance(incomeInput,totalExpense);
    remainBalanceDisplay.innerText = remaingBalance;

});

function getElement(id) {
    const input = document.getElementById(id);
    return input;
}

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

    const savedAmount = parseFloat(incomeInput)* (parseFloat(saveInput)/100);
    saveAmounDisplay.innerText = savedAmount;

    const remainBalanceDisplayValue = getElement('remain-balance').innerText;
    const finalBalance = caluculateRemainingBalance(remainBalanceDisplayValue,savedAmount);

    finalBalanceDisplay.innerText = finalBalance;
})

