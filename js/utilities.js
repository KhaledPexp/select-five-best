console.log('utilities');

const messi = document.getElementById('messi');
const neymer = document.getElementById('neymer');
const mbape = document.getElementById('mbape');
const vitor = document.getElementById('vitor');
const ramos = document.getElementById('ramos');
const renato = document.getElementById('renato');
const Ronaldo = document.getElementById('Ronaldo');
const Luka = document.getElementById('Luka');
const Mezut = document.getElementById('Mezut');

const playerList = [messi, neymer, mbape, vitor, ramos, renato, Ronaldo, Luka, Mezut ];

var li = 0;

// selection handling
messi.addEventListener('click', function(){
    if(li < 5){
    const selection = document.getElementById('selection');
    const player = document.createElement('li');
    player.setAttribute('value', '');
    player.innerText = 'Lionel Messi'
    selection.append(player);
    const messi = document.getElementById('messi');
    messi.setAttribute('disabled', '');
    li++;
    }
    else
        {const messi = document.getElementById('messi');
        messi.setAttribute('disabled', '');
        alert`you already have selecet 5 player`;}
})

neymer.addEventListener('click', function(){
    if(li < 5){
    const selection = document.getElementById('selection');
    const player = document.createElement('li');
    player.setAttribute('value', '');
    player.innerText = 'Neymer Jr.'
    selection.append(player);
    const neymer = document.getElementById('neymer');
    neymer.setAttribute('disabled', '');
    li++;
    }
    else
        { const neymer = document.getElementById('neymer');
        neymer.setAttribute('disabled', '');
        alert`you already have selecet 5 player`;}
})

mbape.addEventListener('click', function(){
    if(li < 5){
    const selection = document.getElementById('selection');
    const player = document.createElement('li');
    player.setAttribute('value', '');
    player.innerText = ' Kilian Mbape'
    selection.append(player);
    const mbape = document.getElementById('mbape');
    mbape.setAttribute('disabled', '');
    li++;
    }
    else
        {const mbape = document.getElementById('mbape');
        mbape.setAttribute('disabled', '');
        alert`you already have selecet 5 player`;}
})

vitor.addEventListener('click', function(){
    if(li < 5){
    const selection = document.getElementById('selection');
    const player = document.createElement('li');
    player.setAttribute('value', '');
    player.innerText = ' Vitor '
    selection.append(player);
    const vitor = document.getElementById('vitor');
    vitor.setAttribute('disabled', '');
    li++;
    }
    else
        {const vitor = document.getElementById('vitor');
        vitor.setAttribute('disabled', '');
        alert`you already have selecet 5 player`;}
})

ramos.addEventListener('click', function(){
    if(li < 5){
    const selection = document.getElementById('selection');
    const player = document.createElement('li');
    player.setAttribute('value', '');
    player.innerText = ' Ramos '
    selection.append(player);
    const ramos = document.getElementById('ramos');
    ramos.setAttribute('disabled', '');
    li++;
    }
    else
        {const ramos = document.getElementById('ramos');
        ramos.setAttribute('disabled', '');
        alert`you already have selecet 5 player`;}
})

renato.addEventListener('click', function(){
    if(li < 5){
    const selection = document.getElementById('selection');
    const player = document.createElement('li');
    player.setAttribute('value', '');
    player.innerText = ' Reneto '
    selection.append(player);
    const renato = document.getElementById('renato');
    renato.setAttribute('disabled', '');
    li++;
    }
    else
        {const renato = document.getElementById('renato');
        renato.setAttribute('disabled', '');
        alert`you already have selecet 5 player`;}
})
Ronaldo.addEventListener('click', function(){
    if(li < 5){
    const selection = document.getElementById('selection');
    const player = document.createElement('li');
    player.setAttribute('value', '');
    player.innerText = ' Ronaldo '
    selection.append(player);
    const Ronaldo = document.getElementById('Ronaldo');
    Ronaldo.setAttribute('disabled', '');
    li++;
    }
    else
        {const Ronaldo = document.getElementById('Ronaldo');
        Ronaldo.setAttribute('disabled', '');
        alert`you already have selecet 5 player`;}
})
Luka.addEventListener('click', function(){
    if(li < 5){
    const selection = document.getElementById('selection');
    const player = document.createElement('li');
    player.setAttribute('value', '');
    player.innerText = ' Luka Modric '
    selection.append(player);
    const Luka = document.getElementById('Luka');
    Luka.setAttribute('disabled', '');
    li++;
    }
    else
        {const Luka = document.getElementById('Luka');
        Luka.setAttribute('disabled', '');
        alert`you already have selecet 5 player`;}
})
Mezut.addEventListener('click', function(){
    if(li < 5){
    const selection = document.getElementById('selection');
    const player = document.createElement('li');
    player.setAttribute('value', '');
    player.innerText = 'Mezut Özil'
    selection.append(player);
    const Mezut = document.getElementById('Mezut');
    Mezut.setAttribute('disabled', '');
    li++;
    }
    else
       { const Mezut = document.getElementById('Mezut');
        Mezut.setAttribute('disabled', '');
        alert`you already have selecet 5 player`;}
})
