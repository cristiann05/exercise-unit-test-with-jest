// Importo las funciones desde app.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Prueba para fromEuroToDollar
test("Un euro debería ser 1.07 dólares.", function() {

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros deben ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser 3.745 dólares
});

// Prueba para fromDollarToYen
test("Un dólar debería ser 156.5 yenes.", function() {

    // Uso la función como debe ser usada
    const yen = fromDollarToYen(1);

    // Si 1 dólar son 156.5 yenes, entonces 1 dólar debería ser (1 * 156.5)
    const expected = 1 * 156.5;

    // Hago mi comparación (la prueba)
    expect(yen).toBe(expected); // 1 dólar son 156.5 yenes, entonces 1 dólar debería ser 156.5 yenes
});

// Prueba para fromYenToPound
test("1000 yenes deberían ser 870 libras esterlinas.", function() {
    
    // Uso la función como debe ser usada
    const pounds = fromYenToPound(1000);

    // Si 1 yen son 0.87 libras esterlinas, entonces 1000 yenes deberían ser (1000 * 0.87)
    const expected = 1000 * 0.87;

    // Hago mi comparación (la prueba)
    expect(pounds).toBe(expected); // 1000 yenes son 870 libras esterlinas, entonces 1000 yenes deberían ser 870 libras esterlinas
});
