var num, programa, tentativa, pontos;

var gabaritos = [[1,4,3,2,4,1,1,4,3,2,2,3,4,4,2,4,2,4,1,2,1,2,4,1,3,1,3,3,2,4],
[1,2,1,2,4,1,3,1,3,3,2,4,4,4,2,4,3,4,4,4,1,3,4,1,2,3,1,1,2,1],
[4,2,2,2,3,4,4,4,4,4,1,3,1,1,2,4,2,1,4,2,2,4,4,3,3,2,1,4,2,1],
[4,2,2,4,3,3,3,2,1,4,2,1,4,2,2,1,2,1,4,1,2,4,1,2,3,3,4,4,3,3],
[4,4,1,1,3,4,2,2,4,4,2,2,4,1,2,2,2,2,4,1,2,4,4,4,3,4,3,2,2,1]]

programa = document.querySelector("#lv")

function iniciar() {
	
	if (programa == "021")
		gabarito = gabarito021;
	else if (programa == "022")
		gabarito = gabarito022;
	else if (programa == "023")
		gabarito = gabarito023;
	else if (programa == "024")
		gabarito = gabarito024;
	else if (programa == "025")
		gabarito = gabarito025;
	else {
		window.alert("Número de Programa Inválido!!!\nDigite entre 021 e 025!!!");
		iniciar();
	}

	pontos = 0;
	num = 1;
	tentativa = 1;

	document.getElementById('visor1').value = programa + "->" + num + ": ";
	document.getElementById('visor2').value = "Tentativa " + tentativa + " de 3";
}

function jogar(resposta) {
	document.getElementById('visor1').value = programa + "->" + num + ":" + resposta;

	if (resposta == gabarito[num-1]) {
		if (tentativa == 1)
			pontos += 3; // pontos = pontos + 3
		else if (tentativa == 2)
			pontos += 2; // pontos = pontos + 2
		else if (tentativa == 3)
			pontos++; // pontos = pontos + 1

		num++;
		tentativa = 1;	

		document.getElementById('visor1').value = programa + "->" + num + ": ";
		document.getElementById('visor2').value = "Tentativa " + tentativa + " de 3";
	}
	else {
		tentativa++;
		document.getElementById('visor2').value = "Tentativa " + tentativa + " de 3";

		if (tentativa > 3) {
			num++;
			tentativa = 1;
			document.getElementById('visor1').value = programa + "->" + num + ": ";
			document.getElementById('visor2').value = "Tentativa " + tentativa + " de 3";
		}
	}
	
	if (num > 30) {
		document.getElementById('visor1').value = "***FIM***";
		document.getElementById('visor2').value = "Pontuação: " + pontos;
	}
}

programa.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        Number(programa.value) == 41
        iniciar();
    }
});