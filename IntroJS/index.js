//--------------------------------------------->Nivel de dificultad: BAJO
//Crea una variable llamada myName y almacena tu nombre en ella

let myName = "Carolina";
console.log(myName);

//Crea una variable llamada myLastName y almacena tu apellido en ella

let myLastName = "Pineiro";
console.log(myLastName);

//Crea una variable llamada myAge y guarda tu edad en ella

let myAge = 33;
console.log(myAge);

//Crea una variable llamada myPet y guarda el nombre de tu mascota en ella. Si no tienes mascota, puedes inventar un nombre.

let myPet = "Freya";
console.log(myPet);

//Crea una variable llamada petAge y guarda la edad de la mascota en ella

let petAge = 1.5;
console.log(petAge);

//Cree una variable llamada nombre completo y almacene la concatenación de miNombre y miApellido en ella

let nombreCompleto = myName + " " + myLastName;
console.log(nombreCompleto);

//Crea una variable llamada presentationText y guarda en ella un texto compuesto por todas las variables creadas hasta el momento.

let presentationText =
  "Mi nombre es " +
  myName +
  " " +
  myLastName +
  " tengo " +
  myAge +
  " años y mi mascota se llama " +
  myPet +
  ", la cual tiene " +
  petAge +
  " años.";

console.log(presentationText);

//--------------------------------------------->Nivel de dificultad: MEDIO

//Crea una variable sumaEdades, restaEdades, productoEdades, divisiónEdades y calcula sus respectivas operaciones con las variables miEdad y edadMascota

let sumaEdades = myAge + petAge;
console.log(sumaEdades);

let restaEdades = myAge - petAge;
console.log(restaEdades);

let multiplicacionEdades = myAge * petAge;
console.log(multiplicacionEdades);

let divisionEdades = myAge / petAge;
console.log(divisionEdades);

//Cree un objeto llamado estudiante con un mínimo de 5 propiedades, muestre dicho objeto usando console.table() y también muestre cada una de las propiedades del objeto por separado a través de la consola

let estudiante = {
  nombre: "Carolina",
  apellido: "Pineiro",
  edad: 33,
  profesion: "programadora",
  hobbie: "disenar",
};

console.table(estudiante);

//Crea un objeto llamado pet con un mínimo de 5 propiedades, muestra dicho objeto usando console.table() y también muestra cada una de las propiedades del objeto por separado a través de la consola.

let pet = {
  nombre: "Freya",
  edad: 1.5,
  tipo: "perro",
  vacunado: true,
  sexo: "hembra",
};

console.table(pet);
console.log(pet.nombre);
console.log(pet.edad);
console.log(pet.tipo);
console.log(pet.vacunado);
console.log(pet.sexo);

//Cree un arreglo llamado frutas con un mínimo de 5 elementos y muestre el arreglo completo en la consola y también muestre cada uno de los elementos por separado en la consola.

let frutas = ["manzana", "banana", "naranja", "pera", "uva"];
console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);

//--------------------------------------------->Nivel de dificultad: ALTO

//Utiliza un símbolo ( ) que permite ingresar una edad en pantalla y compararla con el número 18, una vez hecho esto guarda el resultado en una variable llamada IamAdult y muestra un mensaje en la consola que dice:"Soy un adulto" (y el valor de la variable).


let edad = prompt("Ingresa tu edad:");
edad = parseInt(edad);

let IamAdult = edad >= 18;

console.log(`Soy un adulto con ${edad} años: ${IamAdult}`);

//Crea un arreglo llamado numeros con un número de 5 elementos y muestre el arreglo completo en la consola y también muestre cada uno de los elementos por separado en la consola.

let numeros = [10, 200, 3000, 40000, 500000];
console.log(numeros);
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);

//Crea un array llamado "familia" con un mínimo de 5 objetos y muestra el array completo y cada uno de los elementos por separado en la consola.

let familia = [
  {
    nombre: "Carolina",
    apellido: "Pineiro",
    edad: 33,
    profesion: "programadora",
    hobbie: "disenar",
  },
  {
    nombre: "Thomas",
    apellido: "Maldonado",
    edad: 8,
    profesion: "estudiante",
    hobbie: "disenar",
  },
  {
    nombre: "Mariano",
    apellido: "Filippi",
    edad: 43,
    profesion: "psicopedagogo",
    hobbie: "leer",
  },
  {
    nombre: "Dina",
    apellido: "Orta",
    edad: 58,
    profesion: "Ama de casa",
    hobbie: "cocinar",
  },
  {
    nombre: "Luis",
    apellido: "Gimenez",
    edad: 68,
    profesion: "Buzo",
    hobbie: "jugar al solitario",
  },
];

console.table(familia);
console.log(familia[0].nombre);
console.log(familia[1].nombre);
console.log(familia[2].nombre);
console.log(familia[3].nombre);
console.log(familia[4].nombre);
console.log(familia[0].apellido);
console.log(familia[1].apellido);
console.log(familia[2].apellido);
console.log(familia[3].apellido);
console.log(familia[4].apellido);
console.log(familia[0].edad);
console.log(familia[1].edad);
console.log(familia[2].edad);
console.log(familia[3].edad);
console.log(familia[4].edad);
console.log(familia[0].profesion);
console.log(familia[1].profesion);
console.log(familia[2].profesion);
console.log(familia[3].profesion);
console.log(familia[4].profesion);
console.log(familia[0].hobbie);
console.log(familia[1].hobbie);
console.log(familia[2].hobbie);
console.log(familia[3].hobbie);
console.log(familia[4].hobbie);

//Crea una variable llamada "randomText" formando una frase con el segundo elemento del arreglo de frutas, el cuarto elemento del arreglo de números y la primera propiedad del quinto objeto del arreglo de familia.

let randomText = frutas[1] + " " + numeros[3] + " " + familia[4].nombre;
console.log(randomText);

