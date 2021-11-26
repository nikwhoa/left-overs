import * as data from '../data/left-overs-json-origin.json'

class dataService {

    getLength = () => {
        let res = data.default
            .map(el => el.E.slice(0, el.E.indexOf('х' || 'x')))
            .map(i => +i)
            .sort((a, b) => a - b)

        return res.filter((value, index) => res.indexOf(value) === index)
    }
    getWidth = () => {
        let res = data.default
            .map(el => el.E.slice((el.E.indexOf('х' || 'x')) + 1), -1)
            .map(i => +i)
            .sort((a, b) => a - b)

        return res.filter((value, index) => res.indexOf(value) === index)
    }
    getHeight = () => {
        let res = data.default
            .map(el => el.F)
            .map(i => +i)
            .sort((a, b) => a - b)

        return res.filter((value, index) => res.indexOf(value) === index)
    }
    getMaterial = () => {
        let _output = {}
        let _dspArr = []
        let _mdfArr = []
        let _lmdfArr = []
        let _dsplamArr = []
        let _listakrArr = []
        let _panelmdfArr = []
        let _plitaosbfArr = []
        let _stolechizafArr = []

        let res = data.default
            .map(el => el.B)
            .filter(item => {

                /* нужно просто посчитать сколько элементов в массиве при совпадение с материалом */
                /* мне нужно в _output добавить свойства с именами материалов и записать в их ключ количество найденных материалов */
                if (item.match(/^\ДСП лам.+/i)) {
                    Object.defineProperty(_output, 'ДСП ламинированный', { value: _dsplamArr.push(item), writable: true, configurable: true })
                } else if (item.match(/^\МДФ+/i)) {
                    Object.defineProperty(_output, 'МДФ', { value: _mdfArr.push(item), writable: true, configurable: true })
                } else if (item.match(/^\ЛМДФ+/i)) {
                    Object.defineProperty(_output, 'ЛМДФ', { value: _lmdfArr.push(item), writable: true, configurable: true })
                } else if (item.match(/^\ДСП+/i)) {
                    Object.defineProperty(_output, 'ДСП', { value: _dspArr.push(item), writable: true, configurable: true })
                } else if (item.match(/^\Лист акриловий+/i) || item.match(/^\Лист акриловый+/i)) {
                    Object.defineProperty(_output, 'Лист акриловый', { value: _listakrArr.push(item), writable: true, configurable: true })
                } else if (item.match(/^\Панель МДФ+/i)) {
                    Object.defineProperty(_output, 'Панель МДФ', { value: _panelmdfArr.push(item), writable: true, configurable: true })
                } else if (item.match(/^\Плита OSB+/i)) {
                    Object.defineProperty(_output, 'Плита OSB', { value: _plitaosbfArr.push(item), writable: true, configurable: true })
                } else if (item.match(/^\Столешница+/i)) {
                    Object.defineProperty(_output, 'Столешница', { value: _stolechizafArr.push(item), writable: true, configurable: true })
                }
            })
            
        // console.log(_output);
        // return res.filter((value, index) => res.indexOf(value) === index)
        return _output
    }

}


export default dataService
