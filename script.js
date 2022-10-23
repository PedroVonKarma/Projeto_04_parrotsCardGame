let qtd = prompt('Com quantas cartas quer jogar?');
while(qtd<4 || qtd>14 ||qtd%2!==0){
    alert('Quantidade inválida. O número de cartas precisar ser par, entre 4 e 14!')
    qtd = prompt('Com quantas cartas quer jogar?');
}



const arrayCompleto = [`<div class='mobile'> <div onclick="virar(this)" class="card metal">
<div class="back face"><img src="arquivos/metalparrot.gif"></div>
<div class="front face"><img src="arquivos/back.png" alt="pagaio"></div>
</div></div>`, `<div class='mobile'><div onclick="virar(this)" class="card metal">
<div class="back face"><img src="arquivos/metalparrot.gif"></div>
<div class="front face"><img src="arquivos/back.png" alt="pagaio"></div>
</div></div>`, `<div class='mobile'><div onclick="virar(this)" class="card bobros">
<div class="back face"><img src="arquivos/bobrossparrot.gif"></div>
<div class="front face"><img src="arquivos/back.png" alt="pagaio"></div>
</div></div>`, `<div class='mobile'><div onclick="virar(this)" class="card bobros">
<div class="back face"><img src="arquivos/bobrossparrot.gif"></div>
<div class="front face"><img src="arquivos/back.png" alt="pagaio"></div>
</div></div>`, `<div class='mobile'><div onclick="virar(this)" class="card explody">
<div class="back face"><img src="arquivos/explodyparrot.gif"></div>
<div class="front face"><img src="arquivos/back.png" alt="pagaio"></div>
</div></div>`, `<div class='mobile'><div onclick="virar(this)" class="card explody">
<div class="back face"><img src="arquivos/explodyparrot.gif"></div>
<div class="front face"><img src="arquivos/back.png" alt="pagaio"></div>
</div></div>`, `<div class='mobile'><div onclick="virar(this)" class="card fiesta">
<div class="back face"><img src="arquivos/fiestaparrot.gif"></div>
<div class="front face"><img src="arquivos/back.png" alt="pagaio"></div>
</div></div>`, `<div class='mobile'><div onclick="virar(this)" class="card fiesta">
<div class="back face"><img src="arquivos/fiestaparrot.gif"></div>
<div class="front face"><img src="arquivos/back.png" alt="pagaio"></div>
</div></div>`, `<div class='mobile'><div onclick="virar(this)" class="card revert">
<div class="back face"><img src="arquivos/revertitparrot.gif"></div>
<div class="front face"><img src="arquivos/back.png" alt="pagaio"></div>
</div></div>`, `<div class='mobile'><div onclick="virar(this)" class="card revert">
<div class="back face"><img src="arquivos/revertitparrot.gif"></div>
<div class="front face"><img src="arquivos/back.png" alt="pagaio"></div>
</div></div>`, `<div class='mobile'><div onclick="virar(this)" class="card triple">
<div class="back face"><img src="arquivos/tripletsparrot.gif"></div>
<div class="front face"><img src="arquivos/back.png" alt="pagaio"></div>
</div></div>`, `<div class='mobile'><div onclick="virar(this)" class="card triple">
<div class="back face"><img src="arquivos/tripletsparrot.gif"></div>
<div class="front face"><img src="arquivos/back.png" alt="pagaio"></div>
</div></div>`, `<div class='mobile'><div onclick="virar(this)" class="card uni">
<div class="back face"><img src="arquivos/unicornparrot.gif"></div>
<div class="front face"><img src="arquivos/back.png" alt="pagaio"></div>
</div></div>`, `<div class='mobile'><div onclick="virar(this)" class="card uni">
<div class="back face"><img src="arquivos/unicornparrot.gif"></div>
<div class="front face"><img src="arquivos/back.png" alt="pagaio"></div>
</div></div>`]
let arrayUsavel =[];

for(let i =0; i<qtd;i++){
    arrayUsavel.push(arrayCompleto[i]);    
}
function comparador() { 
	return Math.random() - 0.5; 
}
arrayUsavel.sort(comparador);

const nomeA = document.querySelector('.cards');
for(let j =0; j<qtd;j++){
   nomeA.innerHTML += arrayUsavel[j];    
}


let virouCarta = false;
let primeiraCarta;
let segundaCarta;
let costa;
let frente;
let scosta;
let sfrente;

function desvirar(){
    costa.classList.remove('back-flip')
    frente.classList.remove('front-flip')
    scosta.classList.remove('back-flip')
    sfrente.classList.remove('front-flip')
}
let jogadas = 0;
let acertos = 0;

function virar(carta){
    
    jogadas++;

    if(virouCarta===false){

        costa = carta.querySelector('.back')
        frente = carta.querySelector('.front')
        costa.classList.add('back-flip')
        frente.classList.add('front-flip')

        virouCarta = true;
        primeiraCarta = carta;
    } else{

        scosta = carta.querySelector('.back')
        sfrente = carta.querySelector('.front')
        scosta.classList.add('back-flip')
        sfrente.classList.add('front-flip')

        virouCarta = false;
        segundaCarta = carta;
    
        if(primeiraCarta.classList.value === segundaCarta.classList.value){
            
            primeiraCarta.onclick = null;
            segundaCarta.onclick = null;
            acertos +=2;
        } else{
            setTimeout(desvirar, 1000);
        }
        if(qtd == acertos){
            alert(`Você ganhou em ${jogadas} jogadas!`)
        }
       
    }
    
}