/*let qtd = prompt('Com quantas cartas quer jogar?');
while(qtd<4 || qtd>14 ||qtd%2!==0){
    alert('Quantidade inválida. O número de cartas precisar ser par, entre 4 e 14!')
    qtd = prompt('Com quantas cartas quer jogar?');
}
const listaDeCartas = document.querySelector('.cards');
for(let i =0; i<qtd;i++){
    listaDeCartas.innerHTML += ``
}

/*function virarCarta(cartita){
    cartita.classList.add('.virada')
    cartita
}*/

const cartas = document.querySelectorAll('.card');
function flipar(){
    this.classList.add('flip')
}
cartas.forEach(carta => carta.addEventListener('click', flipar))