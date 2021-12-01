let data = [{
    "A": "25318 ",
    "B": "ДСП CLEAF Ares/Ares FB03 Бетон  (толщина 18-18,3мм)",
    "E": "280х1450",
    "F": "18",
    "G": "0.406",
    "H": "1",
    "I": "332.94"
},
{
    "A": "25318 ",
    "B": "ДСП CLEAF Ares/Ares FB03 Бетон  (толщина 18-18,3мм)",
    "E": "270х580",
    "F": "18",
    "G": "0.157",
    "H": "1",
    "I": "128.42"
},
{
    "A": "27775 ",
    "B": "ДСП CLEAF Ares/Ares FB03 Бетон (толщина 8-8,3мм)",
    "E": "1770х400",
    "F": "8",
    "G": "0.708",
    "H": "1",
    "I": "530.81"
},
]


class dataService {
    constructor(code, title, length, width, height, quantity, price) {
        this.code = +code
        this.title = title
        this.length = length
        this.width = width
        this.height = +height
        this.quantity = +quantity
        this.price = +price
    }
    createItem(){
        let material = () => {
            return this.title
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

}

let result = []
data.forEach(item => {
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
console.log(result);