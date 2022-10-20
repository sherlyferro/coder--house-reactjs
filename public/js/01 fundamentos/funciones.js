function saluda(nombre){
    console.log('hola '+nombre)
}
saluda('fernando');

const saludarFlecha=   ( nombre)=>{
    console.log('hola  '+ nombre);
}

saludarFlecha("Melisa");

function sumar (a,b){
    return a+b;
}

console.log(sumar (1,2));
 
const sumar2 =(a,b)=> a+b;
console.log(sumar (5,2));

const getAleatorio =()=>Math.random();
console.log(getAleatorio ());