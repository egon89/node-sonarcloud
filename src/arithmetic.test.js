const arithmetic = require("./arithmetic");

test('should sum numbers', () => {
    expect(arithmetic.sum(2,4)).toBe(6)
})
