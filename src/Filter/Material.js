import { Col, InputGroup, DropdownButton, Dropdown, FormControl} from "react-bootstrap"

const Material = (props) => {
    console.log(props)
    // const material = props.map(material => <Dropdown.Item href="#">Action</Dropdown.Item>)
    return (
        <Col className='col-2'>
            <InputGroup className={`mb-3 ${props.class}`}>
                <DropdownButton
                    variant="outline-secondary"
                    title="Материал"
                    id="material-filter"
                >
                    {/* {material} */}
                </DropdownButton>
                
            </InputGroup>
        </Col>
    )
}

export default Material