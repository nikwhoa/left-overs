import { Container, Row, Col, Button } from "react-bootstrap"
import Length from "./Length"
import Width from "./Width"
import Height from "./Height"
import Material from "./Material"

import dataService from "../service/dataService"
import { Component } from "react"

class Filter extends Component {
    state = {
        nomenclatures: [],
        length: [],
        width: [],
        height: [],
        material: null,
        lengthOnChange: '',
        widthOnChange: '',
        heightOnChange: '',
        searchCase: '',
        valuesToDisplay: {
            length: null,
            width: null,
            height: null,
            material: null
        },
    }

    dataServices = new dataService()

    componentDidMount() {
        this.setState({ nomenclatures: this.dataServices.getData() })
        
        
        // this.setState({ length: this.dataServices.getLength() })
        // this.setState({ width: this.dataServices.getWidth() })
        // this.setState({ height: this.dataServices.getHeight() })        
    }
    
    // componentWillUpdate() {
    //     console.log('update');
    //     this.props.getNomenclatureList(this.state.nomenclatures)
    // }

    searchForLength = (items, value) => {
        if (value.length <= 0) {
            return items
        } else {
            return items.filter(item => item.toString().includes(value))
        }
    }

    searchForWidth = (items, value) => {
        if (value.length <= 0) {
            return items
        } else {
            return items.filter(item => item.toString().includes(value))
        }
    }
    searchForHeight = (items, value) => {
        if (value.length <= 0) {
            return items
        } else {
            return items.filter(item => item.toString().includes(value))
        }
    }

    updateSearchValue = (value, searchCase) => {
        switch (searchCase) {
            case 'length':
                this.setState({ lengthOnChange: value, searchCase })
                break
            case 'width':
                this.setState({ widthOnChange: value, searchCase })
                break
            case 'height':
                this.setState({ heightOnChange: value, searchCase })
                break
            default:
                break
        }
    }

    getDataToDisplay = (value, dataCase) => {

        let valuesToDisplay = { ...this.state.valuesToDisplay }

        switch (dataCase) {
            case 'length':
                valuesToDisplay.length = value
                this.setState({ valuesToDisplay })
                break;
            case 'width':
                valuesToDisplay.width = value
                this.setState({ valuesToDisplay })
                break;
            case 'height':
                valuesToDisplay.height = value
                this.setState({ valuesToDisplay })
                break;
            case 'material':
                valuesToDisplay.material = value
                this.setState({ valuesToDisplay })
                break;
            default:
                break;
        }
    }

    render() {
        const { widthOnChange, lengthOnChange, heightOnChange } = this.state
        const length = this.state.nomenclatures.map(item => item.length).sort((a, b) => a - b).filter((element, index, array) => array.indexOf(element) === index)
        const width = this.state.nomenclatures.map(item => item.width).sort((a, b) => a - b).filter((element, index, array) => array.indexOf(element) === index)
        const height = this.state.nomenclatures.map(item => item.height).sort((a, b) => a - b).filter((element, index, array) => array.indexOf(element) === index)
        const material = this.state.nomenclatures.map(item => item.material).sort((a, b) => a - b).filter((element, index, array) => array.indexOf(element) === index)
        const visibleLengthValues = this.searchForLength(length, lengthOnChange)
        const visibleWidthValues = this.searchForWidth(width, widthOnChange)
        const visibleHeightValues = this.searchForHeight(height, heightOnChange)

        const onValuesToDisplay = Object.values(this.state.valuesToDisplay).filter(item => item || item === 0)
        

        return (
            <Container className='mt-4'>
                <Row className='justify-content-center'>
                    <Length getDataToDisplay={this.getDataToDisplay} updateLength={this.updateSearchValue} valuesLength={visibleLengthValues} />
                    <Width getDataToDisplay={this.getDataToDisplay} updateWidth={this.updateSearchValue} valuesWidth={visibleWidthValues} />
                    <Height getDataToDisplay={this.getDataToDisplay} updateHeight={this.updateSearchValue} valuesHeight={visibleHeightValues} />
                </Row>
                <Row className='justify-content-center'>
                    <Material getDataToDisplay={this.getDataToDisplay} class={'justify-content-center'} materials={material} />
                    {/* <Decor class={'justify-content-center'} /> */}
                </Row>
                { onValuesToDisplay.length >= 4 && <SearchButton getData={this.props.getData} search={this.props.getNomenclatureList} nomenclatures={this.state.nomenclatures} state={this.state.valuesToDisplay} />}
            </Container>

        )
    }




}

const SearchButton = (props) => {
    
    return (
        <Row className="mt-4">
            <Col className="">
                <Button className="search-btn" onClick={() => {props.getData(props.state, props.nomenclatures); props.search(props.nomenclatures)}} variant="primary">Найти</Button>
            </Col>
        </Row>
    )
}

export default Filter