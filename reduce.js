let array = [12, 345, -1234, 1, 0, 23456, -2, 2, 3];


//reduce --> maggiore *********************************************************************


function maggiore(previous, current) {
    
    if (previous < current) {
        return current;
    } else {
        return previous;
    }
}
console.log(array.reduce(maggiore));

console.log(array.reduce((p, c) => c > p ? c : p));

console.log(array.reduce((p, c) => Math.max(p,c)));

console.log(Math.max(...array));


//reduce --> minore dei negativi **********************************************************


function minoreNegativi(previous, current) {
    if (previous < 0){
        if (previous > current) {
            return current;
    
        } else {
            return previous;
        }
    }
    return current;
}
console.log(array.reduce(minoreNegativi));


function minoreNegativi(previous, current) {
    if (previous) {
        if (current < 0) {
            if (current < previous) {
                return current;
            } else {
                return previous;
            }
        } else {
            return previous;
        }
    } else {
        if (current < 0) {
            return current;
        } else {
            return previous;
        }
    }
}


console.log(array.filter((v) => v < 0).reduce((p , c) => c < p ? c : p));


console.log(array.reduce((p, c) => c < 0 ? [...p, c] : p, []).reduce((p, c) => c < p ? c : p));


//reduce --> somma dei numeri pari **********************************************************

function sommaPari(...array) {
    let result = array[0];
    for (let i = 1; i < array.length  ; i++) {
        const element = array[i];
        if (element % 2 === 0) {
            result += element;
        }
    return result;  
    }
}
console.log(array.reduce(sommaPari));



function sommaPari2(previous, current) {
    if (current % 2 === 0) {
        return previous + current;
    } else {
        return previous;
    }
}




console.log(array.reduce((p,c) => c % 2 === 0 ? p + c : p, 0));







////////////////////////////////////////////////////////////////////

let array1 = ["a", "Pippo", "Paperone", "Gambadilegno", "Basettoni", "Clarabella", "Osvaldo"]

//reduce --> array delle vocali

function vocali(...array1) {
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        const element = array1[i];
        if (element === "a" || element === "e" || element === "i" || element === "o" || element === "u") {
            result.push(element)
        }
    return result;
    }

}

console.log(array1.reduce(vocali));








//reduce --> stringa con le consonanti senza ripetizione  --> cercare struttura dati SET (insieme) che non accetta duplicati, quindi trasformare l'array in set e poi trasformarlo in stringa














///////////////////////////////////////////////////////////////////////////////

//map --> che cambia maiuscole in minuscole e viceversa ----> poi trasforma in reduce
//filter --> tenga solo le stringhe che contengono "b" ----> poi trasforma in reduce
