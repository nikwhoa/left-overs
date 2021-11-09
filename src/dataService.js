import * as data from './data/left-overs-json.json'


class dataService {
    // _offset = 4
    _dataService = data.default
    _dataToRender = []

    getData(offset = 4) {
        for (let i = 0; i < offset; i++) {
            this._dataToRender.push(this._dataService[i])
        }
        return this._dataToRender
    }

}


export default dataService