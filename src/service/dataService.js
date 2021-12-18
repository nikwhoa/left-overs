import * as nomenclatures from '../data/left-overs-json-origin.json'
// import * as nomenclatures from '../data/left-overs-json.json'

class dataService {
    
    
    _data = nomenclatures.default.filter(item => !item.B.includes('Столешница') && !item.B.includes('Стільниця') && !item.B.includes('Стеновая панель'))
    
    // _data.filter(item => item.B.includes('Столешница'))

    constructor(code, title, length, width, height, quantity, price) {
        this.code = +code
        this.title = title
        this.length = length
        this.width = width
        this.height = +height
        this.quantity = +quantity
        this.price = +price
    }
    
    createItem = () => {
        
        let material = () => {

            let title = this.title[0] === ' ' ? this.title.slice(1) : this.title

            if (title.match(/^ДСП+/i)) {
                return 'ДСП'
            } else if (title.match(/^МДФ+/i)) {
                return 'МДФ'
            } else if (title.match(/^ЛМДФ+/i)) {
                return 'ЛМДФ'
            } else if (title.match(/^Лист акриловий+/i) || title.match(/^Лист акриловый+/i)) {
                return 'Лист акриловый'
            } else if (title.match(/^Панель МДФ+/i)) {
                return 'Панель МДФ'
            } else if (title.match(/^Плита OSB+/i)) {
                return 'Плита OSB'
            } 
            // else if (title.match(/^Столешница+/i)) {
            //     return 'Столешница'
            // }
        }

        let nomenclature = {
            code: this.code,
            title: this.title,
            material: material(),
            length: +this.length.slice(0, this.length.indexOf('х' || 'x')),
            width: +this.width.slice(this.width.indexOf('х' || 'x') + 1),
            height: this.height,
            quantity: this.quantity,
            price: this.price,
        }

        return nomenclature
    }
    
    getData = () => {
        let result = []
        this._data.forEach(item => {
            result.push(new dataService(
                item.A,
                item.B,
                item.E,
                item.E,
                item.F,
                item.H,
                item.I).createItem()
            )
        })
        return result
    }
}


export default dataService