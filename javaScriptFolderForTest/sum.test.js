const {sum,sub}= require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('substract 10 - 5',() => {
    expect(sub(10,5)).toBe(5)
})

