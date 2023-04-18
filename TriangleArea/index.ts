class Triangle {

    base: number
    height: number

    constructor (base: number, height: number)  {
        this.base = base
        this.height = height
    }

    get area() {
        return this.calcArea().toFixed(2)
    }

    calcArea = () => {
        return (this.base * this.height) / 2
    }
}
