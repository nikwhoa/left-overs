import * as data from '../data/left-overs-json.json'

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
        let res = data.default
        .map(el => el.B)
        .filter(item => item.includes('ДСП'))
        /* TODO: https://codesandbox.io/s/for-testing-d9dnu */
        console.log(res);

        return res.filter((value, index) => res.indexOf(value) === index)
    }

}


export default dataService
