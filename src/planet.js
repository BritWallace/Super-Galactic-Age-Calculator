
export default class Human {
  constructor(age, maxAge) {
    this.age = age;
    this.maxAge = maxAge;
  }
  toMercury() {
    this.mercuryAge = (this.age / .24);
    console.log(this.mercuryAge)
    this.maxAge = this.maxAge / .24;
    if (this.mercuryAge >= this.maxAge) {
      console.log(this.maxAge);
      this.yearsLeft = (this.maxAge  - this.mercuryAge);
    } else (this.mercuryAge <= (this.maxAge / .24)); {
      this.yearsLeft = this.mercuryAge - this.maxAge;
    }
    return (Math.abs(Math.round(this.yearsLeft)));
  };

  toVenus() {
    this.venusAge = (this.age / .62);
    return this.venusAge;
  }
  toMars() {
    this.marsAge = (this.age / 1.88);
    return this.marsAge;
  }
  toJupiter() {
    this.jupiterAge = (this.age / 11.86);
    return this.jupiterAge;
  }

}
  
// +  "Bonus years lived so far!"


// toMercury() {
//   this.mercuryAge = (this.age / .24);
//   this.mercuryAge = math.abs(this.maxAge - this.age) / (.24);
//   if (this.maxAge >= this.age)
//   return this.mercuryAge + ("" ) + ("Years left to live on Mercury.");
// }


// toMercury() {
//   this.mercuryAge = math.abs(this.maxAge - this.age ) / (.24)
//   if (this.maxAge >= this.age)
//     return this.mercuryAge + "Years left to live.";
//   } else {
//     return this.mercuryAge + "Bonus years lived so far!";
// }


