//Gruppenaufgabe_1:

/*let word = prompt("Bitte gib hier ein:");
let length = word.length
console.log("Die Länge des eingegebenen Wortes ist: " +length);*/

//Gruppenaufgabe_2:

let array = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < array.length; i++) {
  sum += array[i];
}

console.log(sum);

//Gruppenaufgabe_3:


console.log(Math.max.apply(Math, array));

//Gruppenaufgabe_4:

/*function countVowel(str) { 

  
    const count = str.match(/[aeiou]/gi).length;


    return count;
}
const string = prompt('Geben Sie ein Wort: ');

const result = countVowel(string);

console.log(result);*/

//Gruppenaufgabe_5:

/*let satz = prompt("Bitte gib einen Satz ein:");
let numofWords = satz.split(" ");
const wordCount = numofWords.length;

console.log("Anzahl der Wörter:", wordCount);*/

//Gruppenaufgabe_6:

// Einlesen des Benutzereingabe
var palinword = prompt("Bitte geben Sie ein Wort ein, um zu Überprüfen, ob es ein Palindrom ist:");

// Entfernen von Leerzeichen und Umwandlung in Kleinbuchstaben
palinword = palinword.replace(/\s/g, "").toLowerCase();

// Umkehrung des Wortes
var reversedWord = palinword.split("").reverse().join("");

// Überprüfung, ob das umgekehrte Wort mit dem ursprünglichen Wort übereinstimmt
if (palinword === reversedWord) {
  console.log("Das eingegebene Wort ist ein Palindrom.");
} else {
  console.log("Das eingegebene Wort ist kein Palindrom.");
}
