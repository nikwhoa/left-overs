import { Component } from "react"
import { Col, InputGroup, DropdownButton, Dropdown, FormControl } from "react-bootstrap"

class Height extends Component {
    render() {


        const ValuesHeight = () => this.props.valuesHeight.map((item, i) => <Dropdown.Item key={i} href="#">{item}</Dropdown.Item>)

        const loading = this.props.valuesHeight === undefined ? 'loading' : null
        const content = this.props.valuesHeight !== undefined ? <ValuesHeight /> : null


        return (
            <Col>
                <InputGroup className="mb-3">
                    <DropdownButton
                        variant="outline-secondary"
                        title="Толщина"
                        id="height-filter"
                    >
                        {loading}
                        {content}
                    </DropdownButton>
                    <FormControl onChange={(e) => this.props.updateHeight(e.currentTarget.value, 'height')} aria-label="Text input with dropdown button" />
                </InputGroup>
            </Col>
        )
    }
}

export default Height