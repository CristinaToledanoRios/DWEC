window.onload=inicio;
function inicio() {
	document.formulario.Comprobar.onclick = Comprobar;
	

}
function Comprobar {
	let cadena=document.formulario.cadena.value.toLowerCase().replace(/ /g, "");
	let vocales = "aeiou";
	let consonantes ="bcdfghjklmnñpqrstvwxyz";
	let contVoc=0;
	let contCons=0;

		for (let index=0; index < cadena.length; index++) {
			if (vocales.indexOf(cadena.CharAt(index)) !=-1)) {
				contVoc++;

			}

			if (consonantes.indexOf(cadena.CharAt(index))!=-1)) {
				contCons++;
			}

			}

		document.formulario.textVocales.value+=contVoc;
		document.formulario.textConsonantes.value+=contCons.toString();
		}
	
	
	