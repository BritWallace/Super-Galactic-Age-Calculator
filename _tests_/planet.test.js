import Human from '../src/planet.js'

describe('Human', () => {
  let reusableHuman;

  beforeEach(() => {
    reusableHuman = new Human(20, 72);
  
  });

  test('should show how beforeEach() works', () => {
    console.log(reusableHuman);
  });

  test('should see a users age and expected life expectancy', () => {
    expect(reusableHuman.maxAge).toEqual(72);

  }); 

  test('should show earth years in solar Mercury years', () => {
    expect(reusableHuman.toMercury()).toEqual(20 / .24);
    console.log(reusableHuman);
    console.log(reusableHuman.toMercury());
    console.log(reusableHuman.mercuryAge);
  })
});

