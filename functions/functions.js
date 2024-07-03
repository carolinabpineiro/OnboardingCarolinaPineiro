//--------------------------------------------->Nivel de dificultad: bajo

function add() {
  let resultado = 100 * 20;
  console.log(`El resultado es ${resultado}`);
}

add();

function add2(numero1, numero2) {
  return numero1 * numero2;
}

console.log(add2(100, 20));
console.log(add2(30, 50));
console.log(add2(33, 43));

//--------------------------------------------->Nivel de dificultad medio

//Ejercicio 1

let nombreSaludar = prompt("Por favor, ingresa tu nombre");
function saludo(nombre) {
  return `Bienvenido ${nombreSaludar}`;
}

console.log(saludo());

//Ejercicio 2

function multiplicar(num1, num2) {
  return num1 * num2;
}
console.log(multiplicar(10, 5));
console.log(multiplicar(33, 43));

//Ejercicio 3

function area(base, altura) {
  return (base * altura) / 2;
}
console.log(area(10, 5));
console.log(area(33, 43));

//Ejercicio 4

function perimetro(lado1, lado2, lado3) {
  return lado1 + lado2 + lado3;
}
console.log(perimetro(18, 5, 8));
console.log(perimetro(33, 43, 23));

//Ejercicio 5
function precio(precio, cantidad) {
  let precioTotal = precio * cantidad;
  if (cantidad >= 10) {
    return precioTotal * 0.9;
  } else if (cantidad >= 20) {
    return precioTotal * 0.8;
  } else {
    return precioTotal;
  }
}
console.log(precio(280, 5));

//Ejercicio 6

function isAnAdult(edad) {
  if (edad >= 18) {
    return "Eres mayor de edad";
  } else {
    return "No eres un adulto";
  }
}
console.log(isAnAdult(20));
console.log(isAnAdult(15));

//--------------------------------------------->NIVEL ALTO
//Ejercicio 1

function impuestoPersonal(ingreso) {
  if (ingreso <= 10000) {
    return ingreso * 0.1;
  } else if (ingreso > 10000 && ingreso <= 20000) {
    return ingreso * 0.15;
  } else {
    return ingreso * 0.2;
  }
}

console.log(`El impuesto personal es de ${impuestoPersonal(10000)}`);
console.log(`El impuesto personal es de ${impuestoPersonal(20000)}`);
console.log(`El impuesto personal es de ${impuestoPersonal(30000)}`);

//Ejercicio 2

function determinarDiaHabil(numero) {
  let tipoDia = "";

  switch (numero) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      tipoDia = "Es un dia habil";
      break;
    case 6:
    case 7:
      tipoDia = "Es fin de semana";
      break;
    default:
      tipoDia = "no es un nro correcto";
      break;
  }

  return tipoDia;
}

console.log(`${determinarDiaHabil(3)}`);
console.log(`${determinarDiaHabil(7)}`);
console.log(`${determinarDiaHabil(16)}`);

//Ejercicio 3

function pedirDatosPersona() {
  let nombre = prompt("Ingrese su nombre:");
  let apellido = prompt("Ingrese su apellido:");
  let edad = prompt("Ingrese su edad:");

  // Verificar que los campos no estén vacíos y la edad sea válida
  if (nombre.trim() === "" || apellido.trim() === "" || edad.trim() === "") {
    alert("Por favor, complete todos los campos.");
    pedirDatosPersona(); // Volver a solicitar los datos
    return; // Importante para evitar que se ejecute el código restante
  }
  // Verificar si la edad es un número válido
  if (isNaN(edad) || edad <= 0) {
    alert("Por favor, ingrese una edad válida.");
    pedirDatosPersona(); // Volver a solicitar los datos
    return; // Importante para evitar que se ejecute el código restante
  }

  return(`Los datos ingresados son:\nNombre: ${nombre}\nApellido: ${apellido}\nEdad: ${edad}`);
}

console.log(pedirDatosPersona());

//Ejercicio 4

function saludar(nombre) {
  return `Hola, mi nombre es ${nombre}`;
}

function calculateAge(nacimiento, actual) {
  return actual - nacimiento;
}

function present() {
  let nombre = prompt("Ingresa tu nombre:");
  let nacimiento = parseInt(prompt("Ingresa tu año de nacimiento:"));
  let actual = parseInt(prompt("Ingresa el año actual"));

  let saludo = saludar(nombre);
  let edad = calculateAge(nacimiento, actual);

  return `${saludo}. Tengo ${edad} años.`;
}

console.log(present());
