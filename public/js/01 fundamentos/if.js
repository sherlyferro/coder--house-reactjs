let a=5;

if(a>10){
    console.log('a es mayor a 10')
}else{
    console.log('a es menor a 10');
}
console.log('fin del problema');

const hoy =new Date();
let dia = hoy.getDay();
console.log({dia});

if (dia===0){
    console.log('domingo');
}else {
    console.log('no es domingo');
}

if (dia ===3){
    console.log('Miercoles')
}else {
    console.log('no es miercoles');
}


let nombre='hola mundo'
alert(nombre);

let  respuestaCArcel= prompt('mataste a alguien ')
if ( respuestaCArcel=='si'){
    console.log('iras a la carcel');
}else{
    console.log('la documentacino por favor ');
}


let  helados= prompt('desea solo helado')
let  heladosToping= prompt('desea agregar un topping')
if (  helados=='si'){
    console.log('helado sin topping cuesta 1.9$')
}else if (heladosToping='oreo') {
    console.log('el costo adicional es1 euro');
}else if (heladosToping='kikat') {
    console.log('el costo adicional es1.5 euro');
}else if (heladosToping='brownie') {
    console.log('el costo adicional es0.7 euro');
}
else if (heladosToping='lacasitos') {
    console.log('el costo adicional 0.9esuro');
}
else{
    console.log('no tenemos este topping')
}

