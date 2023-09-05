let playerTotalCost = 0;

// geting the player cost
document.getElementById('calculate').addEventListener('click',function(){
    
    let playerCost = document.getElementById('player-cost');
    const inputValueStr = playerCost.value;
    const inputValue = parseFloat(inputValueStr);

    
     playerTotalCost = li*inputValue;
     const playerExpStr = document.getElementById('player-expences');
    playerExpStr.innerText = playerTotalCost;
    
    playerCost.value = '';

    // warning for not a valid number
    if(playerExpStr.innerText === 'NaN'){
        alert `You forgot to add a valid number!`
    }
    
})

// geting the total cost
document.getElementById('calculate-total').addEventListener('click', function(){
    
    //get manager cost input value 
    const managerCostInput = document.getElementById('manager-cost');
    const managerCostStr = managerCostInput.value;
    const managerCost = parseFloat(managerCostStr);

    // get coach cost input value
    const coachCostInput = document.getElementById('coach-cost');
    const coachCostStr = coachCostInput.value;
    const coachCost = parseFloat(coachCostStr);

    
    //calculation total cost
    const total = playerTotalCost + managerCost + coachCost;
    const totatCost = document.getElementById('total-cost');
    totatCost.innerText = total;


    // Default input 
    managerCostInput.value = '';
    coachCostInput.value = '';

    // warning for not a valid number
    if(totatCost.innerText === 'NaN'){
        alert `You forgot to add a valid number!`
    }
})