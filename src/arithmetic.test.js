const arithmetic = require("./arithmetic");

test('should sum numbers', () => {
    expect(arithmetic.sum(2,2)).toBe(4)
})
