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
    }

    dataServices = new dataService()

    componentDidMount() {
        this.setState({ length: this.dataServices.getLength() })
        this.setState({ width: this.dataServices.getWidth() })
        this.setState({ height: this.dataServices.getHeight() })
    }

    searchForValue = (items, value) => {
        if (value.length === 0) {
            return items
        }
        return items.filter(item => item.toString().includes(value))
    }

    updateSearchValue = (value, searchCase) => {
        this.setState({ widthOnChange: value })
    }

    render() {
        const { length, width, height, widthOnChange } = this.state
        const visibleWidthValues = this.searchForValue(width, widthOnChange)
        const visibleLengthValues = this.searchForValue(length, widthOnChange)
        return (
            <Container>
                <Row className='justify-content-center'>
                    <Length updateLength={this.updateSearchValue} class={'text-center'} valuesLength={visibleLengthValues} />
                    <Width updateWidth={this.updateSearchValue} valuesWidth={visibleWidthValues} />
                    <Height valuesHeight={height} />
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