// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius = radius;
  }

  set diameter(){
    return this.radius * 2;
  }

  set circumference(){
    let pie = Math.PI;
    return 2 * pie * this.radius;
  }

  get area(){
    let pie = Math.PI;
    let rSquared = this.radius * this.radius;
    return  pie * rSquared;
  }

  // set radius() {
  //   return this.diameter / 2;
  // }


}
