import { useState } from "react"
import { Col, InputGroup, DropdownButton, Dropdown, FormControl} from "react-bootstrap"

const Material = (props) => {

    // const [state, setState] = useState(initialState);
    const [title, setTitle] = useState('Материал')

    
    const material = props.materials.map((material, i) => <Dropdown.Item onClick={(e) => setTitle(material)} key={i} href="#">{material}</Dropdown.Item>)
    const loading = props.materials.length < 0 ? 'loading' : null
    const content = props.materials.length > 0 ? material : null
    return (
        <Col className='col-2'>
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