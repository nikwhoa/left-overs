import { Col, InputGroup, DropdownButton, Dropdown, FormControl} from "react-bootstrap"

const Decor = (props) => {
    return (
        <Col className='col-2'>
            
            <InputGroup className={`mb-3 ${props.class}`}>
                <DropdownButton
                    variant="outline-secondary"
                    title="Декор"
                    id="decor-filter"
                >
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                </DropdownButton>
                
            </InputGroup>
        </Col>
    )
}

export default Decor