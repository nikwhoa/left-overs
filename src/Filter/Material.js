import { Col, InputGroup, DropdownButton, Dropdown, FormControl} from "react-bootstrap"

const Material = (props) => {
    return (
        <Col className='col-2'>
            <InputGroup className={`mb-3 ${props.class}`}>
                <DropdownButton
                    variant="outline-secondary"
                    title="Материал"
                    id="material-filter"
                >
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                </DropdownButton>
                
            </InputGroup>
        </Col>
    )
}

export default Material