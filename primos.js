
window.onload=inicio;
function inicio() {
	document.formulario.texto.value ="";
	

	for (let i=1; i<=100; i++) {
		let cont=0;
		for (let j=1; j<=i; j++) {
			if (j%i==0) {
				cont++;

			}
		}

		if (cont==2) {
			document.formulario.texto.value += i + " | ";
		}
	}
}