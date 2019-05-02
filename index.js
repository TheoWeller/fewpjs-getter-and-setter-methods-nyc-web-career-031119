// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius = radius;
  }

  get diameter(){
    return this.radius * 2;
  }

  get circumference(){
    let pie = Math.PI
    return 2 * pie * this.radius;
  }
}
