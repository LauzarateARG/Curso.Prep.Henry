// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length -1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(num in array){
    array[num]=array[num]+1;
  }
  return array
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
  let str ="";
  for(palabra in palabras){
    if(palabra==(palabras.length-1)){
      str=str+palabras[palabra];
      break;
    }
    else{
      str=str+palabras[palabra]+" ";
    }
  }
  return str;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var condicion = false;
  for(existe in array){
    if(elemento==array[existe]){
      condicion = true;
      break;
    }
  }
  return condicion;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let suma = 0;
  for(numero in numeros){
    suma = suma+numeros[numero];
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let suma=0;
  let promedio=0;
  for(elemento in resultadosTest){
    suma=suma+resultadosTest[elemento];
  }
  promedio=suma/resultadosTest.length;
  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let grande=0;
  for(numero in numeros){
    if(numeros[numero]>grande){
      grande=numeros[numero];
    }
  }
  return grande;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var mult=1;
  if(arguments.length==1){
    return arguments[0]
  }
  else if(arguments.length==0){
    return 0;
  }else{
    for(argumento in arguments){
      mult = mult*arguments[argumento];
    }
    return mult;
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let suma=0;
  for(elemento in arreglo){
    if(arreglo[elemento]>18){
      suma++
    }
  }
  return suma;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí
  if(numeroDeDia==1||numeroDeDia==7){
    return "Es fin de semana";
  }   
  if(numeroDeDia==2||numeroDeDia==3||numeroDeDia==4||numeroDeDia==5||numeroDeDia==6){
    return "Es dia Laboral";
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let str=n+"";
  if(str[0]==9){
    return true;
  }else{
    return false;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  let comparar=arreglo[0];
  for(ar in arreglo){
    if(comparar==arreglo[ar]){
      comparar=arreglo[ar];
    }else{
      comparar = false;
    }
  }
  if(comparar==false){
    return false;
  }else{
    return true;
  }
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let nuArray=[];
  for(ar in array){
    if(array[ar]=="Enero"||array[ar]=="Marzo"||array[ar]=="Noviembre"){
      nuArray.push(array[ar]);
    }
  }
  if(nuArray.length<3){
    return "No se encontraron los meses pedidos";
  }else{
    return nuArray;
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let maA100=[];
  for(ar in array){
    if(array[ar]>100){
      maA100.push(array[ar]);
    }
  }
  return maA100;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let aumento = [];
  let error=null;
  for(let i=0 ;i<10 ;i++){
    numero=numero+2;
    aumento.push(numero);
    
    if(numero==i){
      error=true;
      break;
    }
  }
  if(error==true){
    return "Se interrumpió la ejecución";
  }else{
    return aumento;
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let aumento = [];
  for(let i = 0;i<10;i++){
    if(i==5){
      continue;
    }
    numero=numero+2;
    aumento.push(numero);
  }
    return aumento;
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
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
