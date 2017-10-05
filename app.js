function word(){  // crear una funcion principal
	do{                     // ejecutar una sentencia al menos una vez hasta que sea falsa
		var answer = prompt("Seleccione lo que quiere hacer: 1- Cipher 2-Decipher"); // prompt que solicite lo que quiere hacer el usuario
		if(answer != ""){ // si la respuesta de ambos operando es desigual, devuelve algo
			if(answer == "1"){ // si la respuesta de ambos operandos es igual a 1
				var pidePalabra = prompt("Ingrese la palabra para Cipher");
				cipher(pidePalabra); // ingresar a cifrado
				}else if (answer == "2"){ // si la respuesta es 2,
					var pidePalabra = prompt("Ingrese la palabra para decipher")
					decipher(pidePalabra); // ingresar a decifrado
						}else{ // si no es ninguno de ambos numeros
							alert("Ingrese un número válido"); // retornar un mensaje solicitadno que se ingrese un numero valido
			}
		}
	}  while ( answer == ""  || (answer =="1" || answer == "2")); /*  while si es verdadero ejecuta la funcion, si la respuesta es vacio o no es ni 1 ni 2, 
	     nos vuelve a pedir que ingresemos un valor */
}

function cipher(pidePalabra){ // llamar a a funcion
	var cifrar =""; // variable cifrar sera igual a valor ingresado
	var codigoAscii = 0; // el codigo ascii partira de 0

	pidePalabra = pidePalabra.toUpperCase(); // para que recorra completo el texto

	for (var i = 0; i< pidePalabra.length; i++) { // i parte en 0
	 	codigoAscii = pidePalabra.charCodeAt(i);
	 	codigoAscii = (codigoAscii-65-7+26)+65;
	 	cifrar = cifrar + PidePalabra.fromCharCode(codigoAscii);
	}
		alert(cifrar);
	}

