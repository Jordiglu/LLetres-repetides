"use strict"

//Imprimir nom a la consola//
const arrayNombre = ["j", "o", "r", "d", "i"];

for (let i = 0; i < arrayNombre.length; i++) {
    console.log(arrayNombre[i]);
}


console.log("----------------------------------------------------")

//Iterar i trobar vocals i consonants//
const arrayName = ["j", "o", "r", "7", "d", "i"];
const vocales = ["a", "e", "i", "o", "u"];

for (let i = 0; i < arrayName.length; i++) {
    if (vocales.includes(arrayName[i])) {
        console.log(`He trobat la vocal: ${arrayName[i]}`)
    }
    else if (!vocales.includes(arrayName[i])) {
        console.log(`He trobat la consonant: ${arrayName[i]}`)

    } else if (arrayName.some(isNaN)) {
        console.log(`Les persones no contenen el numero ${arrayName[i]}`);
    } else {

    }

}
console.log("....................................................");


// Emmagatzemar en un map les lletres repetides del meu nóm//
let arryNom = ["j", "o", "r", "d", "i", "j"]; // he repetit la lletra "J" per q es visualitzi millor l'exercici//
let charMap = {};

for (let i = 0; i < arryNom.length; i++) {
    if (charMap[arryNom[i]] == undefined) {
        charMap[arryNom[i]] = 0;
    }
    charMap[arryNom[i]]++;

}

console.log(charMap);



console.log("....................................................");


//Crear una nova array amb el nóm complert//
let nombre = ["j", "o", "r", "d", "i"];
let apellido = ["c", "a", "l", "a", "t", "a", "y", "u", "d"];
let nombreCompleto = nombre.concat([" "], apellido);

console.log(nombreCompleto);