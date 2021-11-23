import { Col, InputGroup, DropdownButton, Dropdown, FormControl } from "react-bootstrap"

const Length = (props) => {

    const valuesLength = props.valuesLength.map((item, i) => <Dropdown.Item key={i} href="#">{item}</Dropdown.Item>)
    const loading = props.valuesLength === undefined ? 'loading' : null
    const content = props.valuesLength !== undefined ? valuesLength : null
    
    return (
        <Col className={`${props.class}`}>
            <InputGroup className='mb-3'>
                <DropdownButton
                    variant="outline-secondary"
                    title="Длина"
                    id="length-filter"
                >
                    {loading}
                    {content}
                </DropdownButton>
                <FormControl onChange={(e) => props.updateLength(e.currentTarget.value, 'length')} aria-label="Text input with dropdown button" />
            </InputGroup>
        </Col>
    )
}

export default Length