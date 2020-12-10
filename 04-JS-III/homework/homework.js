// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  var valor = array[0];
  return valor;
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var valor = array[array.length-1];
  return valor;
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var valor = array.length;
  return valor;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(i=0; i<array.length; i++){
  	array[i]++;
  }
  return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var frase ='';
  for(var i=0; i<palabras.length; i++){
  	frase = frase + palabras[i];
  	if (i<palabras.length-1){
  		frase = frase + ' ';
  	}
  }
  return frase;
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var valor = false;
  for(var i = array.length; i>=0; i--){
  	if (array[i-1] == elemento){
  		valor = true;
  		return valor;
  	} 
  }
  return valor;
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var valor = 0;
  for(var i = numeros.length - 1; i>=0; i--){
  	valor = valor + numeros[i];
  }
  return valor;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var valor = 0;
  for(var i = 0; i<resultadosTest.length; i++){
  	valor = valor + resultadosTest[i];
  }
  return (valor/resultadosTest.length); 
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var valor = numeros[0];
  for(var i = 0; i < numeros.length; i++){
  	if(valor<numeros[i]){
          valor=numeros[i];

  		}
   	}
	return valor;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  var valor = 1;

  if (arguments.length==0){
  	valor = 0;
  }else{
  	for(var i=0; i<arguments.length; i++){
  		valor = valor * arguments[i]; 
  	}
  }

  return valor;

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};