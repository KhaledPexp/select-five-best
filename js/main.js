console.log('paice');


document.getElementById('calculate').addEventListener('click',function(){
    
    let playerCost = document.getElementById('player-cost');
    const inputValueStr = playerCost.value;
    console.log(inputValueStr);
    playerCost.value = '';
    
    
})