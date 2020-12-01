// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  
  var valor;

  if (x>y){
  	valor = x;
  }
  else{
  	valor = y;
  }
  return valor;
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  var valor;
  if(idioma == 'aleman' ){
  	valor = 'Guten Tag!';
  	}else if(idioma == 'mandarin'){
  		valor = 'Ni Hao!';
  	}else if (idioma == 'ingles') {
  		valor = 'Hello!';
  	} else{
  		valor ='Hola!';
  	}
  	return valor;
}

function esDiezOCinco(numero) {
    // Devuelve "true" si "numero" es 10 o 5
    // De lo contrario, devuelve "false"
    // Tu código:
    var valor;
    if (numero == 10 || numero == 5){
    	valor = true;
    }else{
    	valor = false;
    }
    return valor;
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  var valor;
  if (numero < 50 && numero > 20){
  	valor = true;
  }else{
  	valor = false;
  }
  return valor;
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  var valor;
  if(Math.floor(numero) == numero){
  	valor = true;
  }else{
  	valor = false;
  }
  return valor;
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  var valor='';
  if (numero % 3 == 0){
  	valor = 'fizz';
  }
  if (numero % 5 == 0) {
  	valor = valor + 'buzz';
  }

  if (!valor){
  	valor = numero;
  }

  return valor;
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  var valor = false;
  for(var i = numero-1; i>1; i--){
  	if (numero % i !== 0){
  		valor = true;
  	}
  	else{
  		valor = false;
  	}
  	
  }

 return valor;

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  saludo,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  esPrimo
};
