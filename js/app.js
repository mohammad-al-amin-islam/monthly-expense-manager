document.getElementById('caluculate-btn').addEventListener('click',function(){
    const foodExpense = getInput('food-expense');
    const rentExpense = getInput('rent-expense');
    const colthExpense = getInput('cloth-expense');
    const totalExpenseDisplay = getInput('total-expense');
    const remainBalanceDisplay = getInput('remain-balance');

    const totalExpense =parseFloat(foodExpense.value)+parseFloat(rentExpense.value)+parseFloat(colthExpense.value);
    totalExpenseDisplay.innerText = totalExpense;
    const remaingBalance = caluculateRemainingBalance(totalExpense);
    remainBalanceDisplay.innerText = remaingBalance;

});

function getInput(id){
    const input = document.getElementById(id);
    return input;
}

function caluculateRemainingBalance(totalUsed){
    const incomeInput = getInput('income-input').value;
    const remainingBalance = parseFloat(incomeInput) - totalUsed;
    return remainingBalance;
}