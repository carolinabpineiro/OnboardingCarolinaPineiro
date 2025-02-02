//--------------------------------------------->Nivel de dificultad: BAJO

//Ejercicio 4 (Diagrama de flujo en Google Docs)

let num1 = 4;
let num2 = 5;

if (num1 > num2) {
  console.log(num1);
} else {
  console.log(num2);
}

//Basado en el ejercicio 1, ahora modifica el bloque de la siguiente manera:
//Si num1 es mayor que num2, imprima num1 a través de la consola,
//si num2 es mayor, imprime num2 y finalmente
//si son iguales, imprima una cadena que diga "Los números son iguales"

if (num1 > num2) {
  console.log(num1);
} else if (num2 > num1) {
  console.log(num2);
} else {
  console.log("Los números son iguales");
}

//Con base en el ejercicio 1, crea un bloque condicional que evalúe si estas variables son iguales o no, de ser así imprime una cadena a través de la consola “Los números son iguales”, en caso contrario “Los números son diferentes”

if (num1 === num2) {
  console.log("Los números son iguales");
} else {
  console.log("Los números son diferentes");
}

//A partir del siguiente ejemplo, cree un bloque condicional que evalúe si una de estas variables es mayor que la otra; si es así, muestre “ La fecha [date1] es mayor que [date2] ” por consola, y, si son iguales, imprima “ Las fechas son iguales ”. Utilice comillas invertidas para imprimir a través de la consola.

let date1 = "2018-9-2";

let date2 = "2023-7-5";

if (date1 > date2) {
  console.log(`La fecha ${date1} es mayor que ${date2}`);
} else if (date1 < date2) {
  console.log(`La fecha ${date2} es mayor que ${date1}`);
} else {
  console.log("Las fechas son iguales");
}

//Ahora intenta cambiar el valor de las variables. Al igual que en los ejercicios anteriores, se debe imprimir una cadena a través de la consola que diga si la fecha 1 es mayor que la fecha 2 o todo lo contrario.

date1 = "2016-3-4";
date2 = "2024-4-26";

if (date1 > date2) {
  console.log(`La fecha ${date1} es mayor que ${date2}`);
} else if (date1 < date2) {
  console.log(`La fecha ${date2} es mayor que ${date1}`);
} else {
  console.log("Las fechas son iguales");
}

//En este caso, crea un bloque condicional que evalúe cuál de los tres números almacenados en las variables es el mayor. Imprime una cadena a través de la consola que dice “El número [ ] es el más grande”.

let number1 = 5;
let number2 = 7;
let number3 = 9;

if (number1 > number2 && number1 > number3) {
  console.log(`El número ${number1} es el más grande`);
} else if (number2 > number1 && number2 > number3) {
  console.log(`El número ${number2} es el más grande`);
} else {
  console.log(`El número ${number3} es el más grande`);
}

//--------------------------------------------->Nivel de dificultad: MEDIO

//Usando un " interruptor" , crea un programa que te permita ingresar estos nombres de colores en la pantalla: rojo, azul o verde . E imprimir en pantalla en cada caso:

let color = prompt("Ingresa un color");

switch (color) {
  case "rojo":
    console.log("El color de la pasión");
    break;
  case "azul":
    console.log("El color del mar");
    break;
  case "verde":
    console.log("El color de la naturaleza");
    break;
  default:
    console.log("Color no encontrado");
}

//Usando un interruptor, cree un programa que le permita ingresar en la pantalla:
//dos valores numéricos (número del 1 al 100 )
//una operación (suma, resta, multiplicación, división) e imprimir en pantalla en cada caso:
//suma : primer valor + el segundo
//resta : primer valor - el segundo
//multiplicación : primer valor * segundo
//división : primer valor / segundo
//Con el literal correspondiente ("la suma de <num1> y <num2> es...", etc.)

let n1 = parseInt(prompt("Ingresa un primer numero"));
let n2 = parseInt(prompt("Ingresa un segundo numero"));
let operacion = prompt(
  "Ingresa una operacion (suma, resta, multiplicación, división)"
);

switch (operacion) {
  case "suma":
    console.log(`La suma de ${n1} y de ${n2} es ${n1 + n2}`);
    break;
  case "resta":
    console.log(`La resta de ${n1} y de ${n2} es ${n1 - n2}`);
    break;
  case "multiplicacion":
    console.log(`La multiplicacion de ${n1} y ${n2} es ${n1 * n2}`);
    break;
  case "division":
    console.log(`La division de ${n1} y de ${n2} es ${n1 / n2}`);
    break;
  default:
    console.log("Operacion invalida");
    break;
}

//A partir de la siguiente estructura, cree un bloque condicional que:
//recibe 2 objetos que representan personas con las propiedades:  nombre, edad, altura
//e imprimir por consola en el mismo console.log:
//¿Cuál de las dos personas es más alta?
//¿Cuál es el mayor?

let persona1 = {
  nombre: "Lola",
  edad: 33,
  altura: 1.7,
};

let persona2 = {
  nombre: "Mariano",
  edad: 43,
  altura: 1.72,
};

if (persona1.altura > persona2.altura && persona1.edad > persona2.edad) {
  console.log(
    `${persona1.nombre} es la persona más alta y la persona de mayor edad`
  );
} else if (persona1.altura > persona2.altura && persona1.edad < persona2.edad) {
  console.log(
    `${persona1.nombre} es la persona más alta y ${persona2.nombre} es la persona de mayor edad`
  );
} else if (persona1.altura < persona2.altura && persona1.edad > persona2.edad) {
  console.log(
    `${persona2.nombre} es la persona más alta y ${persona1.nombre} es la persona de mayor edad`
  );
} else if (persona1.altura < persona2.altura && persona1.edad < persona2.edad) {
  console.log(
    `${persona2.nombre} es la persona más alta y la persona de mayor edad`
  );
}

//Crea un programa que te permita ingresar en la pantalla:
//tu nombre, edad, altura y visión .
//e imprimir a través de la consola una cadena “ Estás calificado para conducir ”,
//Para ello la persona debe:
//Tener al menos 18 años.
//Mide más de 110 cm.
//Tenga una visión de al menos 8 sobre 10.

let calificadoParaConducir = {
  nombreConducir: prompt("Ingresa tu nombre"),
  edadConducir: parseInt(prompt("Ingresa tu edad")),
  alturaConducir: parseInt(prompt("Ingresa tu altura en cm")),
  visionConducir: parseInt(prompt("Ingresa tu visión del 1 al 10")),
};

if (
  calificadoParaConducir.edadConducir >= 18 &&
  calificadoParaConducir.alturaConducir > 110 &&
  calificadoParaConducir.visionConducir >= 8
) {
  console.log(
    `${calificadoParaConducir.nombreConducir} estás calificado para conducir`
  );
} else {
  console.log(
    `${calificadoParaConducir.nombreConducir} no estás calificado para conducir`
  );
}

//Crea un programa que te permita ingresar tu edad en la pantalla e imprimirla en la pantalla si eres:
//infantil (0 a 12 años)
//adolescente (13 a 18 años)
//jóvenes mayores (19 a 45 años)
//personas mayores (mayores de 45 años)
//¿Es realmente tan viejo? (más de 100 programas)

let edad = parseInt(prompt("Ingresa tu edad"));

switch (true) {
  case edad >= 0 && edad <= 12:
    console.log("Eres infantil");
    break;
  case edad >= 13 && edad <= 18:
    console.log("Eres un adolescente");
    break;
  case edad >= 19 && edad <= 45:
    console.log("Eres un joven adulto");
    break;
  case edad >= 46 && edad <= 100:
    console.log("Eres una persona mayor");
    break;
  default:
    console.log("¿Eres realmente tan viejo?");
    break;
}

//Crea un programa que te permita ingresar solo números del 1 al 3 en la pantalla y luego cualquier otro dato numérico. Imprimir en pantalla :
//1: “El número ingresado es [ ]”
//2: “El doble del número ingresado es [ ]”
//3: “Tres veces el número ingresado es [ ]”
//otro: “Ese valor no está permitido”

let nume1 = parseInt(prompt("Ingresa un numero del 1 al 3"));

let numer2 = parseInt(prompt("Ingresa un segundo numero"));

if (nume1 === 1 || nume1 === 2 || nume1 === 3) {
  console.log(
    `El numero ingresado es ${nume1}. El doble es ${nume1*2}. Tres veces el numero ingresado es ${nume1*3}`
  );
} else {
  alert("Ese valor no está permitido");
}


//--------------------------------------------->Nivel de dificultad: ALTO

let consultaNombre = prompt("Ingrese su nombre:").toLowerCase();

if (consultaNombre === "carolina") {
  alert("¡Bienvenida!, que tengas una excelente estadía");
} else {
  let consultaPase = prompt(
    "¿Tiene pase VIP o pase normal? Por favor escriba 'si' o 'no'"
  ).toLowerCase();

  if (consultaPase === "si") {
    alert("¡Bienvenida!, que tengas una excelente estadía");
  } else {
    let consultaEntrada = prompt(
      "¿Tiene entrada? Por favor escriba 'si' o 'no'"
    ).toLowerCase();

    if (consultaEntrada === "si") {
      let usarEntrada = prompt(
        '¿Quieres usar la entrada? Por favor escriba "si" o "no"'
      ).toLowerCase();

      if (usarEntrada === "si") {
        alert("¡Bienvenida!, que tengas una excelente estadía");
      } else {
        alert(
          "Lamentamos que no nos acompañe en esta estadía. Que tenga un buen día y lo esperamos pronto."
        );
      }
    } else {
      let comprarEntrada = prompt(
        '¿Quieres comprar la entrada? Por favor escriba "si" o "no"'
      ).toLowerCase();

      if (comprarEntrada === "si") {
        let cuantoDinero = parseInt(prompt("¿Cuánto dinero tienes?"));

        if (cuantoDinero >= 100) {
          alert("¡Bienvenida!, que tengas una excelente estadía");
        } else {
          alert("No puedes entrar, no tienes suficiente dinero.");
        }
      } else {
        alert(
          "Lamentamos que no nos acompañe en esta estadía. Que tenga un buen día y lo esperamos pronto."
        );
      }
    }
  }
}