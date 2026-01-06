// test/sumaTestJava.js
const suma = require("../funciones/sumaTest");

let passedTests = 0;
let failedTests = 0;
let totalTests = 0;

// TEST 1
console.log("Test 1: Retorna null si algún parámetro no es numérico");
totalTests++;
let testResult1 = suma("2", 2);

if (testResult1 === null) {
    console.log("Test 1: ✅ Success");
    passedTests++;
} else {
    console.log(`Test 1: Failed. Received ${testResult1}`);
    failedTests++;
}

// TEST 2
console.log("Test 2: Retorna 0 si no se pasa ningún parámetro");
totalTests++;
let testResult2 = suma();

if (testResult2 === 0) {
    console.log("Test 2: ✅ Success");
    passedTests++;
} else {
    console.log(`Test 2: Failed. Received ${testResult2}`);
    failedTests++;
}

// TEST 3
console.log("Test 3: Suma correctamente dos números");
totalTests++;
let testResult3 = suma(1, 2);

if (testResult3 === 3) {
    console.log("Test 3: ✅ Success");
    passedTests++;
} else {
    console.log(`Test 3: Failed. Received ${testResult3}`);
    failedTests++;
}

// TEST 4
console.log("Test 4: Suma cualquier cantidad de números");
totalTests++;
let testResult4 = suma(1, 2, 3, 4, 5);

if (testResult4 === 15) {
    console.log("Test 4: ✅ Success");
    passedTests++;
} else {
    console.log(`Test 4: Failed. Received ${testResult4}`);
    failedTests++;
}

// RESUMEN
console.log("------------------------");
console.log("Passed tests:", passedTests);
console.log("Failed tests:", failedTests);
console.log("Total tests:", totalTests);
