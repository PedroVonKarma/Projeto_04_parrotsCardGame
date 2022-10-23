let qtd = prompt('Com quantas cartas quer jogar?');
while(qtd<4 || qtd>14 ||qtd%2!==0){
    alert('Quantidade inválida. O número de cartas precisar ser par, entre 4 e 14!')
    qtd = prompt('Com quantas cartas quer jogar?');
}

const arrayCompleto = [`<div onclick="virar(this)" class="card">
<div class="back face"><img src="arquivos/metalparrot.gif"></div>
<div class="front face"><img src="arquivos/back.png" alt="pagaio"></div>
</div>`, `<div onclick="virar(this)" class="card">
<div class="back face"><img src="arquivos/metalparrot.gif"></div>
<div class="front face"><img src="arquivos/back.png" alt="pagaio"></div>
</div>`, `<div onclick="virar(this)" class="card">
<div class="back face"><img src="arquivos/bobrossparrot.gif"></div>
<div class="front face"><img src="arquivos/back.png" alt="pagaio"></div>
</div>`, `<div onclick="virar(this)" class="card">
<div class="back face"><img src="arquivos/bobrossparrot.gif"></div>
<div class="front face"><img src="arquivos/back.png" alt="pagaio"></div>
</div>`, `<div onclick="virar(this)" class="card">
<div class="back face"><img src="arquivos/explodyparrot.gif"></div>
<div class="front face"><img src="arquivos/back.png" alt="pagaio"></div>
</div>`, `<div onclick="virar(this)" class="card">
<div class="back face"><img src="arquivos/explodyparrot.gif"></div>
<div class="front face"><img src="arquivos/back.png" alt="pagaio"></div>
</div>`, `<div onclick="virar(this)" class="card">
<div class="back face"><img src="arquivos/fiestaparrot.gif"></div>
<div class="front face"><img src="arquivos/back.png" alt="pagaio"></div>
</div>`, `<div onclick="virar(this)" class="card">
<div class="back face"><img src="arquivos/fiestaparrot.gif"></div>
<div class="front face"><img src="arquivos/back.png" alt="pagaio"></div>
</div>`, `<div onclick="virar(this)" class="card">
<div class="back face"><img src="arquivos/revertitparrot.gif"></div>
<div class="front face"><img src="arquivos/back.png" alt="pagaio"></div>
</div>`, `<div onclick="virar(this)" class="card">
<div class="back face"><img src="arquivos/revertitparrot.gif"></div>
<div class="front face"><img src="arquivos/back.png" alt="pagaio"></div>
</div>`, `<div onclick="virar(this)" class="card">
<div class="back face"><img src="arquivos/tripletsparrot.gif"></div>
<div class="front face"><img src="arquivos/back.png" alt="pagaio"></div>
</div>`, `<div onclick="virar(this)" class="card">
<div class="back face"><img src="arquivos/tripletsparrot.gif"></div>
<div class="front face"><img src="arquivos/back.png" alt="pagaio"></div>
</div>`, `<div onclick="virar(this)" class="card">
<div class="back face"><img src="arquivos/unicornparrot.gif"></div>
<div class="front face"><img src="arquivos/back.png" alt="pagaio"></div>
</div>`, `<div onclick="virar(this)" class="card">
<div class="back face"><img src="arquivos/unicornparrot.gif"></div>
<div class="front face"><img src="arquivos/back.png" alt="pagaio"></div>
</div>`]
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




function virar(carta){
    const costa = carta.querySelector('.back')
    const frente = carta.querySelector('.front')
    costa.classList.add('back-flip')
    frente.classList.add('front-flip')
}