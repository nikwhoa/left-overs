import { Container, Row} from "react-bootstrap"
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
        widthOnChange: 0,
    }

    dataServices = new dataService()

    componentDidMount() {
        this.setState({length: this.dataServices.getLength()})
        this.setState({width: this.dataServices.getWidth()})
        this.setState({height: this.dataServices.getHeight()})
    }
    
    searchWidth = (items, value) => {
        if (value === 0) {
            return items
        }
    }

    updateWidth = (value) => {
        this.setState({widthOnChange: +value})
    }

    render() {
        const {length, width, height, widthOnChange} = this.state
        const visibleWidthValues = this.searchWidth(width, widthOnChange)
        return (
            <Container>
                <Row className='justify-content-center'>
                    <Length class={'text-center'} valuesLength={length} />
                    <Width updateWidth={this.updateWidth} valuesWidth={visibleWidthValues} />
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