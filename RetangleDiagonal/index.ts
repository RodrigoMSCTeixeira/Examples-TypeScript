class RetangleDiagonal {

    length: number
    width: number

    constructor(length: number, width: number) {
        this.length = length
        this.width  = width
    }

    get diagonal() {
        return this.calcDiagonal().toFixed(2)
    }

    calcDiagonal = () => {
        return Math.sqrt(Math.pow(this.length, 2) + Math.pow(this.width, 2))
    }

}
