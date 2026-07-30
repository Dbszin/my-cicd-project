const {soma} = require('../src/app');

test('Soma 2 + 2 Deve ser igual a 4', () => {
    expect(soma(2, 2)).toBe(4);
});