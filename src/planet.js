
export default class Human {
  constructor(age, maxAge) {
    this.age = age;
    this.maxAge = maxAge;
  // this.mercuryAge = mercuryAge;
  }
  toMercury() {
    this.mercuryAge = (this.age / .24);
    this.maxAge = (this.maxAge / .24);
    if (this.mercuryAge >= (this.maxAge /.24)) {
      this.yearsLeft = (this.maxAge / .24) - this.mercuryAge + "Years left to live.";
    } else (this.mercuryAge <= (this.maxAge / .24)); {
      this.yearsLeft = this.mercuryAge - this.maxAge +  "Bonus years lived so far!";
    }
    return this.yearsLeft;
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
  // toMercury() {
  
  // }
}
  
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


