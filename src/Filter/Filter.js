import { Container, Row } from "react-bootstrap"
import Length from "./Length"
import Width from "./Width"
import Height from "./Height"
import Material from "./Material"
import Decor from "./Decor"

import dataService from "../service/dataService"
import { Component } from "react"

class Filter extends Component {
    state = {
        length: [],
        width: [],
        height: [],
        widthOnChange: '',
        lengthOnChange: '',
        searchCase: ''
    }

    dataServices = new dataService()

    componentDidMount() {
        this.setState({ length: this.dataServices.getLength() })
        this.setState({ width: this.dataServices.getWidth() })
        this.setState({ height: this.dataServices.getHeight() })
    }

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

    updateSearchValue = (value, searchCase) => {
        switch (searchCase) {
            case 'length':
                this.setState({ lengthOnChange: value, searchCase })        
                break
            case 'width':
                this.setState({ widthOnChange: value, searchCase })
                break
            default:
                break
        }
    }

    render() {
        const { length, width, height, widthOnChange, lengthOnChange} = this.state

        const visibleLengthValues = this.searchForLength(length, lengthOnChange)
        const visibleWidthValues = this.searchForWidth(width, widthOnChange)

        return (
            <Container>
                <Row className='justify-content-center'>
                    <Length updateLength={this.updateSearchValue} class={'text-center'} valuesLength={visibleLengthValues} />
                    <Width updateWidth={this.updateSearchValue} valuesWidth={visibleWidthValues} />
                    <Height updateHeight={this.updateSearchValue} valuesHeight={height} />
                </Row>
                <Row className='justify-content-center'>
                    <Material class={'justify-content-center'} />
                    <Decor class={'justify-content-center'} />
                </Row>
            </Container>
        )
    }




}

export default Filter