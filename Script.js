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
 //ratio francesa =1/15
 //ratio moka =1/14
 //ratio v60 =1/16


 let metodo = prompt("Elije un metodo: francesa , moka o v60")
 let grcafe = prompt("¿Cuantos gramos de cafe utilizaras?")
 
 if( metodo === "francesa"){

  let usa = grcafe * 15
  console.log(`Debes usar ${usa} ml de agua`)

 }

 if( metodo === "moka"){

  let usa = grcafe * 14
  console.log(`Debes usar ${usa} ml de agua`)

 }

 if( metodo === "v60"){

  let usa = grcafe * 16
  console.log(`Debes usar" ${usa} ml de agua`)

 }
