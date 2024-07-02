//--------------------------------------------->Nivel de dificultad: BAJO

//Haz una "prueba de escritorio", mostrando cuánto vale "i" en cada caso, y qué se imprime en pantalla, para el siguiente ejercicio:

//para (sea i = 10; i <= 20; i++) {
//   console.log("Número actual: " + i);
// }
//}

for (let i = 10; i <= 20; i++) {
    console.log("Número actual: " + i);
    }

//Utilizando un bucle "for", crea un programa que permita el ingreso de un número entre 1 y 100 a través de un prompt , luego imprime a través de la consola todos los números que estén entre el número ingresado y 0 (es decir, en orden descendente).

for (let i = (prompt("Ingresa un número del 1 al 100")); i >= 0; i--) {
  console.log(i);
}

//Utilizando un bucle "for", realizar un programa que permita el ingreso de un número a través de un prompt entre 1 y 10, y muestre a través de la consola su tabla de multiplicar (solo los primeros 10 múltiplos).

let numerpParaMultiplicar = (prompt("Ingresa un número del 1 al 10"));
for (let i = 1; i <= 10; i++) {
  let resultado =   numerpParaMultiplicar*i;
  console.log(`${numerpParaMultiplicar} x ${i} = ${resultado}`);
}

//Usando un bucle " while ", cree un programa que permita la entrada de números a través de un mensaje. Los números deben sumarse (acumularse) en una variable resultante. La entrada de números finalizará cuando el usuario ingrese un 0. Al final, muestre el valor de la variable suma a través de la consola

let acumular = 0; //La variable acumuladora se inicializa en 0

while (true) {
  let numero = parseInt(prompt("Ingresa un número"));
  if (numero === 0) {
    break;
  }
  acumular += numero; //Suma el numero al acumulador
  console.log(`La suma es:  + ${acumular}`);
}

//Utilizando ahora un bucle "do while" y siguiendo las mismas instrucciones que el ejercicio anterior, muestra en la consola, el valor de la variable que acumula la suma de los números ingresados.

do {
    let numero = parseInt(prompt("Ingresa un número"));
    if (numero === 0) {
      break;
    }
    acumular += numero; // Suma el numero al acumulador
    console.log(`La suma es: ${acumular}`); // Muestra la suma actualizada
  } while (true);

//Usando un bucle "for in", crea un objeto con al menos 5 propiedades, haz un programa que recorra dicho objeto y solo muestre todas las claves de sus propiedades en la consola.

let casa = {
    tipo: 'familiar',
    habitaciones: 3,
    baños: 2,
    direccion: "Urquia 4585",
    patio: true
}   

for (let key in casa) {
    console.log(key); // muestra las claves del objeto casa
}

//Usando un bucle "for in", cree un programa que se ejecute a través del objeto creado en el ejercicio anterior y solo muestre los valores de cada una de las claves en la consola

for (let key in casa) {
    console.log(casa[key]); // muestra los valores del objeto casa
}

//--------------------------------------------->Nivel de dificultad: MEDIO

let acumular2 = 0; // La variable acumuladora se inicializa en 0

while (true) {
  let numero = parseInt(prompt("Ingresa un número"));
  if (numero === 0) {
    break;
  }
  acumular2 += numero; // Suma el numero al acumulador
  console.log(acumular2);
}

// Una vez finalizado el bucle, almacenar el número acumulado en numeroSecreto
let numeroSecreto = acumular2;

let intentos = 0;
let numeroIngresado;

// Bucle do while para adivinar el número secreto
do {
  intentos++;
  numeroIngresado = parseInt(prompt("Intenta adivinar el número secreto (entre 1 y 100):"));

  if (numeroIngresado > numeroSecreto) {
    console.log("El número ingresado es mayor que el secreto.");
  } else if (numeroIngresado < numeroSecreto) {
    console.log("El número ingresado es menor que el secreto.");
  } else {
    console.log(`¡Has acertado! El número secreto era ${numeroSecreto} y has hecho ${intentos} intentos.`);
    break;
  }

} while (numeroIngresado !== numeroSecreto);

//Usando el bucle que consideres correcto, crea un programa que reciba un número a través de un mensaje y muestre todos sus divisores (divisores)  a través de la consola.

/*let numeroParaDivisores = parseInt(prompt("Ingresa un número para encontrar sus divisores:"));
console.log(`Los divisores de ${numeroParaDivisores} son:`);

// Bucle para encontrar y mostrar los divisores
for (let i = 1; i <= numeroParaDivisores; i++) {
  if (numeroParaDivisores % i === 0) { // indica que i es un divisor de numeroParaDivisores
    console.log(i);
  }
}*/

//Teniendo en cuenta la función Bell que suena, crea un bucle (el que consideres) que muestre una cadena por consola que a su vez concatene la cadena que retorna la función tantas veces como el número que el usuario ingrese en el teclado.

/*function Campana() {
    return "Ding Dong";
  }
  
  let numero = parseInt(prompt("Ingresa un número:"));
  let resultado = "";
  
  // Concatenar "Ding Dong" tantas veces como el número ingresado
  for (let i = 0; i < numero; i++) {
    resultado += Campana();
    if (i < numero - 1) {
      resultado += ", "; // Agregar una coma y espacio entre cada "Ding Dong", excepto al final
    }
  
  
  console.log(resultado);*/ 

//Partiendo de las constantes dateLimit y fechas , haz un bucle (el que consideres) que muestre en la consola las fechas del array mayores o iguales a la fecha almacenada en la constante dateLimite .

/*const dateLimit = "1997-8-3";
const fechas = ["1997-8-3", "1997-8-4", "1997-8-5", "1997-8-6", "1997-8-7"];

console.log(`Fechas mayores o iguales a ${dateLimit}:`);

for (let i = 0; i < fechas.length; i++) {
  if (fechas[i] >= dateLimit) {
    console.log(fechas[i]);
  }
}*/

const colores = [
  "rojo",
  "verde",
  "azul",
  "blanco",
  "violeta",
  "marron",
  "negro",
  "blanco",
];

for (let color of colores) {
  console.log(color);
}

//
function imprimirColores(array) {
  for (let color of array) {
    console.log(color);
  }
}

imprimirColores(colores);

//
const numeroBuscarElDoble = [2, 8, 19, 5, 43];

for (let numero of numeroBuscarElDoble) {
  let doble = numero * 2;
  console.log(`El doble de ${numero} es ${doble}`);
}

//

const familia = [
  {
    nombre: "Carolina",
    apellido: "Pineiro",
    edad: 33,
    miembro: "madre",
  },

  {
    nombre: "Mariano",
    apellido: "Filippi",
    edad: 43,
    miembro: "padre",
  },

  {
    nombre: "Thomas",
    apellido: "Pineiro",
    edad: 8,
    miembro: "hijo",
  },

  {
    nombre: "Dina",
    apellido: "Orta",
    edad: 58,
    miembro: "abuela",
  },
];

function miembrosDeLaFamilia(familia) {
  for (miembro of familia) {
    console.log(
      `Hola, soy ${miembro.nombre} ${miembro.apellido} (${miembro.miembro}) y tengo ${miembro.edad} años`
    );
  }
}

miembrosDeLaFamilia(familia);

//--------------------------------------------->Nivel de dificultad: ALTO

/*let numer;
let sumaPares = 0;
let sumaImpares = 0;

while (true) {
  numer = parseInt(prompt("Ingresa un número (ingresa 0 para terminar):"));
  
  if (numer === 0) {
    break; // Salir del bucle si se ingresa 0
  }
  
  if (numer % 2 === 0) {
    // Sumar al total de números pares
    sumaPares += numer;
  } else {
    // Sumar al total de números impares
    sumaImpares += numer;
  }
}

console.log(`Suma de números pares: ${sumaPares}`);
console.log(`Suma de números impares: ${sumaImpares}`);*/

//
const imprimirNumeroMasGrande = [15, 27, 8, 45, 12, 39, 6, 18, 33, 20];

// Inicializar una variable para almacenar el número más grande
let numeroMax = imprimirNumeroMasGrande[0]; // Asignamos el primer elemento como máximo inicialmente

// Recorrer la matriz para encontrar el número más grande
for (let i = 1; i < imprimirNumeroMasGrande.length; i++) {
  if (imprimirNumeroMasGrande[i] > numeroMax) {
    numeroMax = imprimirNumeroMasGrande[i];
  }
}

console.log(`El número más grande en la matriz es: ${numeroMax}`);
