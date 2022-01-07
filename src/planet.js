
export default class Human {
  constructor(age, maxAge) {
    this.age = age;
    this.maxAge = maxAge;
  }
  toMercury() {
    this.mercuryAge = (this.age / .24);
    this.maxAge = this.maxAge / .24;
    if (this.mercuryAge >= this.maxAge) {
      this.yearsLeft = (this.maxAge  - this.mercuryAge);
    } else (this.mercuryAge <= (this.maxAge / .24)); {
      this.yearsLeft = this.mercuryAge - this.maxAge;
    }
    return (Math.abs(Math.round(this.yearsLeft)));
  };

  toVenus() {
    this.venusAge = (this.age / .62);
    this.maxAge = this.maxAge / .62;
    if (this.venusAge >= this.maxAge) {
      this.yearsLeft = (this.maxAge  - this.venusAge);
    } else (this.venusAge <= (this.maxAge / .62)); {
      console.log(this.venusAge);
      this.yearsLeft = this.venusAge - this.maxAge;
    }
    return (Math.abs(Math.round(this.yearsLeft)));
  };

  toMars() {
    this.marsAge = (this.age / 1.88);
    this.maxAge = this.maxAge / 1.88;
    if (this.marsAge >= this.maxAge) {
      this.yearsLeft = (this.maxAge  - this.marsAge);
    } else (this.marsAge <= this.maxAge); {
      this.yearsLeft = this.marsAge - this.maxAge;
    }
    return (Math.abs(Math.round(this.yearsLeft)));
  };
    
  toJupiter() {
    this.jupiterAge = (this.age / 11.86);
    return this.jupiterAge;
  }

}
  
// +  "Bonus years lived so far!"







