import { Col, InputGroup, DropdownButton, Dropdown, FormControl} from "react-bootstrap"

const Width = (props) => {

    const valuesWidth = props.valuesWidth.map((item, i) => <Dropdown.Item key={i} href="#">{item}</Dropdown.Item>)    
    
    return (
        <Col>
            <InputGroup className="mb-3">
                <DropdownButton
                    variant="outline-secondary"
                    title="Ширина"
                    id="width-filter"
                >
                    {valuesWidth}
                </DropdownButton>
                <FormControl aria-label="Text input with dropdown button" />
            </InputGroup>
        </Col>
    )

}

export default Width