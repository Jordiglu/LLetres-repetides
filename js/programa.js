"use strict"

//Imprimir nom a la consola//
const arrayNombre = ["j", "o", "r", "d", "i"];

for (let i = 0; i < arrayNombre.length; i++) {
    console.log(arrayNombre[i]);
}


console.log("----------------------------------------------------")

//Iterar i trobar vocals & consonants//
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

var arryNom = ["j", "o", "r", "d", "i", "j"];
var listedCounts = {};

var newMap = arryNom.map(char => {
    if (!listedCounts[char]) {
        listedCounts[char] = 1;
    } else {
        listedCounts[char]++;
    }
    return listedCounts;
});
console.log(newMap[0]);

//Primer intent del Ex!

// var charMap = arryNom.map(function () {
//     var myMap = {};
//     for (let index of arryNom) {
//         if (myMap[index] == undefined) {
//             myMap[index] = 0;
//         }
//         myMap[index]++;
//     }
//     return myMap;

// });
// console.log(charMap[0]);


console.log("....................................................");


//Crear una nova array amb el nóm complert//
let nombre = ["j", "o", "r", "d", "i"];
let apellido = ["c", "a", "l", "a", "t", "a", "y", "u", "d"];
let nombreCompleto = nombre.concat([" "], apellido);

console.log(nombreCompleto);

//Ex nivell 2
console.log(".....................Nivell-2........................");

var StrObj = 'Una dirección de corr nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email';

var regex = /\w*-?\w*-[a-z]+@[a-z-]+(\w...)\.([a-zA-Z]+)/g;
var found = StrObj.match(regex);

function findEmailAddresses(StrObj) {
    return found.slice(0, 3);
}
console.log(found[0]);
console.log(found[1]);
console.log(found[2]);

console.log(findEmailAddresses());

