import { Col, InputGroup, DropdownButton, Dropdown, FormControl} from "react-bootstrap"

const Height = (props) => {

    const valuesHeight = props.valuesHeight.map((item, i) => <Dropdown.Item key={i} href="#">{item}</Dropdown.Item>)    

    return (
        <Col>
            <InputGroup className="mb-3">
                <DropdownButton
                    variant="outline-secondary"
                    title="Толщина"
                    id="height-filter"
                >
                   {valuesHeight}
                </DropdownButton>
                <FormControl aria-label="Text input with dropdown button" />
            </InputGroup>
        </Col>
    )
}

export default Height