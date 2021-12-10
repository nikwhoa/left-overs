import { useState } from "react"
import { Col, InputGroup, DropdownButton, Dropdown} from "react-bootstrap"

const Material = (props) => {

    
    const [title, setTitle] = useState('Материал')
    const throwMaterial = (material) => {
        props.getDataToDisplay(material, 'material')
    }
    
    const material = props.materials.map((material, i) => <Dropdown.Item onClick={(e) => {setTitle(material); throwMaterial(material)}} key={i} href="#">{material}</Dropdown.Item>)
    const loading = props.materials.length < 0 ? 'loading' : null
    const content = props.materials.length > 0 ? material : null
    return (
        <Col className='col-12 col-lg-3'>
            <InputGroup className={`mb-3 ${props.class}`}>
                <DropdownButton
                    variant="outline-secondary"
                    title={title}
                    id="material-filter"
                >
                    {loading}
                    {content}
                </DropdownButton>
                
            </InputGroup>
        </Col>
    )
}

export default Material