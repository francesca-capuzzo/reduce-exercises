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

let array1 = ["Pippo", "Paperone", "Gambadilegno", "Basettoni", "Clarabella", "Osvaldo"];


let string = "pippo";

function checkIfStringContainsVowel(string) {
    for (let i = 0; i < string.length; i++) {
        const char = string[i];

        if (char === "a") {
            return true;
        }
        if (char === "e") {
            return true;
        }
        if (char === "i") {
            return true;
        }
        if (char === "o") {
            return true;
        }
        if (char === "u") {
            return true;
        }
    }
    return false;
}


console.log(checkIfStringContainsVowel(string));       //result: true




function checkIfStringContainsVowel2(string) {

    let vowels = ["a", "e", "i", "o", "u"];

    for (let i = 0; i < vowels.length; i++) {
        const vowel = vowels[i];
        if (string.includes(vowel)) {                   //utilizza la funzione INCLUDES()
            return true;
        }
    }
    return false;
}

console.log(checkIfStringContainsVowel2(string));       //result: true



//COMANDI PER EVITARE IL CHECK: ******************************************************
//come per filter ma restituiscono true o false



//array.some();           //true se almeno un caso è true

//array.every();          //true se sono tutti veri

//oppure array.!some() o array.!every()



function checkIfStringContainsVowel3(string) {
    
    let vowels = ["a", "e", "i", "o", "u"];
    return vowels.some((v) => string.includes(v));

}

console.log(checkIfStringContainsVowel3(string));          //result: true



function checkIfStringContainsVowel4(string) {
    
    let vowels = ["a", "e", "i", "o", "u"];
    return vowels.every((v) => string.includes(v));

}

console.log(checkIfStringContainsVowel4(string));          //result: false




function checkIfStringContainsVowel5(string) {

    return ["a", "e", "i", "o", "u"].some((v) => string.includes(v));
}

console.log(checkIfStringContainsVowel5(string));         //return: true


////////////////////////////////////////////////////////////////////////////////


function arrayOfVowels(string) { 
    let arrayFromString = [...string];                        //trasformo la stringa in un array
    let vowelsArray = arrayFromString.filter(v => checkIfStringContainsVowel(v));
    return vowelsArray;
}

console.log(arrayOfVowels(string));


console.log(arrayOfVowels(string).join());                     //ottengo una stringa dall'array, separate da una virgola

console.log(arrayOfVowels(string).join(""));                   //stessa cosa ma sostituisco la virgola con una stringa vuota (spazio)


//*************************************************************************************** */

let arrayOfVow = arrayOfVowels(string);

let setOfVowels = new Set(arrayOfVow);

let stringOfVowels = [...setOfVowels].join("");

console.log(setOfVowels);


console.log([...new Set(arrayOfVowels(string))].join(""));






//reduce --> array delle vocali *******************************************************************






function fromStringToArrayOfVowels([...array]) {
    let tempArray = [];
    let vow = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < array.length; i++) {
        const character = array[i];
        if (vow.includes(character)) {
            tempArray.push(character)
        }
    }
    return tempArray;
}


function buildVowelArray(previous, current) {
    previous.push(...fromStringToArrayOfVowels(current));
    return previous;
}


console.log(array1.reduce(buildVowelArray, []));





//reduce --> stringa con le consonanti senza ripetizione  --> cercare struttura dati SET (insieme) che non accetta duplicati, quindi trasformare l'array in set e poi trasformarlo in stringa


let newArray1 = array1.map((e) => e.toLowerCase());

function fromStringToArrayOfConsonants([...array]) {
    let tempArray = [];
    let vow = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < array.length; i++) {
        const character = array[i];
        if (!vow.includes(character)) {
            tempArray.push(character)
        }
    }
    return tempArray;
}


function buildConsonantArray(previous, current) {
    previous.push(...fromStringToArrayOfConsonants(current));
    return previous;
}


console.log("from string of consonants", fromStringToArrayOfConsonants([...newArray1]));

let arrayOfConsonants = newArray1.reduce(buildConsonantArray, []);

let setOfConsonants = new Set(arrayOfConsonants);

let stringOfConsonants = [...setOfConsonants].join("");

console.log(stringOfConsonants);




///////////////////////////////////////////////////////////////////////////////

//map --> che cambia maiuscole in minuscole e viceversa ----> poi trasforma in reduce

function arrayToUpperCase(array) {
    let upperCase = array.toUpperCase();
    return upperCase;
}

function arrayToLowerCase(array) {
    let lowerCase = array.toLowerCase();
    return lowerCase;
}

console.log("array to lower case", array1.map(arrayToLowerCase));

console.log("array to upper case", array1.map(arrayToUpperCase));





let array10 = ["Pippo", "Paperone", "Gambadilegno", "Basettoni", "Clarabella", "Osvaldo"];

let upAndLow = array10.map(item => item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase());

console.log(upAndLow);





var swapCase = function([...array]){
    var newLetters = " ";
    for(var i = 0; i < array.length; i++){
        if(array[i] === array[i].toLowerCase()){
            newLetters += array[i].toUpperCase();
        }else {
            newLetters += array[i].toLowerCase();
        }
    }
    return newLetters;
}

console.log(swapCase(newArray1));

//filter --> tenga solo le stringhe che contengono "b" ----> poi trasforma in reduce

// let emptyArray = [];
// function keepStringContainingB(array) {
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (element.includes("b")) {
//             emptyArray.push(element);
//         }
//     }
//     return emptyArray;
// }

// console.log(emptyArray);
// console.log("keep b",newArray1.filter(keepStringContainingB()));






let p = ["r"];

function keepStringContainingB(array) {
    return p.some((v) => array.includes(v));
}

console.log(keepStringContainingB(array1));

console.log(array1.filter(keepStringContainingB));





//FOR LOOPS *****************************************************************************************


let array4 = ["Pippo", "Paperone", "Gambadilegno", "Basettoni", "Clarabella", "Osvaldo"];




array4.forEach((element) => console.log(element));       //result: stampa tutti gli elementi di array4




for (const string of array4) {
    console.log(string.toUpperCase());                    //result: rende tutti gli elementi di array4 maiuscole
}



array4.forEach((e) => console.log(e.toUpperCase()));      //result: rende tutti gli elementi di array4 maiuscole (uguale al precedente)


//SORT ********************************************************************************************************

console.log(array.sort());                  //result: [-1234, -2, 0, 1, 12, 2, 23456, 3, 345]          --> ordine di grandezza

console.log(array4.sort());                 //result: ['Basettoni', 'Clarabella', 'Gambadilegno', 'Osvaldo', 'Paperone', 'Pippo']       ---> ordine alfabetico 





//NB: LOCALECOMPARE() PRENDE L'ULTIMO LOG FATTO E TUTTI GLI ALTRI ANDRANNO IN BASE ALLE REGOLE SCRITTE NELL'ULTIMA FUNZIONE!!!
//PER GUARDARE IL RESULT IN OGNUNA DELLE FUNZIONI SEGUENTI, DEVO COMMENTARE IL RESTO!!! --> sort() MODIFICA L'ARRAY ORIGINALE!!!!!!


let stud1 = {name: "pippo", age: 10, gender: "m"};
let stud2 = {name: "pluto", age: 9, gender: "m"};
let stud3 = {name: "paperina", age: 12, gender: "f"};

let students = [stud1, stud2, stud3]


console.log(students.sort());              //risultato: non cambia nulla perchè è un oggetto complesso da sortare... quindi uso una high order function (compareStudents):




function compareStudents(st1, st2) {
    if (st1.age > st2.age) {
        return 1;                          //return studente con l'età minore
    }
    if (st1.age < st2.age) {
        return -1;                        
    }
    if (st1.age === st2.age) {
        return 0;
    }
}

console.log(students.sort(compareStudents));





function compareStudents1(st1, st2) {
    return st1.name.localeCompare(st2.name);                  //localecompare() --> ordina gli elementi in base alla lingua del sistema!!
}

console.log("alfabetico",students.sort(compareStudents1));




function compareStudents2(st1, st2) {
    return st1.gender.localeCompare(st2.gender);
}

console.log("gender", students.sort(compareStudents2));




function compareStudents3(st1, st2) {
    return st1.age - st2.age;
}

console.log("età", students.sort(compareStudents3));


////////////////////////////////////////////////////////////////////////////////////////////////////

let athlete1 = {name: "giovanni", surname: "landi", position: 2};
let athlete2 = {name: "lorena", surname: "landi", position: 2};
let athlete3 = {name: "pippo", surname: "barbigli", position: 1};
let athlete4 = {name: "simona", surname: "perri", position: 3};
let athlete5 = {name: "elmo", surname: "recalcati", position: 2};

let athletes = [athlete1, athlete2, athlete3, athlete4, athlete5];

// athletes.sort((ath1, ath2) => ath1.position - ath2.position);

console.log(athletes.sort());


function compareBySurname(ath1, ath2) {
    return ath1.surname.localeCompare(ath2.surname)
}


console.log(athletes.sort(compareBySurname));




function compareByPosition(ath1, ath2) {
    return ath1.position - ath2.position;
}

console.log(athletes.sort(compareByPosition));




function compareByPositionPlus(ath1, ath2) {
    if (ath1.position === ath2.position) {
        if (ath1.surname === ath2.surname) {
            return ath1.name.localeCompare(ath2.name);
        } else {
            return ath1.surname.localeCompare(ath2.surname);
        }
    } else {
        return ath1.position - ath2.position;
    }
}

console.log(athletes.sort(compareByPositionPlus));