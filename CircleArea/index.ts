class Circle {

    radius : number

    constructor(radius : number) {
        this.radius  = radius 
    }

    get area() {
        return this.calcArea().toFixed(2)
    }

    calcArea = () => {
        return Math.PI * Math.pow(this.radius , 2)
    }
}
