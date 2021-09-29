window.onload=inicio;
function inicio() {
	document.formulario.texto.value ="";
	
let num1=1;
var num2=0;
var primo=true;
var cont=1;

	while(cont<=100){
		while (num2 < num1){
			if (num1 % num2 == 0 && num2!=1 && num2!=num1){
				primo=false;
		}
		num2+=1;
		}
		if(primo==true){
			document.formulario.texto.value += num2.toString() + " | ";
			cont+=1;
		}
		else {
			primo=true;
		}
		num1+=1;
		num2=0;
		
	}
	return null;
}

		
