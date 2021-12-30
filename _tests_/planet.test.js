import Human from '../src/planet.js'
describe('Human', () => {
  let reusableHuman;

  beforeEach(() => {
    reusableHuman = new Human(20,72);
  
  });

  test('should show how beforeEach() works', () => {
    console.log(reusableHuman);
  });

  test('should see a users age and expected life expectancy', () => {
    expect(reusableHuman.age).toEqual(20);
    expect(reusableHuman.maxAge).toEqual(72);

  }); 

  test('should show earth years in solar Mercury years', () => {
    const age = new age(20);
    const mercuryAge = age.toMercuryAge();
    expect(reusableHuman.age).toEqual(20);
    expect(mercuryAge).toEqual(20 / .24);
  })

  
 
  // test('should determine if the user inputs a positive number', () => {
  //   expect(reusableHuman.age).filter(num => num > 1 && num % parseInt(num) === 1);
  // });

  
});

// describe('Human', () => {
//   let age = age => 1;
// test('should determine if the user inputs a positive number', () => {
//   expect(reusableHuman.age).Math.sign(3)
// });
// }


// const number = parseInt(prompt("Enter a number: "));


  





// let inputAge = ("");


// let reusablePlanet;

//   beforeEach(() => {
//     reusablePlanet = new Planet
//   console.log("hit it!");
//   })



// describe('Planet', () => {
//   test('should multiply age by 365'), () => {
//   let humanDays = new humanDays(20 * 365);
//   expect(multiply(20,365)).toEqual(7,300);
//   };
// });

//  1 get a users age 
//  2 get a positive number 
//  3 male 73 / female 80 / 
//  4 if else male and =>74 return years lived past life male life expectancy
//  5 if female and => 80 ect...
//  6 method to the class for the above 
//  7 method to divide the users age 

