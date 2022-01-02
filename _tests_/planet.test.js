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

  test('should show earth human years in solar Mercury years', () => {
    expect(reusableHuman.toMercury()).toEqual(20 / .24);
    console.log(reusableHuman);
    console.log(reusableHuman.toMercury());
    console.log(reusableHuman.mercuryAge);
  })
  
  test('should show earth human years in solar Venus years', () => {
    expect(reusableHuman.toVenus()).toEqual(20 / .62);
    console.log(reusableHuman);
  })

  test('should show earth human years in solar Mars years', () => {
    expect(reusableHuman.toMars()).toBe(20 / 1.88);
    console.log(reusableHuman);
  })

  test('should show earth human years in solar Jupiter years', () => {
    expect(reusableHuman.toJupiter()).toEqual(20 / 11.86);
  })

  test('should show the years left to live on planet Mercury', () => {
    expect(reusableHuman.toMercury()).toEqual(20 /.24) - (72);
    })

});

