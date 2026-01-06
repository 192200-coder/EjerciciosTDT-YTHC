//funciones/sumaTest.js

/****** */

//Version refactorizada

/****** */
/*const suma = (...args) => {
    // Caso 1: no se pasan parámetros
    if (args.length === 0) {
        return 0;
    }

    // Caso 2: algún parámetro no es número
    for (let arg of args) {
        if (typeof arg !== "number") {
            return null;
        }
    }

    // Caso 3: sumar todos los números
    return args.reduce((acc, current) => acc + current, 0);
};*/

const suma = (...nums) => {
    if (nums.length === 0) return 0;

    let isValid = true;

    for (let i = 0; i < nums.length && isValid; i++) {
        if (typeof nums[i] !== "number") {
            isValid = false;
        }
    }

    if (!isValid) return null;

    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result += nums[i];
    }

    return result;
};

module.exports = suma;