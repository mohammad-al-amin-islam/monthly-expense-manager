//handle calculate button
document.getElementById('caluculate-btn').addEventListener('click', function () {
    const incomeInput = getElement('income-input');
    const foodExpense = getElement('food-expense');
    const rentExpense = getElement('rent-expense');
    const colthExpense = getElement('cloth-expense');
    const totalExpenseDisplay = getElement('total-expense');
    const remainBalanceDisplay = getElement('remain-balance');

    const foodExpenseValue = parseFloat(foodExpense.value);
    const rentExpenseValue = parseFloat(rentExpense.value);
    const colthExpenseValue = parseFloat(colthExpense.value);
    const incomeInputValue = parseFloat(incomeInput.value);

    //error handling when not a number;
    if (isNaN(foodExpenseValue) || isNaN(rentExpenseValue) || isNaN(colthExpenseValue) || isNaN(incomeInputValue)) {
        alert('You can not write anything here without Number');
        return;
    }
    //error handling when number is negative;
    else if (incomeInputValue < 0 || foodExpenseValue < 0 || rentExpenseValue < 0 || colthExpenseValue < 0) {
        alert('You cannot input Negative value');
        return;
    }
    //total expenses calculation
    const totalExpense = foodExpenseValue + rentExpenseValue + colthExpenseValue;
    //validation if totalexpenses exceed income
    if (totalExpense > incomeInputValue) {
        alert('Your expenses is more than your Income');
        return;
    }
    totalExpenseDisplay.innerText = totalExpense;
    const remaingBalance = caluculateRemainingBalance(incomeInputValue, totalExpense);
    remainBalanceDisplay.innerText = remaingBalance;
});

//get element function
function getElement(id) {
    const input = document.getElementById(id);
    return input;
};

//calculating remaining balance
function caluculateRemainingBalance(amount, totalUsed) {
    const remainingBalance = parseFloat(amount) - totalUsed;
    return remainingBalance;
};

//handle save button
document.getElementById('save-button').addEventListener('click', function () {
    const saveInput = getElement('save-percentage').value;
    const saveAmounDisplay = getElement('saved-amount');
    const finalBalanceDisplay = getElement('remaining-balance');
    const incomeInput = getElement('income-input').value;

    //calculating saved balance
    const savedAmount = parseFloat(incomeInput) * (parseFloat(saveInput) / 100);
    const remainBalanceDisplayValue = getElement('remain-balance').innerText;

    //error handling when save amount crossed remain balance
    if (savedAmount > remainBalanceDisplayValue) {
        alert('You have not enough balance that you want to save');
    }
    //error handling if input will negative
    else if (savedAmount < 0) {
        alert('Your savings input cannot ne Negative');
    }
    else {
        const finalBalance = caluculateRemainingBalance(remainBalanceDisplayValue, savedAmount);
        saveAmounDisplay.innerText = savedAmount;
        finalBalanceDisplay.innerText = finalBalance;
    }
});

