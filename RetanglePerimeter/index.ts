class RetanglePerimeter {

    length: number
    width: number

    constructor(length: number, width: number) {
        this.length = length
        this.width  = width
    }

    get diagonal() {
        return this.calcPerimeter().toFixed(2)
    }

    calcPerimeter = () => {
        return 2 * (this.length + this.width)
    }

}