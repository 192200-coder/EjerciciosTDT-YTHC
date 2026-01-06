const suma = require("../funciones/suma");

describe("Función suma", () => {

    test("retorna null si algún parámetro no es numérico", () => {
        expect(suma("2", 2)).toBeNull();
    });

    test("retorna 0 si no se pasan parámetros", () => {
        expect(suma()).toBe(0);
    });

    test("suma correctamente dos números", () => {
        expect(suma(1, 2)).toBe(3);
    });

    test("suma cualquier cantidad de números", () => {
        expect(suma(1, 2, 3, 4, 5)).toBe(15);
    });

});
