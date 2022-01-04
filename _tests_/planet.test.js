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

  test('should how Mercury age', () => {
    reusableHuman.toMercury();
    expect(reusableHuman.mercuryAge).toEqual(20 / .24);
  });


  test('should show how many bonus years lived past life expectancy on Mercury', () => {
    expect(reusableHuman.toMercury());Math.abs((75 * .24) - (72 / .24));
    console.log(reusableHuman);
  })
  
  test('should show earth human years in solar Venus years', () => {
    expect(reusableHuman.toVenus()).toEqual(20 / .62);
  })

  test('should show earth human years in solar Mars years', () => {
    expect(reusableHuman.toMars()).toBe(20 / 1.88);
  })

  test('should show earth human years in solar Jupiter years', () => {
    expect(reusableHuman.toJupiter()).toEqual(20 / 11.86);
  })
  
  
})



// test('should show the years left to live on planet Mercury', () => {
  //   expect(reusableHuman.toMercury()).toEqual((20 /.24) - (72 /.24));
  //   console.log(reusableHuman);
  //   })

  // test('should show how many bonus years lived past life expectancy on Mercury', () => {
  //   expect(reusableHuman.toMercury()).toEqual.toMercury - (72 / .24);
  //   console.log(reusableHuman);
  // })   




 // test('should show average max life expectancy on Mercury', () => {
  //   expect(reusableHuman.toMercury()).toEqual(72 / .24);
  // })