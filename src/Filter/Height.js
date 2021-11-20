import { Col, InputGroup, DropdownButton, Dropdown, FormControl} from "react-bootstrap"

const Height = () => {
    return (
        <Col>
            
            <InputGroup className="mb-3">
                <DropdownButton
                    variant="outline-secondary"
                    title="Толщина"
                    id="height-filter"
                >
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>
                <FormControl aria-label="Text input with dropdown button" />
            </InputGroup>
        </Col>
    )
}

export default Height