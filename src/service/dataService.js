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

}


export default dataService
