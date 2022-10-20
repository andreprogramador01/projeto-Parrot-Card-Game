let qtdeCartas = prompt("Com quantas cartas quer jogar?")

while(qtdeCartas < 4 || qtdeCartas > 14 || qtdeCartas % 2 !== 0){
    qtdeCartas = prompt("Com quantas cartas quer jogar?")
}
let cartas = document.querySelector('.cartas');
cartas.innerHTML = "";
const arrCartas =[
                    'bobrossparrot.gif',
                    'bobrossparrot.gif',
                    'explodyparrot.gif',
                    'explodyparrot.gif',
                    'fiestaparrot.gif',
                    'fiestaparrot.gif',
                    'metalparrot.gif',
                    'metalparrot.gif',
                    'revertitparrot.gif',
                    'revertitparrot.gif',
                    'tripletsparrot.gif',
                    'tripletsparrot.gif',
                    'unicornparrot.gif',
                    'unicornparrot.gif,'
                ]
                for(let i=13; i>=qtdeCartas;i--){
                    arrCartas.pop();
                }
                
                arrCartas.sort(comparador);
                console.log(arrCartas);


for(let i=0; i<qtdeCartas;i++){
    cartas.innerHTML += `<div onclick="toggle(this)"class="carta">
                            <img class="frente" src="media/back.png" alt="">
                            <img class="verso esconde" src="media/${arrCartas[i]}" >
                        </div>`
                        ; 
}

function comparador() { 
    return Math.random() - 0.5; 
}
function toggle(carta){
    const frente = carta.querySelector('.frente');
    const verso = carta.querySelector('.verso');
    frente.classList.add('esconde');
    verso.classList.remove('esconde');
}