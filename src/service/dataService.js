// import * as data from '../data/left-overs-json-origin.json'
import * as data from '../data/left-overs-json.json'

class dataService {
    constructor(code, title, length, width, height, quantity, price) {
        this.code = code
        this.title = title
        this.length = length
        this.width = width
        this.height = height
        this.quantity = quantity
        this.price = price
    }
    createItem = () => {
        console.log(this.code, this.title, this.length, this.width, this.height, this.quantity, this.price);
    }


 }


export default dataService