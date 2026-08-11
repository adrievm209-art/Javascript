// //Pedir al usuario una cantidad de dias, y le decimos cuantos son esos dias en horas y minutos

// let dias = prompt("Digita la cantidad de dias")
// let horas = dias * 24
// let minutos = horas * 60
// console.log(minutos)
// console.log(horas)

// //Calcular la velocidad de un carro
//   //Cuantos Kilometros recorrio
//   //en cuanto tiempo

// let distancia = prompt("Cuantos kilometros recorriste?")
// let tiempo = prompt("En cuanto tiempo?")
// let velocidad = distancia / tiempo 
// console.log(`Tu velocidad fue de ${distancia / tiempo} KM/H`)


// // let grcafe = prompt("Cuantos gramos de cafe utilizaras?")
// // let usa = grcafe * 15
// // console.log(`Debes usar ${usa} ml de agua `)


// // pedir al usuario su peso en kilos
//   //decirle cuanto pesa en libras
//   //decirle si debe competir en: bajo, medio o pesado 

// let kilos = prompt("¿Cuantos kilos pesas?")
// console.log(kilos)

// let genero = prompt("¿Eres hombre o mujer?")

// let libras = kilos * 2 
// console.log(`Pesas ${libras} libras`)

// if(genero === "hombre"){

//  if(libras < 160){

//     console.log("Debes competir en una categoria baja")

//   } else if(libras >= 160 && libras < 180){

//     console.log("Debes competir en una categoria media")

//   } else{ 

//     libras >=180
//     console.log("Debes competir en una categoria pesada")

//   }

// }

// if(genero === "mujer"){

//   if(libras < 115){

//     console.log("Debes competir en una categoria femenina baja")

//   } else if(libras >= 115 && libras < 135){

//     console.log("Debes competir en una categoria femenina media")

//   } else{ 

//     libras >=180
//     console.log("Debes competir en una categoria femenina pesada")

//   }

// }

//metodo de preparacion francesa moka o v60
//  //ratio francesa =1/15
//  //ratio moka =1/14
//  //ratio v60 =1/16


//  let metodo = prompt("Elije un metodo: francesa , moka o v60")
//  let grcafe = prompt("¿Cuantos gramos de cafe utilizaras?")

//  if( metodo === "francesa"){

//   let usa = grcafe * 15
//   console.log(`Debes usar ${usa} ml de agua`)

//  }

//  if( metodo === "moka"){

//   let usa = grcafe * 14
//   console.log(`Debes usar ${usa} ml de agua`)

//  }

//  if( metodo === "v60"){

//   let usa = grcafe * 16
//   console.log(`Debes usar" ${usa} ml de agua`)

//  }

// let año = prompt("Digina un año en numeros")
// if((año % 400 === 0) || (año % 4 === 0 && año % 100 !== 0)){

//     console.log(`El año ${año} es bisiesto`)

// }else {

//     console.log(`El año ${año} no es bisiesto`)

// }

// let cnpersonas = prompt("¿Cuantas personas asistieron a la cena?")
// let comiomas = prompt("Cual fue la persona que mas consumio?")
// let cena = prompt("¿Cuanto fue el valor total de la cena ?")
// let pcomiomas =  ( cena / (cnpersonas + 1) ) 
// console.log(`${comiomas} debe pagar ${pcomiomas * 2} `)

//let i = 0 ; i<= 10 ; i++

// // let tdm = prompt("Si me dices un numero t dare la tabla correspondiente")
// // for(let i = 1 ; i <= 10 ; i++){

// // console.log(`${i} * ${tdm} = ${i*tdm}`)

// }

// arrays => Listas

// let frutas = ["Manzana","Pera","Kiwi"]
// console.log(frutas)

// let precio = 50

// if(precio >= 500){
//     console.log(`20% de descuento`)
// } else if(precio >= 300){
//     console.log(`10% de descuento`)
// } else{
//     console.log(`10% de envio`)
// }

// for (let i = 0; i < 3; i++){

//     let precio = 50

// if(precio >= 500){
//     console.log(`20% de descuento`)
// } else if(precio >= 300){
//     console.log(`10% de descuento`)
// } else{
//     console.log(`10% de envio`)
// }

// }




// for (let i = 1; i <= 50; i++) {
  
//     if(i % 3 === 0 && i % 5 === 0){

//         console.log(`FIZZBOZZ ${i}`)

//     }else if(i % 3 === 0 ){

         
//         console.log(`FIZZ ${i}`)
//     }else if(i % 5 === 0 ){

//         console.log(`BOZZ ${i}`)

//     }

// }

// let frutas = ['fresa', 'mora', 'kiwi'] ;
// let fruta = prompt('Ingresa un fruta')
// frutas.push(fruta);
// console.log(frutas);

// for (let i = 1; i<= 10; i++) {

//     let total = i;
//     console.log(total)

// }

// // let carros = ["BMW", "Mercedes Benz", "Audi", "Mazda"]

// let numAzar = Math.floor((Math.random() * 10)+1)
// for (let i = 1; i <= 5 ; i++) {

//     let num = Number(prompt("Ingrese un numero del 1 al 10"))

//     if (numAzar == num) {
//         console.log("ganaste")
//         break
//     }else if(num > numAzar){

//         console.log("Prueba con un numero menor")

//     }else if(num < numAzar){
//         console.log("Prueba con un numero mayor")
//     }else
//          console.log("Perdiste")

// }



// let estudiantes = [


//     {

//         nombre: "shakira",
//         nota: 3

//     },
//      {

//         nombre: "billie",
//         nota: 5

//     },
//      {

//         nombre: "theweeknd",
//         nota: 4

//     },
//      {

//         nombre: "josean",
//         nota: 5

//     }

    
// ]


// for (let i = 0; i < estudiantes.length; i++) {

//     console.log(`el estudiante ${estudiantes[i].nombre} y su nota es ${estudiantes[i].nota}`)

//     if (estudiantes[i].nota >= 3) {
//         document.write(`${estudiantes[i].nombre} aprobó la materia`);
//     } else {
//         document.write(`${estudiantes[i].nombre} no aprobó la materia`);
//     }

// }

const colores = ["marron", "celeste", "verde", "rosa", "morado", "blanco", "negro", "azul"]

console.log(colores[0])
console.log(colores[colores.length - 1])