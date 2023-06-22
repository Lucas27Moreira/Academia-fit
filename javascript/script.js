function calcularPeso(){
	//criar referencia aos elementos manipulados pela função
    var inNome = document.getElementById('inNome');
    var rbMasculino = document.getElementById('rbMasculino');
    var rbFeminino = document.getElementById('rbFeminino');
    var inAltura = document.getElementById('inAltura');
    var outResposta = document.getElementById('outResposta');
    
    //obter o conteudo dos campos de edição da pagina
    var nome = inNome.value;
    var masculino = rbMasculino.checked;
    var feminino = rbFeminino.checked;
    var altura = Number(inAltura.value);
    
    //verificar se noe foi preenchido e sexo selecionado
    if(nome == '' || (masculino == false && feminino == false)){
    	alert('Por favor ,informe o nome e selecione o sexo ...');
        inNome.focus(); //posiciona (joga o foco) no campo de edição inNome
        return;
    }
	
    //se altura vazio(0) ou NaN; not-a-Number (um texto for informado, por exemplo)
    if(altura == 0 || isNaN(altura)){
    	alert('Por favor, informe a altura corretamente...');
        inAltura.focus();
        return;
    }
    
    //se masculino (significa se masculino == true)
    if(masculino){
    	var peso = 22 * Math.pow(altura , 2); //Math.pow eleva ao quadrado
    }else{
    	var peso = 21 * Math.pow(altura , 2);
    }
	
    //apresenta a resposta (altera o conteudo da linha outResposta)
	outResposta.innerHTML = "Nome: " + nome + '<br>' + ' Peso ideal: ' + peso.toFixed(2) + 'Kg';
}
	//cria referenca ao elemento btCalcular e registar evento associado a calcularPeso
    var btCalcular = document.getElementById('btCalcular');
    btCalcular.addEventListener('click',calcularPeso);
    
function LimparCampos(){
 	document.getElementById('inNome').value ='';
	document.getElementById('rbMasculino').checked =false;
	document.getElementById('rbFeminino').checked =false;
	document.getElementById('inAltura').value ='';
	document.getElementById('outResposta').textContent ='';
}
	var btLimpar = document.getElementById('btLimpar');
    btLimpar.addEventListener('click',LimparCampos)