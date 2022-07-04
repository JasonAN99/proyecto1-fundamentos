let dia1 = prompt ("Digite el dia de nacimiento de la primera persona:");
let mes1 = prompt ("Digite el mes de nacimiento de la primera persona (en formato numérico):");
let dia2 = prompt ("Digite el dia de nacimiento de la segunda persona:");
let mes2 = prompt ("Digite el mes de nacimiento de la segunda persona (en formato numérico):");
let signo1, signo2;

if (dia1 > 31 && mes1 == 3) {
    alert ("Por favor digite un día válido entre 1 y 31");
} else if (dia1 == 18 && mes1 == 3 || dia1 == 19 && mes1 == 3 || dia1 == 20 && mes1 == 3 || dia1 == 21 && mes1 == 3 || dia1 == 22 && mes1 == 3) {
    signo1 = "Piscis-Aries"
} else if (dia1 > 20 && mes1 == 3 || dia1 < 19 && mes1 == 4) {
    signo1 = "Aries"
} else if (dia1 > 30 && mes1 == 4) {
      alert ("Por favor digite un día válido entre 1 y 30");
} else if (dia1 == 19 && mes1 == 4 || dia1 == 20 && mes1 == 4 || dia1 == 21 && mes1 == 4 || dia1 == 22 && mes1 == 4 || dia1 == 23 && mes1 == 4) {
    signo1 = "Aries-Tauro"
} else if (dia1 > 20 && mes1 == 4 || dia1 < 19 && mes1 == 5) {
    signo1 = "Tauro"
} else if (dia1 > 31 && mes1 == 5) {
    alert ("Por favor digite un día válido entre 1 y 31");
} else if (dia1 == 19 && mes1 == 5 || dia1 == 20 && mes1 == 5 || dia1 == 21 && mes1 == 5 || dia1 == 22 && mes1 == 5 || dia1 == 23 && mes1 == 5) {
    signo1 = "Tauro-Géminis"
} else if (dia1 > 21 && mes1 == 5 || dia1 < 19 && mes1 == 6) {
    signo1 = "Géminis"
} else if (dia1 > 30 && mes1 == 6) {
    alert ("Por favor digite un día válido entre 1 y 30");
} else if (dia1 == 19 && mes1 == 6 || dia1 == 20 && mes1 == 6 || dia1 == 21 && mes1 == 6 || dia1 == 22 && mes1 == 6 || dia1 == 23 && mes1 == 6) {
    signo1 = "Géminis-Cáncer"
} else if (dia1 > 21 && mes1 == 6 || dia1 < 20 && mes1 == 7) {
   signo1 = "Cáncer"
} else if (dia1 > 31 && mes1 == 7) {
    alert ("Por favor digite un día válido entre 1 y 31");
} else if (dia1 == 20 && mes1 == 7 || dia1 == 21 && mes1 == 7 || dia1 == 22 && mes1 == 7 || dia1 == 23 && mes1 == 7 || dia1 == 24 && mes1 == 7) {
    signo1 = "Cáncer-Leo"
} else if (dia1 > 22 && mes1 == 7 || dia1 < 20 && mes1 == 8) {
    signo1 = "Leo"
} else if (dia1 > 31 && mes1 == 8) {
    alert ("Por favor digite un día válido entre 1 y 31");
} else if (dia1 == 20 && mes1 == 8 || dia1 == 21 && mes1 == 8 || dia1 == 22 && mes1 == 8 || dia1 == 23 && mes1 == 8 || dia1 == 24 && mes1 == 8) {
    signo1 = "Leo-Virgo"
} else if (dia1 > 22 && mes1 == 8 || dia1 < 20 && mes1 == 9) {
    signo1 = "Virgo"
} else if (dia1 > 30 && mes1 == 9) {
    alert ("Por favor digite un día válido entre 1 y 30");
} else if (dia1 == 20 && mes1 == 9 || dia1 == 21 && mes1 == 9 || dia1 == 22 && mes1 == 9 || dia1 == 23 && mes1 == 9 || dia1 == 24 && mes1 == 9) {
    signo1 = "Virgo-Libra"
} else if (dia1 > 22 && mes1 == 9 || dia1 < 20 && mes1 == 10) {
    signo1 = "Libra"
} else if (dia1 > 31 && mes1 == 10) {
    alert ("Por favor digite un día válido entre 1 y 31");
} else if (dia1 == 20 && mes1 == 10 || dia1 == 21 && mes1 == 10 || dia1 == 22 && mes1 == 10 || dia1 == 23 && mes1 == 10 || dia1 == 24 && mes1 == 10) {
    signo1 = "Libra-Escorpio"
} else if (dia1 > 22 && mes1 == 10 || dia1 < 20 && mes1 == 11) {
    signo1 = "Escorpio"
} else if (dia1 > 30 && mes1 == 11) {
    alert ("Por favor digite un día válido entre 1 y 30");
} else if (dia1 == 20 && mes1 == 11 || dia1 == 21 && mes1 == 11 || dia1 == 22 && mes1 == 11 || dia1 == 23 && mes1 == 11 || dia1 == 24 && mes1 == 11) {
    signo1 = "Escorpio-Sagitario"
} else if (dia1 > 22 && mes1 == 11 || dia1 < 19 && mes1 == 12) {
    signo1 = "Sagitario"
} else if (dia1 > 31 && mes1 == 12) {
    alert ("Por favor digite un día válido entre 1 y 31");
} else if (dia1 == 19 && mes1 == 12 || dia1 == 20 && mes1 == 12 || dia1 == 21 && mes1 == 12 || dia1 == 22 && mes1 == 12 || dia1 == 23 && mes1 == 12) {
    signo1 = "Sagitario-Capricornio"
} else if (dia1 > 21 && mes1 == 12 || dia1 < 18 && mes1 == 1) {
    signo1 = "Capricornio"
} else if (dia1 > 31 && mes1 == 1) {
    alert ("Por favor digite un día válido entre 1 y 31");
} else if (dia1 == 18 && mes1 == 1 || dia1 == 19 && mes1 == 1 || dia1 == 20 && mes1 == 1 || dia1 == 21 && mes1 == 1 || dia1 == 22 && mes1 == 1) {
    signo1 = "Capricornio-Acuario"
} else if (dia1 > 20 && mes1 == 1 || dia1 < 17 && mes1 == 2) {
    signo1 = "Acuario"
} else if (dia1 > 29 && mes1 == 2) {
    alert ("Por favor digite un día válido entre 1 y 29");
} else if (dia1 == 17 && mes1 == 2 || dia1 == 18 && mes1 == 2 || dia1 == 19 && mes1 == 2 || dia1 == 20 && mes1 == 2 || dia1 == 21 && mes1 == 2 || dia1 == 22 && mes1 == 2) {
    signo1 = "Acuario-Piscis"
} else if (dia1 > 19 && mes1 == 2 || dia1 < 18 && mes1 == 3) {
    signo1 = "Piscis"
} else if (mes1 > 12) {
    alert ("Por favor digite un mes válido entre 1 y 12");
} else {
    alert ("Por favor digite valores válidos en formato numérico");
}

if (dia2 > 31 && mes2 == 3) {
    alert ("Por favor digite un día válido entre 1 y 31");
} else if (dia2 == 18 && mes2 == 3 || dia2 == 19 && mes2 == 3 || dia2 == 20 && mes2 == 3 || dia2 == 21 && mes2 == 3 || dia2 == 22 && mes2 == 3) {
    signo2 = "Piscis-Aries"
} else if (dia2 > 20 && mes2 == 3 || dia2 < 19 && mes2 == 4) {
    signo2 = "Aries"
} else if (dia2 > 30 && mes2 == 4) {
    alert ("Por favor digite un día válido entre 1 y 30");
} else if (dia2 == 19 && mes2 == 4 || dia2 == 20 && mes2 == 4 || dia2 == 21 && mes2 == 4 || dia2 == 22 && mes2 == 4 || dia2 == 23 && mes2 == 4) {
    signo2 = "Aries-Tauro"
} else if (dia2 > 20 && mes2 == 4 || dia2 < 19 && mes2 == 5) {
    signo2 = "Tauro"
} else if (dia2 > 31 && mes2 == 5) {
    alert ("Por favor digite un día válido entre 1 y 31");
} else if (dia2 == 19 && mes2 == 5 || dia2 == 20 && mes2 == 5 || dia2 == 21 && mes2 == 5 || dia2 == 22 && mes2 == 5 || dia2 == 23 && mes2 == 5) {
    signo2 = "Tauro-Géminis"
} else if (dia2 > 21 && mes2 == 5 || dia2 < 19 && mes2 == 6) {
    signo2 = "Géminis"
} else if (dia2 > 30 && mes2 == 6) {
    alert ("Por favor digite un día válido entre 1 y 30");
} else if (dia2 == 19 && mes2 == 6 || dia2 == 20 && mes2 == 6 || dia2 == 21 && mes2 == 6 || dia2 == 22 && mes2 == 6 || dia2 == 23 && mes2 == 6) {
    signo2 = "Géminis-Cáncer"
} else if (dia2 > 21 && mes2 == 6 || dia2 < 20 && mes2 == 7) {
    signo2 = "Cáncer"
} else if (dia2 > 31 && mes2 == 7) {
    alert ("Por favor digite un día válido entre 1 y 31");
} else if (dia2 == 20 && mes2 == 7 || dia2 == 21 && mes2 == 7 || dia2 == 22 && mes2 == 7 || dia2 == 23 && mes2 == 7 || dia2 == 24 && mes2 == 7) {
    signo2 = "Cáncer-Leo"
} else if (dia2 > 22 && mes2 == 7 || dia2 < 20 && mes2 == 8) {
    signo2 = "Leo"
} else if (dia2 > 31 && mes2 == 8) {
    alert ("Por favor digite un día válido entre 1 y 31");
} else if (dia2 == 20 && mes2 == 8 || dia2 == 21 && mes2 == 8 || dia2 == 22 && mes2 == 8 || dia2 == 23 && mes2 == 8 || dia2 == 24 && mes2 == 8) {
    signo2 = "Leo-Virgo"
} else if (dia2 > 22 && mes2 == 8 || dia2 < 20 && mes2 == 9) {
    signo2 = "Virgo"
} else if (dia2 > 30 && mes2 == 9) {
    alert ("Por favor digite un día válido entre 1 y 30");
} else if (dia2 == 20 && mes2 == 9 || dia2 == 21 && mes2 == 9 || dia2 == 22 && mes2 == 9 || dia2 == 23 && mes2 == 9 || dia2 == 24 && mes2 == 9) {
    signo2 = "Virgo-Libra"
} else if (dia2 > 22 && mes2 == 9 || dia2 < 20 && mes2 == 10) {
    signo2 = "Libra"
} else if (dia2 > 31 && mes2 == 10) {
    alert ("Por favor digite un día válido entre 1 y 31");
} else if (dia2 == 20 && mes2 == 10 || dia2 == 21 && mes2 == 10 || dia2 == 22 && mes2 == 10 || dia2 == 23 && mes2 == 10 || dia2 == 24 && mes2 == 10) {
    signo2 = "Libra-Escorpio"
} else if (dia2 > 22 && mes2 == 10 || dia2 < 20 && mes2 == 11) {
    signo2 = "Escorpio"
} else if (dia2 > 30 && mes2 == 11) {
    alert ("Por favor digite un día válido entre 1 y 30");
} else if (dia2 == 20 && mes2 == 11 || dia2 == 21 && mes2 == 11 || dia2 == 22 && mes2 == 11 || dia2 == 23 && mes2 == 11 || dia2 == 24 && mes2 == 11) {
    signo2 = "Escorpio-Sagitario"
} else if (dia2 > 22 && mes2 == 11 || dia2 < 19 && mes2 == 12) {
    signo2 = "Sagitario"
} else if (dia2 > 31 && mes2 == 12) {
    alert ("Por favor digite un día válido entre 1 y 31");
} else if (dia2 == 19 && mes2 == 12 || dia2 == 20 && mes2 == 12 || dia2 == 21 && mes2 == 12 || dia2 == 22 && mes2 == 12 || dia2 == 23 && mes2 == 12) {
    signo2 = "Sagitario-Capricornio"
} else if (dia2 > 21 && mes2 == 12 || dia2 < 18 && mes2 == 1) {
    signo2 = "Capricornio"
} else if (dia2 > 31 && mes2 == 1) {
    alert ("Por favor digite un día válido entre 1 y 31");
} else if (dia2 == 18 && mes2 == 1 || dia2 == 19 && mes2 == 1 || dia2 == 20 && mes2 == 1 || dia2 == 21 && mes2 == 1 || dia2 == 22 && mes2 == 1) {
    signo2 = "Capricornio-Acuario"
} else if (dia2 > 20 && mes2 == 1 || dia2 < 17 && mes2 == 2) {
    signo2 = "Acuario"
} else if (dia2 > 29 && mes2 == 2) {
    alert ("Por favor digite un día válido entre 1 y 29");
} else if (dia2 == 17 && mes2 == 2 || dia2 == 18 && mes2 == 2 || dia2 == 19 && mes2 == 2 || dia2 == 20 && mes2 == 2 || dia2 == 21 && mes2 == 2 || dia2 == 22 && mes2 == 2) {
    signo2 = "Acuario-Piscis"
} else if (dia2 > 19 && mes2 == 2 || dia2 < 18 && mes2 == 3) {
    signo2 = "Piscis"
} else if (mes2 > 12) {
    alert ("Por favor digite un mes válido entre 1 y 12");
} else {
    alert ("Por favor digite valores válidos en formato numérico");
}

if (signo1 == "Géminis" && signo2 == "Géminis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Géminis" && signo2 == "Piscis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Géminis" && signo2 == "Escorpio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Géminis" && signo2 == "Tauro") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Géminis" && signo2 == "Libra") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Géminis" && signo2 == "Cáncer") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Géminis" && signo2 == "Sagitario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibilidad media");
} else if (signo1 == "Géminis" && signo2 == "Leo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Géminis" && signo2 == "Acuario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Géminis" && signo2 == "Aries") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Géminis" && signo2 == "Virgo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibilidad media");
} else if (signo1 == "Géminis" && signo2 == "Capricornio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibilidad media");
} else if (signo1 == "Géminis" && signo2 == "Aries-Tauro") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Géminis y Aries) es: Compatibles y en el segundo caso (Géminis y Tauro) es: No compatibles");
} else if (signo1 == "Géminis" && signo2 == "Tauro-Géminis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Géminis y Tauro) es: No compatibles y en el segundo caso (Géminis y Géminis) es: Compatibles");
} else if (signo1 == "Géminis" && signo2 == "Géminis-Cáncer") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Géminis y Géminis) es: Compatibles y en el segundo caso (Géminis y Cáncer) es: No compatibles");
} else if (signo1 == "Géminis" && signo2 == "Cáncer-Leo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Géminis y Cáncer) es: No compatibles y en el segundo caso (Géminis y Leo) es: Compatibles");
} else if (signo1 == "Géminis" && signo2 == "Leo-Virgo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Géminis y Leo) es: Compatibles y en el segundo caso (Géminis y Virgo) es: Compatibilidad media");
} else if (signo1 == "Géminis" && signo2 == "Virgo-Libra") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Géminis y Virgo) es: Compatibilidad media y en el segundo caso (Géminis y Libra) es: Compatibles");
} else if (signo1 == "Géminis" && signo2 == "Libra-Escorpio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Géminis y Libra) es: Compatibles y en el segundo caso (Géminis y Escorpio) es: No compatibles");
} else if (signo1 == "Géminis" && signo2 == "Escorpio-Sagitario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Géminis y Escorpio) es: No compatibles y en el segundo caso (Géminis y Sagitario) es: Compatibilidad media");
} else if (signo1 == "Géminis" && signo2 == "Sagitario-Capricornio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Géminis y Sagitario) es: Compatibilidad media y en el segundo caso (Géminis y Capricornio) es: Compatibilidad media");
} else if (signo1 == "Géminis" && signo2 == "Capricornio-Acuario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Géminis y Capricornio) es: Compatibilidad media y en el segundo caso (Géminis y Acuario) es: Compatibles");
} else if (signo1 == "Géminis" && signo2 == "Acuario-Piscis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Géminis y Acuario) es: Compatibles y en el segundo caso (Géminis y Piscis) es: No compatibles");
} else if (signo1 == "Géminis" && signo2 == "Piscis-Aries") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Géminis y Piscis) es: No compatibles y en el segundo caso (Géminis y Aries) es: Compatibles");
}

if (signo1 == "Piscis" && signo2 == "Géminis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Piscis" && signo2 == "Piscis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Piscis" && signo2 == "Escorpio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Piscis" && signo2 == "Tauro") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Piscis" && signo2 == "Libra") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Piscis" && signo2 == "Cáncer") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Piscis" && signo2 == "Sagitario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibilidad media");
} else if (signo1 == "Piscis" && signo2 == "Leo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibilidad media");
} else if (signo1 == "Piscis" && signo2 == "Acuario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Piscis" && signo2 == "Aries") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibilidad media");
} else if (signo1 == "Piscis" && signo2 == "Virgo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibilidad media");
} else if (signo1 == "Piscis" && signo2 == "Capricornio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Piscis" && signo2 == "Aries-Tauro") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Piscis y Aries) es: Compatibilidad media y en el segundo caso (Piscis y Tauro) es: Compatibles");
} else if (signo1 == "Piscis" && signo2 == "Tauro-Géminis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Piscis y Tauro) es: Compatibles y en el segundo caso (Piscis y Géminis) es: No compatibles");
} else if (signo1 == "Piscis" && signo2 == "Géminis-Cáncer") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Piscis y Géminis) es: No compatibles y en el segundo caso (Piscis y Cáncer) es: Compatibles");
} else if (signo1 == "Piscis" && signo2 == "Cáncer-Leo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Piscis y Cáncer) es: Compatibles y en el segundo caso (Piscis y Leo) es: Compatibilidad media");
} else if (signo1 == "Piscis" && signo2 == "Leo-Virgo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Piscis y Leo) es: Compatibilidad media y en el segundo caso (Piscis y Virgo) es: Compatibilidad media");
} else if (signo1 == "Piscis" && signo2 == "Virgo-Libra") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Piscis y Virgo) es: Compatibilidad media y en el segundo caso (Piscis y Libra) es: No compatibles");
} else if (signo1 == "Piscis" && signo2 == "Libra-Escorpio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Piscis y Libra) es: No compatibles y en el segundo caso (Piscis y Escorpio) es: Compatibles");
} else if (signo1 == "Piscis" && signo2 == "Escorpio-Sagitario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Piscis y Escorpio) es: Compatibles y en el segundo caso (Piscis y Sagitario) es: Compatibilidad media");
} else if (signo1 == "Piscis" && signo2 == "Sagitario-Capricornio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Piscis y Sagitario) es: Compatibilidad media y en el segundo caso (Piscis y Capricornio) es: Compatibles");
} else if (signo1 == "Piscis" && signo2 == "Capricornio-Acuario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Piscis y Capricornio) es: Compatibles y en el segundo caso (Piscis y Acuario) es: No compatibles");
} else if (signo1 == "Piscis" && signo2 == "Acuario-Piscis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Piscis y Acuario) es: No compatibles y en el segundo caso (Piscis y Piscis) es: Compatibles");
} else if (signo1 == "Piscis" && signo2 == "Piscis-Aries") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Piscis y Piscis) es: Compatibles y en el segundo caso (Piscis y Aries) es: Compatibilidad media");
}

if (signo1 == "Escorpio" && signo2 == "Géminis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Escorpio" && signo2 == "Piscis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Escorpio" && signo2 == "Escorpio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Escorpio" && signo2 == "Tauro") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Escorpio" && signo2 == "Libra") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Escorpio" && signo2 == "Cáncer") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Escorpio" && signo2 == "Sagitario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No Compatibles");
} else if (signo1 == "Escorpio" && signo2 == "Leo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibilidad media");
} else if (signo1 == "Escorpio" && signo2 == "Acuario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Escorpio" && signo2 == "Aries") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibilidad media");
} else if (signo1 == "Escorpio" && signo2 == "Virgo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Escorpio" && signo2 == "Capricornio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Escorpio" && signo2 == "Aries-Tauro") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Escorpio y Aries) es: Compatibilidad media y en el segundo caso (Escorpio y Tauro) es: Compatibles");
} else if (signo1 == "Escorpio" && signo2 == "Tauro-Géminis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Escorpio y Tauro) es: Compatibles y en el segundo caso (Escorpio y Géminis) es: No compatibles");
} else if (signo1 == "Escorpio" && signo2 == "Géminis-Cáncer") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Escorpio y Géminis) es: No compatibles y en el segundo caso (Escorpio y Cáncer) es: Compatibles");
} else if (signo1 == "Escorpio" && signo2 == "Cáncer-Leo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Escorpio y Cáncer) es: Compatibles y en el segundo caso (Escorpio y Leo) es: Compatibilidad media");
} else if (signo1 == "Escorpio" && signo2 == "Leo-Virgo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Escorpio y Leo) es: Compatibilidad media y en el segundo caso (Escorpio y Virgo) es: Compatibles");
} else if (signo1 == "Escorpio" && signo2 == "Virgo-Libra") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Escorpio y Virgo) es: Compatibles y en el segundo caso (Escorpio y Libra) es: No compatibles");
} else if (signo1 == "Escorpio" && signo2 == "Libra-Escorpio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Escorpio y Libra) es: No compatibles y en el segundo caso (Escorpio y Escorpio) es: Compatibles");
} else if (signo1 == "Escorpio" && signo2 == "Escorpio-Sagitario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Escorpio y Escorpio) es: Compatibles y en el segundo caso (Escorpio y Sagitario) es: No compatibles");
} else if (signo1 == "Escorpio" && signo2 == "Sagitario-Capricornio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Escorpio y Sagitario) es: No compatibles y en el segundo caso (Escorpio y Capricornio) es: Compatibles");
} else if (signo1 == "Escorpio" && signo2 == "Capricornio-Acuario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Escorpio y Capricornio) es: Compatibles y en el segundo caso (Escorpio y Acuario) es: No compatibles");
} else if (signo1 == "Escorpio" && signo2 == "Acuario-Piscis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Escorpio y Acuario) es: No compatibles y en el segundo caso (Escorpio y Piscis) es: Compatibles");
} else if (signo1 == "Escorpio" && signo2 == "Piscis-Aries") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Escorpio y Piscis) es: Compatibles y en el segundo caso (Escorpio y Aries) es: Compatibilidad media");
}

if (signo1 == "Tauro" && signo2 == "Géminis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Tauro" && signo2 == "Piscis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Tauro" && signo2 == "Escorpio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Tauro" && signo2 == "Tauro") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Tauro" && signo2 == "Libra") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibilidad media");
} else if (signo1 == "Tauro" && signo2 == "Cáncer") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Tauro" && signo2 == "Sagitario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Tauro" && signo2 == "Leo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibilidad media");
} else if (signo1 == "Tauro" && signo2 == "Acuario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Tauro" && signo2 == "Aries") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Tauro" && signo2 == "Virgo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Tauro" && signo2 == "Capricornio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Tauro" && signo2 == "Aries-Tauro") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Tauro y Aries) es: No compatibles y en el segundo caso (Tauro y Tauro) es: Compatibles");
} else if (signo1 == "Tauro" && signo2 == "Tauro-Géminis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Tauro y Tauro) es: Compatibles y en el segundo caso (Tauro y Géminis) es: No compatibles");
} else if (signo1 == "Tauro" && signo2 == "Géminis-Cáncer") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Tauro y Géminis) es: No compatibles y en el segundo caso (Tauro y Cáncer) es: Compatibles");
} else if (signo1 == "Tauro" && signo2 == "Cáncer-Leo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Tauro y Cáncer) es: Compatibles y en el segundo caso (Tauro y Leo) es: Compatibilidad media");
} else if (signo1 == "Tauro" && signo2 == "Leo-Virgo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Tauro y Leo) es: Compatibilidad media y en el segundo caso (Tauro y Virgo) es: Compatibles");
} else if (signo1 == "Tauro" && signo2 == "Virgo-Libra") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Tauro y Virgo) es: Compatibles y en el segundo caso (Tauro y Libra) es: Compatibilidad media");
} else if (signo1 == "Tauro" && signo2 == "Libra-Escorpio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Tauro y Libra) es: Compatibilidad media y en el segundo caso (Tauro y Escorpio) es: Compatibles");
} else if (signo1 == "Tauro" && signo2 == "Escorpio-Sagitario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Tauro y Escorpio) es: Compatibles y en el segundo caso (Tauro y Sagitario) es: No compatibles");
} else if (signo1 == "Tauro" && signo2 == "Sagitario-Capricornio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Tauro y Sagitario) es: No compatibles y en el segundo caso (Tauro y Capricornio) es: Compatibles");
} else if (signo1 == "Tauro" && signo2 == "Capricornio-Acuario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Tauro y Capricornio) es: Compatibles y en el segundo caso (Tauro y Acuario) es: No compatibles");
} else if (signo1 == "Tauro" && signo2 == "Acuario-Piscis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Tauro y Acuario) es: No compatibles y en el segundo caso (Tauro y Piscis) es: Compatibles");
} else if (signo1 == "Tauro" && signo2 == "Piscis-Aries") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Tauro y Piscis) es: Compatibles y en el segundo caso (Tauro y Aries) es: No compatibles");
}

if (signo1 == "Libra" && signo2 == "Géminis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Libra" && signo2 == "Piscis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibilidad media");
} else if (signo1 == "Libra" && signo2 == "Escorpio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Libra" && signo2 == "Tauro") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibilidad media");
} else if (signo1 == "Libra" && signo2 == "Libra") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Libra" && signo2 == "Cáncer") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Libra" && signo2 == "Sagitario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Libra" && signo2 == "Leo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Libra" && signo2 == "Acuario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Libra" && signo2 == "Aries") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibilidad media");
} else if (signo1 == "Libra" && signo2 == "Virgo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Libra" && signo2 == "Capricornio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Libra" && signo2 == "Aries-Tauro") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Libra y Aries) es: Compatibilidad media y en el segundo caso (Libra y Tauro) es: Compatibilidad media");
} else if (signo1 == "Libra" && signo2 == "Tauro-Géminis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Libra y Tauro) es: Compatibilidad media y en el segundo caso (Libra y Géminis) es: Compatibles");
} else if (signo1 == "Libra" && signo2 == "Géminis-Cáncer") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Libra y Géminis) es: Compatibles y en el segundo caso (Libra y Cáncer) es: No compatibles");
} else if (signo1 == "Libra" && signo2 == "Cáncer-Leo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Libra y Cáncer) es: No compatibles y en el segundo caso (Libra y Leo) es: Compatibles");
} else if (signo1 == "Libra" && signo2 == "Leo-Virgo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Libra y Leo) es: Compatibles y en el segundo caso (Libra y Virgo) es: No compatibles");
} else if (signo1 == "Libra" && signo2 == "Virgo-Libra") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Libra y Virgo) es: No ompatibles y en el segundo caso (Libra y Libra) es: Compatibles");
} else if (signo1 == "Libra" && signo2 == "Libra-Escorpio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Libra y Libra) es: Compatibles y en el segundo caso (Libra y Escorpio) es: No compatibles");
} else if (signo1 == "Libra" && signo2 == "Escorpio-Sagitario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Libra y Escorpio) es: No compatibles y en el segundo caso (Libra y Sagitario) es: Compatibles");
} else if (signo1 == "Libra" && signo2 == "Sagitario-Capricornio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Libra y Sagitario) es: Compatibles y en el segundo caso (Libra y Capricornio) es: No compatibles");
} else if (signo1 == "Libra" && signo2 == "Capricornio-Acuario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Libra y Capricornio) es: No compatibles y en el segundo caso (Libra y Acuario) es: Compatibles");
} else if (signo1 == "Libra" && signo2 == "Acuario-Piscis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Libra y Acuario) es: Compatibles y en el segundo caso (Libra y Piscis) es: Compatibilidad media");
} else if (signo1 == "Libra" && signo2 == "Piscis-Aries") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Libra y Piscis) es: Compatibilidad media y en el segundo caso (Libra y Aries) es: Compatibilidad media");
}

if (signo1 == "Cáncer" && signo2 == "Géminis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Cáncer" && signo2 == "Piscis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Cáncer" && signo2 == "Escorpio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Cáncer" && signo2 == "Tauro") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Cáncer" && signo2 == "Libra") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Cáncer" && signo2 == "Cáncer") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Cáncer" && signo2 == "Sagitario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibilidad media");
} else if (signo1 == "Cáncer" && signo2 == "Leo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibilidad media");
} else if (signo1 == "Cáncer" && signo2 == "Acuario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Cáncer" && signo2 == "Aries") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Cáncer" && signo2 == "Virgo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Cáncer" && signo2 == "Capricornio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Cáncer" && signo2 == "Aries-Tauro") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Cáncer y Aries) es: No compatibles y en el segundo caso (Cáncer y Tauro) es: Compatibles");
} else if (signo1 == "Cáncer" && signo2 == "Tauro-Géminis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Cáncer y Tauro) es: Compatibles y en el segundo caso (Cáncer y Géminis) es: No compatibles");
} else if (signo1 == "Cáncer" && signo2 == "Géminis-Cáncer") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Cáncer y Géminis) es: No compatibles y en el segundo caso (Cáncer y Cáncer) es: Compatibles");
} else if (signo1 == "Cáncer" && signo2 == "Cáncer-Leo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Cáncer y Cáncer) es: Compatibles y en el segundo caso (Cáncer y Leo) es: Compatibilidad media");
} else if (signo1 == "Cáncer" && signo2 == "Leo-Virgo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Cáncer y Leo) es: Compatibilidad media y en el segundo caso (Cáncer y Virgo) es: Compatibles");
} else if (signo1 == "Cáncer" && signo2 == "Virgo-Libra") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Cáncer y Virgo) es: Compatibles y en el segundo caso (Cáncer y Libra) es: No compatibles");
} else if (signo1 == "Cáncer" && signo2 == "Libra-Escorpio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Cáncer y Libra) es: No compatibles y en el segundo caso (Cáncer y Escorpio) es: Compatibles");
} else if (signo1 == "Cáncer" && signo2 == "Escorpio-Sagitario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Cáncer y Escorpio) es: Compatibles y en el segundo caso (Cáncer y Sagitario) es: Compatibilidad media");
} else if (signo1 == "Cáncer" && signo2 == "Sagitario-Capricornio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Cáncer y Sagitario) es: Compatibilidad media y en el segundo caso (Cáncer y Capricornio) es: Compatibles");
} else if (signo1 == "Cáncer" && signo2 == "Capricornio-Acuario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Cáncer y Capricornio) es: Compatibles y en el segundo caso (Cáncer y Acuario) es: No compatibles");
} else if (signo1 == "Cáncer" && signo2 == "Acuario-Piscis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Cáncer y Acuario) es: No compatibles y en el segundo caso (Cáncer y Piscis) es: Compatibles");
} else if (signo1 == "Cáncer" && signo2 == "Piscis-Aries") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Cáncer y Piscis) es: Compatibles y en el segundo caso (Cáncer y Aries) es: No compatibles");
}

if (signo1 == "Sagitario" && signo2 == "Géminis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Sagitario" && signo2 == "Piscis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibilidad media");
} else if (signo1 == "Sagitario" && signo2 == "Escorpio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibilidad media");
} else if (signo1 == "Sagitario" && signo2 == "Tauro") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Sagitario" && signo2 == "Libra") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Sagitario" && signo2 == "Cáncer") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibilidad media");
} else if (signo1 == "Sagitario" && signo2 == "Sagitario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Sagitario" && signo2 == "Leo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Sagitario" && signo2 == "Acuario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Sagitario" && signo2 == "Aries") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Sagitario" && signo2 == "Virgo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Sagitario" && signo2 == "Capricornio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Sagitario" && signo2 == "Aries-Tauro") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Sagitario y Aries) es: Compatibles y en el segundo caso (Sagitario y Tauro) es: No compatibles");
} else if (signo1 == "Sagitario" && signo2 == "Tauro-Géminis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Sagitario y Tauro) es: No compatibles y en el segundo caso (Sagitario y Géminis) es: Compatibles");
} else if (signo1 == "Sagitario" && signo2 == "Géminis-Cáncer") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Sagitario y Géminis) es: Compatibles y en el segundo caso (Sagitario y Cáncer) es: Compatibilidad media");
} else if (signo1 == "Sagitario" && signo2 == "Cáncer-Leo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Sagitario y Cáncer) es: Compatibilidad media y en el segundo caso (Sagitario y Leo) es: Compatibles");
} else if (signo1 == "Sagitario" && signo2 == "Leo-Virgo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Sagitario y Leo) es: Compatibles y en el segundo caso (Sagitario y Virgo) es: No compatibles");
} else if (signo1 == "Sagitario" && signo2 == "Virgo-Libra") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Sagitario y Virgo) es: No compatibles y en el segundo caso (Sagitario y Libra) es: Compatibles");
} else if (signo1 == "Sagitario" && signo2 == "Libra-Escorpio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Sagitario y Libra) es: Compatibles y en el segundo caso (Sagitario y Escorpio) es: Compatibilidad media");
} else if (signo1 == "Sagitario" && signo2 == "Escorpio-Sagitario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Sagitario y Escorpio) es: Compatibilidad media y en el segundo caso (Sagitario y Sagitario) es: Compatibles");
} else if (signo1 == "Sagitario" && signo2 == "Sagitario-Capricornio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Sagitario y Sagitario) es: Compatibles y en el segundo caso (Sagitario y Capricornio) es: No compatibles");
} else if (signo1 == "Sagitario" && signo2 == "Capricornio-Acuario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Sagitario y Capricornio) es: No compatibles y en el segundo caso (Sagitario y Acuario) es: Compatibles");
} else if (signo1 == "Sagitario" && signo2 == "Acuario-Piscis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Sagitario y Acuario) es: Compatibles y en el segundo caso (Sagitario y Piscis) es: No compatibilidad media");
} else if (signo1 == "Sagitario" && signo2 == "Piscis-Aries") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Sagitario y Piscis) es: bilidad media y en el segundo caso (Sagitario y Aries) es: Compatibles");
}

if (signo1 == "Leo" && signo2 == "Géminis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Leo" && signo2 == "Piscis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibilidad media");
} else if (signo1 == "Leo" && signo2 == "Escorpio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibilidad media");
} else if (signo1 == "Leo" && signo2 == "Tauro") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibilidad media");
} else if (signo1 == "Leo" && signo2 == "Libra") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Leo" && signo2 == "Cáncer") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibilidad media");
} else if (signo1 == "Leo" && signo2 == "Sagitario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Leo" && signo2 == "Leo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Leo" && signo2 == "Acuario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibilidad media");
} else if (signo1 == "Leo" && signo2 == "Aries") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Leo" && signo2 == "Virgo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Leo" && signo2 == "Capricornio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Leo" && signo2 == "Aries-Tauro") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Leo y Aries) es: Compatibles y en el segundo caso (Leo y Tauro) es: Compatibilidad media");
} else if (signo1 == "Leo" && signo2 == "Tauro-Géminis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Leo y Tauro) es: Compatibilidad media y en el segundo caso (Leo y Géminis) es: Compatibles");
} else if (signo1 == "Leo" && signo2 == "Géminis-Cáncer") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Leo y Géminis) es: Compatibles y en el segundo caso (Leo y Cáncer) es: Compatibilidad media");
} else if (signo1 == "Leo" && signo2 == "Cáncer-Leo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Leo y Cáncer) es: Compatibilidad media y en el segundo caso (Leo y Leo) es: Compatibles");
} else if (signo1 == "Leo" && signo2 == "Leo-Virgo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Leo y Leo) es: Compatibles y en el segundo caso (Leo y Virgo) es: No compatibles");
} else if (signo1 == "Leo" && signo2 == "Virgo-Libra") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Leo y Virgo) es: No compatibles y en el segundo caso (Leo y Libra) es: Compatibles");
} else if (signo1 == "Leo" && signo2 == "Libra-Escorpio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Leo y Libra) es: Compatibles y en el segundo caso (Leo y Escorpio) es: Compatibilidad media");
} else if (signo1 == "Leo" && signo2 == "Escorpio-Sagitario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Leo y Escorpio) es: Compatibilidad media y en el segundo caso (Leo y Sagitario) es: Compatibles");
} else if (signo1 == "Leo" && signo2 == "Sagitario-Capricornio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Leo y Sagitario) es: Compatibles y en el segundo caso (Leo y Capricornio) es: No compatibles");
} else if (signo1 == "Leo" && signo2 == "Capricornio-Acuario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Leo y Capricornio) es: No compatibles y en el segundo caso (Leo y Acuario) es: Compatibilidad media");
} else if (signo1 == "Leo" && signo2 == "Acuario-Piscis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Leo y Acuario) es: Compatibilidad media y en el segundo caso (Leo y Piscis) es: Compatibilidad media");
} else if (signo1 == "Leo" && signo2 == "Piscis-Aries") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Leo y Piscis) es: Compatibilidad media y en el segundo caso (Leo y Aries) es: Compatibles");
}

if (signo1 == "Acuario" && signo2 == "Géminis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Acuario" && signo2 == "Piscis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibilidad media");
} else if (signo1 == "Acuario" && signo2 == "Escorpio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibilidad media");
} else if (signo1 == "Acuario" && signo2 == "Tauro") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Acuario" && signo2 == "Libra") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Acuario" && signo2 == "Cáncer") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Acuario" && signo2 == "Sagitario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Acuario" && signo2 == "Leo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Acuario" && signo2 == "Acuario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Acuario" && signo2 == "Aries") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Acuario" && signo2 == "Virgo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Acuario" && signo2 == "Capricornio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Acuario" && signo2 == "Aries-Tauro") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Acuario y Aries) es: Compatibles y en el segundo caso (Acuario y Tauro) es: No compatibles");
} else if (signo1 == "Acuario" && signo2 == "Tauro-Géminis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Acuario y Tauro) es: No compatibles y en el segundo caso (Acuario y Géminis) es: Compatibles");
} else if (signo1 == "Acuario" && signo2 == "Géminis-Cáncer") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Acuario y Géminis) es: Compatibles y en el segundo caso (Acuario y Cáncer) es: No compatibles");
} else if (signo1 == "Acuario" && signo2 == "Cáncer-Leo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Acuario y Cáncer) es: No compatibles y en el segundo caso (Acuario y Leo) es: Compatibles");
} else if (signo1 == "Acuario" && signo2 == "Leo-Virgo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Acuario y Leo) es: Compatibles y en el segundo caso (Acuario y Virgo) es: No compatibles");
} else if (signo1 == "Acuario" && signo2 == "Virgo-Libra") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Acuario y Virgo) es: No compatibles y en el segundo caso (Acuario y Libra) es: Compatibles");
} else if (signo1 == "Acuario" && signo2 == "Libra-Escorpio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Acuario y Libra) es: Compatibles y en el segundo caso (Acuario y Escorpio) es: Compatibilidad media");
} else if (signo1 == "Acuario" && signo2 == "Escorpio-Sagitario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Acuario y Escorpio) es: Compatibilidad media y en el segundo caso (Acuario y Sagitario) es: Compatibles");
} else if (signo1 == "Acuario" && signo2 == "Sagitario-Capricornio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Acuario y Sagitario) es: Compatibles y en el segundo caso (Acuario y Capricornio) es: No compatibles");
} else if (signo1 == "Acuario" && signo2 == "Capricornio-Acuario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Acuario y Capricornio) es: No compatibles y en el segundo caso (Acuario y Acuario) es: Compatibles");
} else if (signo1 == "Acuario" && signo2 == "Acuario-Piscis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Acuario y Acuario) es: Compatibles y en el segundo caso (Acuario y Piscis) es: Compatibilidad media");
} else if (signo1 == "Acuario" && signo2 == "Piscis-Aries") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Acuario y Piscis) es: Compatibilidad media y en el segundo caso (Acuario y Aries) es: Compatibles");
}

if (signo1 == "Aries" && signo2 == "Géminis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Aries" && signo2 == "Piscis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibilidad media");
} else if (signo1 == "Aries" && signo2 == "Escorpio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Aries" && signo2 == "Tauro") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Aries" && signo2 == "Libra") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Aries" && signo2 == "Cáncer") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Aries" && signo2 == "Sagitario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Aries" && signo2 == "Leo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Aries" && signo2 == "Acuario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Aries" && signo2 == "Aries") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Aries" && signo2 == "Virgo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibilidad media");
} else if (signo1 == "Aries" && signo2 == "Capricornio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Aries" && signo2 == "Aries-Tauro") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Aries y Aries) es: Compatibles y en el segundo caso (Aries y Tauro) es: No compatibles");
} else if (signo1 == "Aries" && signo2 == "Tauro-Géminis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Aries y Tauro) es: No compatibles y en el segundo caso (Aries y Géminis) es: Compatibles");
} else if (signo1 == "Aries" && signo2 == "Géminis-Cáncer") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Aries y Géminis) es: Compatibles y en el segundo caso (Aries y Cáncer) es: No compatibles");
} else if (signo1 == "Aries" && signo2 == "Cáncer-Leo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Aries y Cáncer) es: No compatibles y en el segundo caso (Aries y Leo) es: Compatibles");
} else if (signo1 == "Aries" && signo2 == "Leo-Virgo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Aries y Leo) es: Compatibles y en el segundo caso (Aries y Virgo) es: Compatibilidad media");
} else if (signo1 == "Aries" && signo2 == "Virgo-Libra") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Aries y Virgo) es: Compatibilidad media y en el segundo caso (Aries y Libra) es: Compatibles");
} else if (signo1 == "Aries" && signo2 == "Libra-Escorpio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Aries y Libra) es: Compatibles y en el segundo caso (Aries y Escorpio) es: No compatibles");
} else if (signo1 == "Aries" && signo2 == "Escorpio-Sagitario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Aries y Escorpio) es: No compatibles y en el segundo caso (Aries y Sagitario) es: Compatibles");
} else if (signo1 == "Aries" && signo2 == "Sagitario-Capricornio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Aries y Sagitario) es: Compatibles y en el segundo caso (Aries y Capricornio) es: No compatibles");
} else if (signo1 == "Aries" && signo2 == "Capricornio-Acuario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Aries y Capricornio) es: No compatibles y en el segundo caso (Aries y Acuario) es: Compatibles");
} else if (signo1 == "Aries" && signo2 == "Acuario-Piscis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Aries y Acuario) es: Compatibles y en el segundo caso (Aries y Piscis) es: Compatibilidad media");
} else if (signo1 == "Aries" && signo2 == "Piscis-Aries") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Aries y Piscis) es: Compatibilidad media y en el segundo caso (Aries y Aries) es: Compatibles");
}

if (signo1 == "Virgo" && signo2 == "Géminis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Virgo" && signo2 == "Piscis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Virgo" && signo2 == "Escorpio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Virgo" && signo2 == "Tauro") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Virgo" && signo2 == "Libra") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Virgo" && signo2 == "Cáncer") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Virgo" && signo2 == "Sagitario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Virgo" && signo2 == "Leo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibilidad media");
} else if (signo1 == "Virgo" && signo2 == "Acuario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibilidad media");
} else if (signo1 == "Virgo" && signo2 == "Aries") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Virgo" && signo2 == "Virgo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Virgo" && signo2 == "Capricornio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Virgo" && signo2 == "Aries-Tauro") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Virgo y Aries) es: No compatibles y en el segundo caso (Virgo y Tauro) es: Compatibles");
} else if (signo1 == "Virgo" && signo2 == "Tauro-Géminis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Virgo y Tauro) es: Compatibles y en el segundo caso (Virgo y Géminis) es: No compatibles");
} else if (signo1 == "Virgo" && signo2 == "Géminis-Cáncer") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Virgo y Géminis) es: No compatibles y en el segundo caso (Virgo y Cáncer) es: Compatibles");
} else if (signo1 == "Virgo" && signo2 == "Cáncer-Leo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Virgo y Cáncer) es: Compatibles y en el segundo caso (Virgo y Leo) es: Compatibilidad media");
} else if (signo1 == "Virgo" && signo2 == "Leo-Virgo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Virgo y Leo) es: Compatibilidad media y en el segundo caso (Virgo y Virgo) es: Compatibles");
} else if (signo1 == "Virgo" && signo2 == "Virgo-Libra") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Virgo y Virgo) es: Compatibles y en el segundo caso (Virgo y Libra) es: No compatibles");
} else if (signo1 == "Virgo" && signo2 == "Libra-Escorpio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Virgo y Libra) es: No compatibles y en el segundo caso (Virgo y Escorpio) es: Compatibles");
} else if (signo1 == "Virgo" && signo2 == "Escorpio-Sagitario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Virgo y Escorpio) es: Compatibles y en el segundo caso (Virgo y Sagitario) es: No compatibles");
} else if (signo1 == "Virgo" && signo2 == "Sagitario-Capricornio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Virgo y Sagitario) es: No compatibles y en el segundo caso (Virgo y Capricornio) es: Compatibles");
} else if (signo1 == "Virgo" && signo2 == "Capricornio-Acuario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Virgo y Capricornio) es: Compatibles y en el segundo caso (Virgo y Acuario) es: Compatibilidad media");
} else if (signo1 == "Virgo" && signo2 == "Acuario-Piscis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Virgo y Acuario) es: Compatibilidad media y en el segundo caso (Virgo y Piscis) es: Compatibles");
} else if (signo1 == "Virgo" && signo2 == "Piscis-Aries") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Virgo y Piscis) es: Compatibles y en el segundo caso (Virgo y Aries) es: No compatibles");
}

if (signo1 == "Capricornio" && signo2 == "Géminis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Capricornio" && signo2 == "Piscis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Capricornio" && signo2 == "Escorpio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Capricornio" && signo2 == "Tauro") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Capricornio" && signo2 == "Libra") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibilidad media");
} else if (signo1 == "Capricornio" && signo2 == "Cáncer") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Capricornio" && signo2 == "Sagitario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Capricornio" && signo2 == "Leo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibilidad media");
} else if (signo1 == "Capricornio" && signo2 == "Acuario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Capricornio" && signo2 == "Aries") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: No compatibles");
} else if (signo1 == "Capricornio" && signo2 == "Virgo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Capricornio" && signo2 == "Capricornio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " por lo tanto su compatibilidad es: Compatibles");
} else if (signo1 == "Capricornio" && signo2 == "Aries-Tauro") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Capricornio y Aries) es: No compatibles y en el segundo caso (Capricornio y Tauro) es: Compatibles");
} else if (signo1 == "Capricornio" && signo2 == "Tauro-Géminis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Capricornio y Tauro) es: Compatibles y en el segundo caso (Capricornio y Géminis) es: No compatibles");
} else if (signo1 == "Capricornio" && signo2 == "Géminis-Cáncer") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Capricornio y Géminis) es: No compatibles y en el segundo caso (Capricornio y Cáncer) es: Compatibles");
} else if (signo1 == "Capricornio" && signo2 == "Cáncer-Leo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Capricornio y Cáncer) es: Compatibles y en el segundo caso (Capricornio y Leo) es: Compatibilidad media");
} else if (signo1 == "Capricornio" && signo2 == "Leo-Virgo") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Capricornio y Leo) es: Compatibilidad media y en el segundo caso (Capricornio y Virgo) es: Compatibles");
} else if (signo1 == "Capricornio" && signo2 == "Virgo-Libra") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Capricornio y Virgo) es: Compatibles y en el segundo caso (Capricornio y Libra) es: Compatibilidad media");
} else if (signo1 == "Capricornio" && signo2 == "Libra-Escorpio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Capricornio y Libra) es: Compatibilidad media y en el segundo caso (Capricornio y Escorpio) es: Compatibles");
} else if (signo1 == "Capricornio" && signo2 == "Escorpio-Sagitario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Capricornio y Escorpio) es: Compatibles y en el segundo caso (Capricornio y Sagitario) es: No compatibles");
} else if (signo1 == "Capricornio" && signo2 == "Sagitario-Capricornio") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Capricornio y Sagitario) es: No compatibles y en el segundo caso (Capricornio y Capricornio) es: Compatibles");
} else if (signo1 == "Capricornio" && signo2 == "Capricornio-Acuario") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Capricornio y Capricornio) es: Compatibles y en el segundo caso (Capricornio y Acuario) es: No compatibles");
} else if (signo1 == "Capricornio" && signo2 == "Acuario-Piscis") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Capricornio y Acuario) es: No compatibles y en el segundo caso (Capricornio y Piscis) es: Compatibles");
} else if (signo1 == "Capricornio" && signo2 == "Piscis-Aries") {
    alert ("La primera persona es " + signo1 + " y la segunda persona es " + signo2 + " debido a los días cúspide del zodiaco, por lo tanto su compatibilidad en el primer caso (Capricornio y Piscis) es: Compatibles y en el segundo caso (Capricornio y Aries) es: No compatibles");
}

if (signo1 == "Aries-Tauro" && signo2 == "Géminis") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Aries y Géminis) es: Compatibles y en el segundo caso (Tauro y Géminis) es: No compatibles");
} else if (signo1 == "Aries-Tauro" && signo2 == "Piscis") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Aries y Piscis) es: Compatibilidad media y en el segundo caso (Tauro y Piscis) es: Compatibles");
} else if (signo1 == "Aries-Tauro" && signo2 == "Escorpio") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Aries y Escorpio) es: No compatibles y en el segundo caso (Tauro y Escorpio) es: Compatibles");
} else if (signo1 == "Aries-Tauro" && signo2 == "Tauro") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Aries y Tauro) es: No compatibles y en el segundo caso (Tauro y Tauro) es: Compatibles");
} else if (signo1 == "Aries-Tauro" && signo2 == "Libra") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Aries y Libra) es: Compatibles y en el segundo caso (Tauro y Libra) es: Compatibilidad media");
} else if (signo1 == "Aries-Tauro" && signo2 == "Cáncer") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Aries y Cáncer) es: No compatibles y en el segundo caso (Tauro y Cáncer) es: Compatibles");
} else if (signo1 == "Aries-Tauro" && signo2 == "Sagitario") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Aries y Sagitario) es: Compatibles y en el segundo caso (Tauro y Sagitario) es: No compatibles");
} else if (signo1 == "Aries-Tauro" && signo2 == "Leo") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Aries y Leo) es: Compatibles y en el segundo caso (Tauro y Leo) es: Compatibilidad media");
} else if (signo1 == "Aries-Tauro" && signo2 == "Acuario") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Aries y Acuario) es: Compatibles y en el segundo caso (Tauro y Acuario) es: No compatibles");
} else if (signo1 == "Aries-Tauro" && signo2 == "Aries") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Aries y Aries) es: Compatibles y en el segundo caso (Tauro y Aries) es: No compatibles");
} else if (signo1 == "Aries-Tauro" && signo2 == "Virgo") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Aries y Virgo) es: Compatibilidad media y en el segundo caso (Tauro y Virgo) es: Compatibles");
} else if (signo1 == "Aries-Tauro" && signo2 == "Capricornio") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Aries y Capricornio) es: No compatibles y en el segundo caso (Tauro y Capricornio) es: Compatibles");
}

if (signo1 == "Tauro-Géminis" && signo2 == "Géminis") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Tauro y Géminis) es: No compatibles y en el segundo caso (Géminis y Géminis) es: Compatibles");
} else if (signo1 == "Tauro-Géminis" && signo2 == "Piscis") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Tauro y Piscis) es: Compatibles y en el segundo caso (Géminis y Piscis) es: No compatibles");
} else if (signo1 == "Tauro-Géminis" && signo2 == "Escorpio") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Tauro y Escorpio) es: Compatibles y en el segundo caso (Géminis y Escorpio) es: No compatibles");
} else if (signo1 == "Tauro-Géminis" && signo2 == "Tauro") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Tauro y Tauro) es: Compatibles y en el segundo caso (Géminis y Tauro) es: No compatibles");
} else if (signo1 == "Tauro-Géminis" && signo2 == "Libra") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Tauro y Libra) es: Compatibilidad media y en el segundo caso (Géminis y Libra) es: Compatibles");
} else if (signo1 == "Tauro-Géminis" && signo2 == "Cáncer") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Tauro y Cáncer) es: Compatibles y en el segundo caso (Géminis y Cáncer) es: No compatibles");
} else if (signo1 == "Tauro-Géminis" && signo2 == "Sagitario") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Tauro y Sagitario) es: No compatibles y en el segundo caso (Géminis y Sagitario) es: Compatibilidad media");
} else if (signo1 == "Tauro-Géminis" && signo2 == "Leo") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Tauro y Leo) es: Compatibilidad media y en el segundo caso (Géminis y Leo) es: Compatibles");
} else if (signo1 == "Tauro-Géminis" && signo2 == "Acuario") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Tauro y Acuario) es: No compatibles y en el segundo caso (Géminis y Acuario) es: Compatibles");
} else if (signo1 == "Tauro-Géminis" && signo2 == "Aries") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Tauro y Aries) es: No compatibles y en el segundo caso (Géminis y Aries) es: Compatibles");
} else if (signo1 == "Tauro-Géminis" && signo2 == "Virgo") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Tauro y Virgo) es: Compatibles y en el segundo caso (Géminis y Virgo) es: Compatibilidad media");
} else if (signo1 == "Tauro-Géminis" && signo2 == "Capricornio") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Tauro y Capricornio) es: Compatibles y en el segundo caso (Géminis y Capricornio) es: Compatibilidad media");
}

if (signo1 == "Géminis-Cáncer" && signo2 == "Géminis") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Géminis y Géminis) es: Compatibles y en el segundo caso (Cáncer y Géminis) es: No compatibles");
} else if (signo1 == "Géminis-Cáncer" && signo2 == "Piscis") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Géminis y Piscis) es: No compatibles y en el segundo caso (Cáncer y Piscis) es: Compatibles");
} else if (signo1 == "Géminis-Cáncer" && signo2 == "Escorpio") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Géminis y Escorpio) es: No compatibles y en el segundo caso (Cáncer y Escorpio) es: Compatibles");
} else if (signo1 == "Géminis-Cáncer" && signo2 == "Tauro") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Géminis y Tauro) es: No compatibles y en el segundo caso (Cáncer y Tauro) es: Compatibles");
} else if (signo1 == "Géminis-Cáncer" && signo2 == "Libra") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Géminis y Libra) es: Compatibles y en el segundo caso (Cáncer y Libra) es: No compatibles");
} else if (signo1 == "Géminis-Cáncer" && signo2 == "Cáncer") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Géminis y Cáncer) es: No compatibles y en el segundo caso (Cáncer y Cáncer) es: Compatibles");
} else if (signo1 == "Géminis-Cáncer" && signo2 == "Sagitario") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Géminis y Sagitario) es: Compatibilidad media y en el segundo caso (Cáncer y Sagitario) es: Compatibilidad media");
} else if (signo1 == "Géminis-Cáncer" && signo2 == "Leo") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Géminis y Leo) es: Compatibles y en el segundo caso (Cáncer y Leo) es: Compatibilidad media");
} else if (signo1 == "Géminis-Cáncer" && signo2 == "Acuario") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Géminis y Acuario) es: Compatibles y en el segundo caso (Cáncer y Acuario) es: No compatibles");
} else if (signo1 == "Géminis-Cáncer" && signo2 == "Aries") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Géminis y Aries) es: Compatibles y en el segundo caso (Cáncer y Aries) es: No compatibles");
} else if (signo1 == "Géminis-Cáncer" && signo2 == "Virgo") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Géminis y Virgo) es: Compatibilidad media y en el segundo caso (Cáncer y Virgo) es: Compatibles");
} else if (signo1 == "Géminis-Cáncer" && signo2 == "Capricornio") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Géminis y Capricornio) es: Compatibilidad media y en el segundo caso (Cáncer y Capricornio) es: Compatibles");
}

if (signo1 == "Cáncer-Leo" && signo2 == "Géminis") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Cáncer y Géminis) es: No compatibles y en el segundo caso (Leo y Géminis) es: Compatibles");
} else if (signo1 == "Cáncer-Leo" && signo2 == "Piscis") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Cáncer y Piscis) es: Compatibles y en el segundo caso (Leo y Piscis) es: Compatibilidad media");
} else if (signo1 == "Cáncer-Leo" && signo2 == "Escorpio") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Cáncer y Escorpio) es: Compatibles y en el segundo caso (Leo y Escorpio) es: Compatibilidad media");
} else if (signo1 == "Cáncer-Leo" && signo2 == "Tauro") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Cáncer y Tauro) es: Compatibles y en el segundo caso (Leo y Tauro) es: Compatibilidad media");
} else if (signo1 == "Cáncer-Leo" && signo2 == "Libra") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Cáncer y Libra) es: No compatibles y en el segundo caso (Leo y Libra) es: Compatibles");
} else if (signo1 == "Cáncer-Leo" && signo2 == "Cáncer") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Cáncer y Cáncer) es: Compatibles y en el segundo caso (Leo y Cáncer) es: Compatibilidad media");
} else if (signo1 == "Cáncer-Leo" && signo2 == "Sagitario") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Cáncer y Sagitario) es: Compatibilidad media y en el segundo caso (Leo y Sagitario) es: Compatibles");
} else if (signo1 == "Cáncer-Leo" && signo2 == "Leo") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Cáncer y Leo) es: Compatibilidad media y en el segundo caso (Leo y Leo) es: Compatibles");
} else if (signo1 == "Cáncer-Leo" && signo2 == "Acuario") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Cáncer y Acuario) es: No compatibles y en el segundo caso (Leo y Acuario) es: Compatibilidad media");
} else if (signo1 == "Cáncer-Leo" && signo2 == "Aries") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Cáncer y Aries) es: No compatibles y en el segundo caso (Leo y Aries) es: Compatibles");
} else if (signo1 == "Cáncer-Leo" && signo2 == "Virgo") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Cáncer y Virgo) es: Compatibles y en el segundo caso (Leo y Virgo) es: No compatibles");
} else if (signo1 == "Cáncer-Leo" && signo2 == "Capricornio") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Cáncer y Capricornio) es: Compatibles y en el segundo caso (Leo y Capricornio) es: No compatibles");
}

if (signo1 == "Leo-Virgo" && signo2 == "Géminis") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Leo y Géminis) es: Compatibles y en el segundo caso (Virgo y Géminis) es: No compatibles");
} else if (signo1 == "Leo-Virgo" && signo2 == "Piscis") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Leo y Piscis) es: Compatibilidad media y en el segundo caso (Virgo y Piscis) es: Compatibles");
} else if (signo1 == "Leo-Virgo" && signo2 == "Escorpio") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Leo y Escorpio) es: Compatibilidad media y en el segundo caso (Virgo y Escorpio) es: Compatibles");
} else if (signo1 == "Leo-Virgo" && signo2 == "Tauro") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Leo y Tauro) es: Compatibilidad media y en el segundo caso (Virgo y Tauro) es: Compatibles");
} else if (signo1 == "Leo-Virgo" && signo2 == "Libra") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Leo y Libra) es: Compatibles y en el segundo caso (Virgo y Libra) es: No compatibles");
} else if (signo1 == "Leo-Virgo" && signo2 == "Cáncer") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Leo y Cáncer) es: Compatibilidad media y en el segundo caso (Virgo y Cáncer) es: Compatibles");
} else if (signo1 == "Leo-Virgo" && signo2 == "Sagitario") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Leo y Sagitario) es: Compatibles y en el segundo caso (Virgo y Sagitario) es: No compatibles");
} else if (signo1 == "Leo-Virgo" && signo2 == "Leo") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Leo y Leo) es: Compatibles y en el segundo caso (Virgo y Leo) es: Compatibilidad media");
} else if (signo1 == "Leo-Virgo" && signo2 == "Acuario") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Leo y Acuario) es: Compatibilidad media y en el segundo caso (Virgo y Acuario) es: Compatibilidad media");
} else if (signo1 == "Leo-Virgo" && signo2 == "Aries") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Leo y Aries) es: Compatibles y en el segundo caso (Virgo y Aries) es: No compatibles");
} else if (signo1 == "Leo-Virgo" && signo2 == "Virgo") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Leo y Virgo) es: No compatibles y en el segundo caso (Virgo y Virgo) es: Compatibles");
} else if (signo1 == "Leo-Virgo" && signo2 == "Capricornio") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Leo y Capricornio) es: No compatibles y en el segundo caso (Virgo y Capricornio) es: Compatibles");
}

if (signo1 == "Virgo-Libra" && signo2 == "Géminis") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Virgo y Géminis) es: No compatibles y en el segundo caso (Libra y Géminis) es: Compatibles");
} else if (signo1 == "Virgo-Libra" && signo2 == "Piscis") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Virgo y Piscis) es: Compatibles y en el segundo caso (Libra y Piscis) es: Compatibilidad media");
} else if (signo1 == "Virgo-Libra" && signo2 == "Escorpio") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Virgo y Escorpio) es: Compatibles y en el segundo caso (Libra y Escorpio) es: No compatibles");
} else if (signo1 == "Virgo-Libra" && signo2 == "Tauro") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Virgo y Tauro) es: Compatibles y en el segundo caso (Libra y Tauro) es: Compatibilidad media");
} else if (signo1 == "Virgo-Libra" && signo2 == "Libra") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Virgo y Libra) es: No compatibles y en el segundo caso (Libra y Libra) es: Compatibles");
} else if (signo1 == "Virgo-Libra" && signo2 == "Cáncer") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Virgo y Cáncer) es: Compatibles y en el segundo caso (Libra y Cáncer) es: No compatibles");
} else if (signo1 == "Virgo-Libra" && signo2 == "Sagitario") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Virgo y Sagitario) es: No compatibles y en el segundo caso (Libra y Sagitario) es: Compatibles");
} else if (signo1 == "Virgo-Libra" && signo2 == "Leo") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Virgo y Leo) es: Compatibilidad media y en el segundo caso (Libra y Leo) es: Compatibles");
} else if (signo1 == "Virgo-Libra" && signo2 == "Acuario") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Virgo y Acuario) es: Compatibilidad media y en el segundo caso (Libra y Acuario) es: Compatibles");
} else if (signo1 == "Virgo-Libra" && signo2 == "Aries") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Virgo y Aries) es: No compatibles y en el segundo caso (Libra y Aries) es: Compatibilidad media");
} else if (signo1 == "Virgo-Libra" && signo2 == "Virgo") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Virgo y Virgo) es: Compatibles y en el segundo caso (Libra y Virgo) es: No compatibles");
} else if (signo1 == "Virgo-Libra" && signo2 == "Capricornio") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Virgo y Capricornio) es: Compatibles y en el segundo caso (Libra y Capricornio) es: No compatibles");
}

if (signo1 == "Libra-Escorpio" && signo2 == "Géminis") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Libra y Géminis) es: Compatibles y en el segundo caso (Escorpio y Géminis) es: No compatibles");
} else if (signo1 == "Libra-Escorpio" && signo2 == "Piscis") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Libra y Piscis) es: Compatibilidad media y en el segundo caso (Escorpio y Piscis) es: Compatibles");
} else if (signo1 == "Libra-Escorpio" && signo2 == "Escorpio") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Libra y Escorpio) es: No compatibles y en el segundo caso (Escorpio y Escorpio) es: Compatibles");
} else if (signo1 == "Libra-Escorpio" && signo2 == "Tauro") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Libra y Tauro) es: Compatibilidad media y en el segundo caso (Escorpio y Tauro) es: Compatibles");
} else if (signo1 == "Libra-Escorpio" && signo2 == "Libra") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Libra y Libra) es: Compatibles y en el segundo caso (Escorpio y Libra) es: No compatibles");
} else if (signo1 == "Libra-Escorpio" && signo2 == "Cáncer") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Libra y Cáncer) es: No compatibles y en el segundo caso (Escorpio y Cáncer) es: Compatibles");
} else if (signo1 == "Libra-Escorpio" && signo2 == "Sagitario") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Libra y Sagitario) es: Compatibles y en el segundo caso (Escorpio y Sagitario) es: No compatibles");
} else if (signo1 == "Libra-Escorpio" && signo2 == "Leo") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Libra y Leo) es: Compatibles y en el segundo caso (Escorpio y Leo) es: Compatibilidad media");
} else if (signo1 == "Libra-Escorpio" && signo2 == "Acuario") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Libra y Acuario) es: Compatibles y en el segundo caso (Escorpio y Acuario) es: No compatibles");
} else if (signo1 == "Libra-Escorpio" && signo2 == "Aries") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Libra y Aries) es: Compatibilidad media y en el segundo caso (Escorpio y Aries) es: Compatibilidad media");
} else if (signo1 == "Libra-Escorpio" && signo2 == "Virgo") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Libra y Virgo) es: No compatibles y en el segundo caso (Escorpio y Virgo) es: Compatibles");
} else if (signo1 == "Libra-Escorpio" && signo2 == "Capricornio") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Libra y Capricornio) es: No compatibles y en el segundo caso (Escorpio y Capricornio) es: Compatibles");
}

if (signo1 == "Escorpio-Sagitario" && signo2 == "Géminis") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Escorpio y Géminis) es: No compatibles y en el segundo caso (Sagitario y Géminis) es: Compatibles");
} else if (signo1 == "Escorpio-Sagitario" && signo2 == "Piscis") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Escorpio y Piscis) es: Compatibles y en el segundo caso (Sagitario y Piscis) es: Compatibilidad media");
} else if (signo1 == "Escorpio-Sagitario" && signo2 == "Escorpio") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Escorpio y Escorpio) es: Compatibles y en el segundo caso (Sagitario y Escorpio) es: Compatibilidad media");
} else if (signo1 == "Escorpio-Sagitario" && signo2 == "Tauro") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Escorpio y Tauro) es: Compatibles y en el segundo caso (Sagitario y Tauro) es: No compatibles");
} else if (signo1 == "Escorpio-Sagitario" && signo2 == "Libra") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Escorpio y Libra) es: No compatibles y en el segundo caso (Sagitario y Libra) es: Compatibles");
} else if (signo1 == "Escorpio-Sagitario" && signo2 == "Cáncer") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Escorpio y Cáncer) es: Compatibles y en el segundo caso (Sagitario y Cáncer) es: Compatibilidad media");
} else if (signo1 == "Escorpio-Sagitario" && signo2 == "Sagitario") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Escorpio y Sagitario) es: No compatibles y en el segundo caso (Sagitario y Sagitario) es: Compatibles");
} else if (signo1 == "Escorpio-Sagitario" && signo2 == "Leo") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Escorpio y Leo) es: Compatibilidad media y en el segundo caso (Sagitario y Leo) es: Compatibles");
} else if (signo1 == "Escorpio-Sagitario" && signo2 == "Acuario") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Escorpio y Acuario) es: No compatibles y en el segundo caso (Sagitario y Acuario) es: Compatibles");
} else if (signo1 == "Escorpio-Sagitario" && signo2 == "Aries") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Escorpio y Aries) es: Compatibilidad media y en el segundo caso (Sagitario y Aries) es: Compatibles");
} else if (signo1 == "Escorpio-Sagitario" && signo2 == "Virgo") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Escorpio y Virgo) es: Compatibles y en el segundo caso (Sagitario y Virgo) es: No compatibles");
} else if (signo1 == "Escorpio-Sagitario" && signo2 == "Capricornio") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Escorpio y Capricornio) es: Compatibles y en el segundo caso (Sagitario y Capricornio) es: No compatibles");
}

if (signo1 == "Sagitario-Capricornio" && signo2 == "Géminis") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Sagitario y Géminis) es: Compatibles y en el segundo caso (Capricornio y Géminis) es: No compatibles");
} else if (signo1 == "Sagitario-Capricornio" && signo2 == "Piscis") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Sagitario y Piscis) es: Compatibilidad media y en el segundo caso (Capricornio y Piscis) es: Compatibles");
} else if (signo1 == "Sagitario-Capricornio" && signo2 == "Escorpio") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Sagitario y Escorpio) es: Compatibilidad media y en el segundo caso (Capricornio y Escorpio) es: Compatibles");
} else if (signo1 == "Sagitario-Capricornio" && signo2 == "Tauro") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Sagitario y Tauro) es: No compatibles y en el segundo caso (Capricornio y Tauro) es: Compatibles");
} else if (signo1 == "Sagitario-Capricornio" && signo2 == "Libra") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Sagitario y Libra) es: Compatibles y en el segundo caso (Capricornio y Libra) es: Compatibilidad media");
} else if (signo1 == "Sagitario-Capricornio" && signo2 == "Cáncer") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Sagitario y Cáncer) es: Compatibilidad media y en el segundo caso (Capricornio y Cáncer) es: Compatibles");
} else if (signo1 == "Sagitario-Capricornio" && signo2 == "Sagitario") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Sagitario y Sagitario) es: Compatibles y en el segundo caso (Capricornio y Sagitario) es: No compatibles");
} else if (signo1 == "Sagitario-Capricornio" && signo2 == "Leo") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Sagitario y Leo) es: Compatibles y en el segundo caso (Capricornio y Leo) es: Compatibilidad media");
} else if (signo1 == "Sagitario-Capricornio" && signo2 == "Acuario") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Sagitario y Acuario) es: Compatibles y en el segundo caso (Capricornio y Acuario) es: No compatibles");
} else if (signo1 == "Sagitario-Capricornio" && signo2 == "Aries") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Sagitario y Aries) es: Compatibles y en el segundo caso (Capricornio y Aries) es: No compatibles");
} else if (signo1 == "Sagitario-Capricornio" && signo2 == "Virgo") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Sagitario y Virgo) es: No compatibles y en el segundo caso (Capricornio y Virgo) es: Compatibles");
} else if (signo1 == "Sagitario-Capricornio" && signo2 == "Capricornio") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Sagitario y Capricornio) es: No compatibles y en el segundo caso (Capricornio y Capricornio) es: Compatibles");
}

if (signo1 == "Capricornio-Acuario" && signo2 == "Géminis") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Capricornio y Géminis) es: No compatibles y en el segundo caso (Acuario y Géminis) es: Compatibles");
} else if (signo1 == "Capricornio-Acuario" && signo2 == "Piscis") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Capricornio y Piscis) es: Compatibles y en el segundo caso (Acuario y Piscis) es: Compatibilidad media");
} else if (signo1 == "Capricornio-Acuario" && signo2 == "Escorpio") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Capricornio y Escorpio) es: Compatibles y en el segundo caso (Acuario y Escorpio) es: Compatibilidad media");
} else if (signo1 == "Capricornio-Acuario" && signo2 == "Tauro") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Capricornio y Tauro) es: Compatibles y en el segundo caso (Acuario y Tauro) es: No compatibles");
} else if (signo1 == "Capricornio-Acuario" && signo2 == "Libra") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Capricornio y Libra) es: Compatibilidad media y en el segundo caso (Acuario y Libra) es: Compatibles");
} else if (signo1 == "Capricornio-Acuario" && signo2 == "Cáncer") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Capricornio y Cáncer) es: Compatibles y en el segundo caso (Acuario y Cáncer) es: No compatibles");
} else if (signo1 == "Capricornio-Acuario" && signo2 == "Sagitario") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Capricornio y Sagitario) es: No compatibles y en el segundo caso (Acuario y Sagitario) es: Compatibles");
} else if (signo1 == "Capricornio-Acuario" && signo2 == "Leo") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Capricornio y Leo) es: Compatibilidad media y en el segundo caso (Acuario y Leo) es: Compatibles");
} else if (signo1 == "Capricornio-Acuario" && signo2 == "Acuario") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Capricornio y Acuario) es: No compatibles y en el segundo caso (Acuario y Acuario) es: Compatibles");
} else if (signo1 == "Capricornio-Acuario" && signo2 == "Aries") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Capricornio y Aries) es: No compatibles y en el segundo caso (Acuario y Aries) es: Compatibles");
} else if (signo1 == "Capricornio-Acuario" && signo2 == "Virgo") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Capricornio y Virgo) es: Compatibles y en el segundo caso (Acuario y Virgo) es: No compatibles");
} else if (signo1 == "Capricornio-Acuario" && signo2 == "Capricornio") {
    alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Capricornio y Capricornio) es: Compatibles y en el segundo caso (Acuario y Capricornio) es: No compatibles");
}

if (signo1 == "Acuario-Piscis" && signo2 == "Géminis") {
  alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Acuario y Géminis) es: Compatibles y en el segundo caso (Piscis y Géminis) es: No compatibles");
} else if (signo1 == "Acuario-Piscis" && signo2 == "Piscis") {
  alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Acuario y Piscis) es: Compatibilidad media y en el segundo caso (Piscis y Piscis) es: Compatibles");
} else if (signo1 == "Acuario-Piscis" && signo2 == "Escorpio") {
  alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Acuario y Escorpio) es: Compatibilidad media y en el segundo caso (Piscis y Escorpio) es: Compatibles");
} else if (signo1 == "Acuario-Piscis" && signo2 == "Tauro") {
  alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Acuario y Tauro) es: No compatibles y en el segundo caso (Piscis y Tauro) es: Compatibles");
} else if (signo1 == "Acuario-Piscis" && signo2 == "Libra") {
  alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Acuario y Libra) es: Compatibles y en el segundo caso (Piscis y Libra) es: No compatibles");
} else if (signo1 == "Acuario-Piscis" && signo2 == "Cáncer") {
  alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Acuario y Cáncer) es: No compatibles y en el segundo caso (Piscis y Cáncer) es: Compatibles");
} else if (signo1 == "Acuario-Piscis" && signo2 == "Sagitario") {
  alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Acuario y Sagitario) es: Compatibles y en el segundo caso (Piscis y Sagitario) es: Compatibilidad media");
} else if (signo1 == "Acuario-Piscis" && signo2 == "Leo") {
  alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Acuario y Leo) es: Compatibles y en el segundo caso (Piscis y Leo) es: Compatibilidad media");
} else if (signo1 == "Acuario-Piscis" && signo2 == "Acuario") {
  alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Acuario y Acuario) es: Compatibles y en el segundo caso (Piscis y Acuario) es: No compatibles");
} else if (signo1 == "Acuario-Piscis" && signo2 == "Aries") {
  alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Acuario y Aries) es: Compatibles y en el segundo caso (Piscis y Aries) es: Compatibilidad media");
} else if (signo1 == "Acuario-Piscis" && signo2 == "Virgo") {
  alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Acuario y Virgo) es: No compatibles y en el segundo caso (Piscis y Virgo) es: Compatibilidad media");
} else if (signo1 == "Acuario-Piscis" && signo2 == "Capricornio") {
  alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Acuario y Capricornio) es: No compatibles y en el segundo caso (Piscis y Capricornio) es: Compatibles");
}

if (signo1 == "Piscis-Aries" && signo2 == "Géminis") {
  alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Piscis y Géminis) es: No compatibles y en el segundo caso (Aries y Géminis) es: Compatibles");
} else if (signo1 == "Piscis-Aries" && signo2 == "Piscis") {
  alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Piscis y Piscis) es: Compatibles y en el segundo caso (Aries y Piscis) es: Compatibilidad media");
} else if (signo1 == "Piscis-Aries" && signo2 == "Escorpio") {
  alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Piscis y Escorpio) es: Compatibles y en el segundo caso (Aries y Escorpio) es: No compatibles");
} else if (signo1 == "Piscis-Aries" && signo2 == "Tauro") {
  alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Piscis y Tauro) es: Compatibles y en el segundo caso (Aries y Tauro) es: No compatibles");
} else if (signo1 == "Piscis-Aries" && signo2 == "Libra") {
  alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Piscis y Libra) es: No compatibles y en el segundo caso (Aries y Libra) es: Compatibles");
} else if (signo1 == "Piscis-Aries" && signo2 == "Cáncer") {
  alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Piscis y Cáncer) es: Compatibles y en el segundo caso (Aries y Cáncer) es: No compatibles");
} else if (signo1 == "Piscis-Aries" && signo2 == "Sagitario") {
  alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Piscis y Sagitario) es: Compatibilidad media y en el segundo caso (Aries y Sagitario) es: Compatibles");
} else if (signo1 == "Piscis-Aries" && signo2 == "Leo") {
  alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Piscis y Leo) es: Compatibilidad media y en el segundo caso (Aries y Leo) es: Compatibles");
} else if (signo1 == "Piscis-Aries" && signo2 == "Acuario") {
  alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Piscis y Acuario) es: No compatibles y en el segundo caso (Aries y Acuario) es: Compatibles");
} else if (signo1 == "Piscis-Aries" && signo2 == "Aries") {
  alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Piscis y Aries) es: Compatibilidad media y en el segundo caso (Aries y Aries) es: Compatibles");
} else if (signo1 == "Piscis-Aries" && signo2 == "Virgo") {
  alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Piscis y Virgo) es: Compatibilidad media y en el segundo caso (Aries y Virgo) es: Compatibilidad media");
} else if (signo1 == "Piscis-Aries" && signo2 == "Capricornio") {
  alert ("La primera persona es " + signo1 + " debido a los días cúspide del zodiaco y la segunda persona es " + signo2 + ", por lo tanto su compatibilidad en el primer caso (Piscis y Capricornio) es: Compatibles y en el segundo caso (Aries y Capricornio) es: No compatibles");
}