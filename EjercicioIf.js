/*
Realizar un programa que pida una calificación (número) 
y muestra la nota según la calificación:
0-5: Insuficiente
6-8: Suficiente
9-10: Sobresaliente
*/

let calificacion;
let nota;
if (calificacion >= 0 && calificacion <= 5) {
	nota = 'Insuficiente';
} else if (calificacion >= 6 && calificacion <= 8) {
	nota = 'Suficiente';
} else if (calificacion >= 9 && calificacion <= 10) {
	nota = 'Sobresaliente';
} else {
	nota = 'Calificacion no valida';
}
console.log('Tu calificacion fue: ', nota);




