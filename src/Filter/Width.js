import { Component } from "react"
import { Col, InputGroup, DropdownButton, Dropdown, FormControl } from "react-bootstrap"



class Width extends Component {

    render() {
        
        const ValuesWidth = () => this.props.valuesWidth.map((item, i) => <Dropdown.Item key={i} href="#">{item}</Dropdown.Item>)
            
        const loading = this.props.valuesWidth === undefined ? 'loading' : null
        const content = this.props.valuesWidth !== undefined ? <ValuesWidth /> : null
        
        return (
            <Col>
                <InputGroup className="mb-3">
                    <DropdownButton
                        variant="outline-secondary"
                        title="Ширина"
                        id="width-filter"
                    >
                        {loading}
                        {content}
                    </DropdownButton>
                    <FormControl onChange={(e) => this.props.updateWidth(e.currentTarget.value)} aria-label="Text input with dropdown button" />
                </InputGroup>
            </Col>
        )
    }


}



export default Width