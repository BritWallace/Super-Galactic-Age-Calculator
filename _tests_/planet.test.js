import Human from '../src/planet.js'

describe('Human', () => {
  let reusableHuman;
  let reusableHumanOverMax;

  beforeEach(() => {
    reusableHuman = new Human(20, 72);
    reusableHumanOverMax = new Human(75);
  
  });

  test('should show how beforeEach() works', () => {
    console.log(reusableHuman);
  });

  test('should see a users age and expected life expectancy', () => {
    expect(reusableHuman.maxAge).toEqual(72);

  }); 

  test('should how Mercury age', () => {
    reusableHuman.toMercury();
    expect(reusableHuman.mercuryAge).toEqual(20 / .24);
  });


  test('should show how many bonus years lived past life expectancy on Mercury', () => {
    let reusableHumanOverMax = new Human(75, 72);
    expect(reusableHumanOverMax.toMercury()).toEqual(13);
    console.log(reusableHuman);
  })
  
  test('should show earth human years in solar Venus years', () => {
    expect(reusableHuman.toVenus()).toEqual(84);
  })

  test('should show earth human years in solar Mars years', () => {
    expect(reusableHuman.toMars()).toBe(20 / 1.88);
  })

  test('should show earth human years in solar Jupiter years', () => {
    expect(reusableHuman.toJupiter()).toEqual(20 / 11.86);
  })
  
  test('should show years left to live on Mercury', () => {
    expect(reusableHuman.toMercury()).toEqual(217);
  })

  test('should show how many bonus years lived past life expectancy on Venus', () => {
    let reusableHumanOverMax = new Human(75, 72);
    expect(reusableHumanOverMax.toVenus()).toEqual(5);
    console.log(reusableHuman);
  
  })

  test('should show how many bonus years lived past life expectancy on Mars', () => {
    let reusableHumanOverMax = new Human(75, 72);
    expect(reusableHumanOverMax.toMars()).toEqual(40);
    console.log(reusableHuman);
  
  })


})
