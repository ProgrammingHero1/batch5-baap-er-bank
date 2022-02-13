function getInput(obj)
{
    inputText = obj.value;
    return inputText;
}
function updateBalance(inputId,balanceFieldId,isAdd)
{
    const inputField = document.getElementById(inputId);
    const balanceField = document.getElementById(balanceFieldId);
    const previousBalance = parseFloat(balanceField.innerText);
    const inputAmount = parseFloat(getInput(inputField));
    if(isAdd && inputAmount>0)
    {
        balanceField.innerText = previousBalance + inputAmount;
    }else if(!isAdd && (previousBalance-inputAmount)>0)
    {
        balanceField.innerText = previousBalance - inputAmount;
    }
}
function depositAction()
{
    const inputId = 'deposit-input';
    const depositId = 'deposit-total';
    const balanceId = 'balance-total';
    const inputText = document.getElementById(inputId).value;
    const inputValue = parseFloat(inputText);
    if(!isNaN(inputValue))
    {
        updateBalance(inputId,depositId,true);
        updateBalance(inputId,balanceId,true);
    }else{alert("The input is invalid")}   
    document.getElementById(inputId).value ='';
}
function withdrawAction()
{
    const inputId = 'withdraw-input';
    const withdrawId = 'withdraw-total';
    const balanceId = 'balance-total';
    const inputText = document.getElementById(inputId).value;
    const inputValue = parseFloat(inputText);
    const currentBalance = parseFloat(document.getElementById(balanceId).innerText);
    console.log(currentBalance);
    if(!isNaN(inputValue) && inputValue>0)
    {
        if(inputValue<currentBalance){
            updateBalance(inputId,withdrawId,true);
            updateBalance(inputId,balanceId,false);
        }else{alert("You have entered more than your current balance")}   
    }else{alert("The input is invalid")}      
    document.getElementById(inputId).value =''
}