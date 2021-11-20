import { Container, Row} from "react-bootstrap"
import Length from "./Length"
import Width from "./Width"
import Height from "./Height"
import Material from "./Material"
import Decor from "./Decor"

import dataService from "../service/dataService"

const Filter = () => {

    const dataServices = new dataService()

    
    const valuesLength = dataServices.getLength()
    const valuesWidth = dataServices.getWidth()

    return (
        <Container>
            <Row className='justify-content-center'>
                <Length class={'text-center'} valuesLength={valuesLength} />
                <Width valuesWidth={valuesWidth} />
                <Height />
            </Row>
            <Row className='justify-content-center'>
                <Material class={'justify-content-center'} />
                <Decor class={'justify-content-center'} />
            </Row>
        </Container>
    )
}

export default Filter