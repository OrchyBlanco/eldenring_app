const { error } = require('console');
const sum = require('./sum');

test('Suma de 1 más 2 es 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('suma de 1 más "a" es undefinded',()=>{
  expect(sum(1,"a")).toBe("1a")
})

test('the data is peanut butter', () => {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});