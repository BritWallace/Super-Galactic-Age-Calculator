
export default class Human {
  constructor(age, maxAge) {
    this.age = age;
    this.maxAge = maxAge;
  // this.mercuryAge = mercuryAge;
  }
  toMercury() {
    this.mercuryAge = (this.age / .24);
    return this.mercuryAge;
  }
}
  



