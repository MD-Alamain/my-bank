// handle deposit button event
document.getElementById('deposit-btn').addEventListener('click', function(){
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = depositInput.value;
    // update deposit total
    const totalDeposit = document.getElementById('total-deposit');
    const previousDepositAmount = totalDeposit.innerText;
    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
    totalDeposit.innerText = newDepositTotal;
    // update balance
    const totalBalance = document.getElementById('total-balance');
    const previousBalanceTotal = totalBalance.innerText;
    const newTotalBalance = parseFloat(previousBalanceTotal) + parseFloat(newDepositAmount); 
    totalBalance.innerText = newTotalBalance;
    // clear deposit input field
    depositInput.value = '';

    
})
// withdraw total
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdraw = withdrawInput.value;  
    const withdrawTotal = document.getElementById('total-withdraw');
    const previousWithdrawTotal  = withdrawTotal.innerText;
    const newWithdrawTotal = parseFloat(previousWithdrawTotal) + parseFloat(newWithdraw);
    withdrawTotal.innerText = newWithdrawTotal;
    // update balance (balance er notun var nam diye o kaj korbe)
    // const accountBalanceTotal = document.getElementById('total-balance');
    // const previousBalanceTotalAccount = accountBalanceTotal.innerText;
    // const newBalanceTotal = parseFloat(previousBalanceTotalAccount) - parseFloat(newWithdraw);
    // accountBalanceTotal.innerText = newBalanceTotal; 
    const totalBalance = document.getElementById('total-balance');
    const previousBalanceTotal = totalBalance.innerText;
    const newTotalBalance = parseFloat(previousBalanceTotal) - parseFloat(newWithdraw)
    totalBalance.innerText = newTotalBalance;

    // clear withdraw input field
    withdrawInput.value = '';

})
