class RetangleArea {

    length: number
    width: number

    constructor(length: number, width: number) {
        this.length = length
        this.width  = width
    }

    get area() {
        return this.calcArea().toFixed(2)
    }

    calcArea = () => {
        return this.length * this.width
    }

}