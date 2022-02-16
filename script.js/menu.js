const hamburguesa=document.querySelector('.hamburguesa');
const menu=document.querySelector('.menu');

console.log(menu)
console.log(hamburguesa)

hamburguesa.addEventListener('click',()=>{
    menu.classList.toggle("spread")
})
window.addEventListener('click',e=>{
    if(menu.classList.contains('spread' )&& e.target != menu && e.target!= hamburguesa){
        menu.classList.toggle("spread")
    }
})

alert("HOLA BIENVENDIDO EL ZOOLÓGICO DE PIURA");
let Nombre = prompt("Escribe tu nombre");
let Edad =prompt("Escribe tu edad");
let Numero_persona =prompt("¿Cuántas personas son?");

let multiplicador1 = 8;
let multiplicando1 = Number(prompt("Ingresa el número de niños: "));
let resultado1 = Number(multiplicador1*multiplicando1);
alert("El precio total de tu reserva para los niños es " + resultado1);



let multiplicador2 = 10;
let multiplicando2 = Number(prompt("Ingresa el número de adultos: "));
let resultado2 = Number(multiplicador2*multiplicando2);

alert("El precio total de tu reserva para los adultos es " + resultado2);


let suma = Number(resultado1 + resultado2);

alert("El precio total para tu reservación es " + suma);

alert("DISFRUTA DE TU VISITA");