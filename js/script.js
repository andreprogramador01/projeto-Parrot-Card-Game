let qtdeCartas = prompt("Com quantas cartas quer jogar?");
const listaCartasViradas = [""];

let cartasViradas = 0;
while(qtdeCartas < 4 || qtdeCartas > 14 || qtdeCartas % 2 !== 0){
    qtdeCartas = prompt("Com quantas cartas quer jogar?");
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
                
for(let i=0; i<qtdeCartas;i++){
    cartas.innerHTML += `<div id="${i}"onclick="toggle(this)"class="carta">
                            <img class="frente card__face" src="media/back.png" alt="">
                            <img class="verso esconde card__face" src="media/${arrCartas[i]}" >
                        </div>`
                        ; 
}

function comparador() { 
    return Math.random() - 0.5; 
}
function toggle(carta){
    const frente = carta.querySelector('.frente');
    const verso = carta.querySelector('.verso');
    
    
    
    if(frente.classList.contains('esconde')){
        frente.classList.remove('esconde');
        verso.classList.add('esconde');
        carta.classList.toggle('verso2');
    }else{
        frente.classList.add('esconde');
        verso.classList.remove('esconde');
        carta.classList.toggle('verso2');
    }
    cartasViradas++;
    if (cartasViradas === 2){
        verificaCombinacao();
}
}
function verificaCombinacao(){
    let todosOsVersos = document.querySelectorAll('.verso');
    let IdCartaVirada1 = "";
    let IdCartaVirada2 = "";
    let imgCaminho1 = "";
    let imgCaminho2 = "";
    todosOsVersos.forEach(function(el){
        
        if(!el.parentNode.classList.contains('travado') &&  !el.classList.contains('esconde')){
            // alert(!el.parentNode.classList.contains('travado')+' $$ ' +el.parentNode.id);
            if(IdCartaVirada1 === ""){
                
                IdCartaVirada1 = el.parentNode.id;
                imgCaminho1 = el.getAttribute('src');
            }else{
                
                IdCartaVirada2 = el.parentNode.id;
                imgCaminho2 = el.getAttribute('src');
            }
        }    
        
    });
    
    if(imgCaminho1 !== imgCaminho2){
        setTimeout(desviraCartas,1000,IdCartaVirada1, IdCartaVirada2);
    }else{
        CartaVirada1 = document.getElementById(IdCartaVirada1);
        CartaVirada1.classList.add('travado');
        CartaVirada2 = document.getElementById(IdCartaVirada2);
        CartaVirada2.classList.add('travado');
        
        
    }
    cartasViradas = 0;
}
function desviraCartas(carta1,carta2){
    let verso1 = document.getElementById(carta1);
    let verso2 = document.getElementById(carta2);
    
    verso1.querySelector('.verso').classList.add('esconde');
    verso1.classList.toggle('verso2');
    verso1.querySelector('.frente').classList.remove('esconde');

    verso2.querySelector('.verso').classList.add('esconde');
    verso2.classList.toggle('verso2');
    verso2.querySelector('.frente').classList.remove('esconde');

}