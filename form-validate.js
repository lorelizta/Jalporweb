window.onload = iniciar;

function iniciar() {
	document.getElementById("enviar").addEventListener("click", validar);

	/** Limnpiar errores cuando se van modificando los inputs del formulario */
	let inputs = document.querySelectorAll('input[type="text"],textarea'); //Nodelist 
		inputs.forEach(function (elemento, posicion) {
			elemento.addEventListener("keyup", limpiarError)
		});

	let selectCheckbox = document.querySelectorAll('input[type="checkbox"],select'); //Nodelist 
			selectCheckbox.forEach(function (elemento, posicion) {
			elemento.addEventListener("change", limpiarError)
		});
	}

function error(elemento) {
	elemento.classList.add("error");
}
function limpiarError(event) {
 event.target.classList.remove("error");
}

function validaInput(elemento,patron) {
	if (elemento.value == '' || patron.test(elemento.value) == false || elemento.value.length > 500 ) {
			error(elemento);
			return false;
	}
	return true;
}


function validaCheck() {
	var elemento = document.getElementById("politica-privacidad");
	if (elemento.checked == false) {
			error(elemento);
			return false;
	} 
	return true;
}

function validar(e) {
	var enviar = true;
	var patron = "";

	let inputs = document.querySelectorAll('input[type="text"],textarea');
	inputs.forEach(function (elemento, posicion) {
		switch (elemento.id) {
			case 'nombre':
			case 'apellidos':
				patron = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{1,20}[\s]*){1,4}$/; 
				break;
			case 'email':
				patron = /^[\w-\.]{3,20}@([\w-]{2,20}\.)*([\w-]{2,20}\.)[\w-]{2,4}$/;
				break;
			case 'telefono':
				patron = /^\d{10}$/
				break;
			case 'comentarios':
				patron = /^\w[^$%&@=|<>#"\*]+$/;
				break;
		}
		if (validaInput(elemento,patron) == false ) {
			enviar = false;
		};
	});


	if (validaCheck() == false ) {
		enviar = false;
	};


	if (enviar == true) {
		return true;
	} else {
		e.preventDefault() 
		return false;
	}
}
