import Human from '../src/planet.js'
describe('Human', () => {
  let reusableHuman;

  beforeEach(() => {
    reusableHuman = new Human(20,"female");
  });

  test('should show how beforeEach() works', () => {
    console.log(reusableHuman);
  });

  test('should see a users age and gender', () => {
    expect(reusableHuman.age).toEqual(20);
    expect(reusableHuman.gender).toEqual('female');

  }); 
});




  





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
//  3 male 73 / female 80 / father
//  4 if else male and =>74 return years lived past life male life expectancy
//  5 if female and => 80 ect...
//  6 
