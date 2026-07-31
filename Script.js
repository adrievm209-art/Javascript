//Pedir al usuario una cantidad de dias, y le decimos cuantos son esos dias en horas y minutos

let dias = prompt("Digita la cantidad de dias")
let horas = dias * 24
let minutos = horas * 60
console.log(minutos)
console.log(horas)

//Calcular la velocidad de un carro
  //Cuantos Kilometros recorrio
  //en cuanto tiempo

let distancia = prompt("Cuantos kilometros recorriste?")
let tiempo = prompt("En cuanto tiempo?")
let velocidad = distancia / tiempo 
console.log(`Tu velocidad fue de ${distancia / tiempo} KM/H`)


let grcafe = prompt("Cuantos gramos de cafe utilizaras?")
let usa = grcafe * 15
console.log(`Debes usar ${usa} ml de agua `)
