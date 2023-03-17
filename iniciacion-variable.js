var variable_;
let variableLet_;

// const constante;
const constante = "hola soy una constante";
// constante = "adios" // nos da un error 

var a = 1;
console.log(a);

a = 4;
console.log(a);

let b = 3;
console.log(b);

b = 5;
console.log(b);
//  la diferencia entre el var y let, es que el var afecta a todo el codigo y let solo afecta al bloque donde este  siendo declarado.

var variable = "hola soy una variable VAR"

for (var i =0; i < 3; i++) {
    var variable = "soy la segunda variable "
}
    console.log(variable)



let variableLet = "hola soy una variable LET"

for (var i =0; i < 3; i++) {
    let variableLet = "soy la segunda variable "
}
    console.log(variableLet)

////////////////////////

var num = 4;

console.log(typeof num);

num = "Hola soy num";

console.log(typeof num);
