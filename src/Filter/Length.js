
import React, { Component, useState } from "react"
import { Col, InputGroup, DropdownButton, Dropdown, FormControl } from "react-bootstrap"

class Length extends Component {

    // const [title, setTitle] = useState('Длина')
    // const [showList, setShow] = useState(false)
    constructor(props) {
        super(props)
        this.state = {
            title: 'Длина'
        };
        // https://ru.reactjs.org/docs/refs-and-the-dom.html
        this.dropdownRef = React.createRef();
    }
    setTitle(title) {
        this.setState({ title: title })
    }

    render() {
        
        const valuesLength = this.props.valuesLength.map((item, i) => <Dropdown.Item onClick={(e) => this.setTitle(item)} key={i} href="#">{item}</Dropdown.Item>)
        const loading = this.props.valuesLength === undefined ? 'loading' : null
        const content = this.props.valuesLength !== undefined ? valuesLength : null
        console.log(this.dropdownRef);
        return (
            <Col className={`${this.props.class}`}>
                <InputGroup className='mb-3'>
                    <DropdownButton
                        ref={this.dropdownRef}
                        variant="outline-secondary"
                        title={this.state.title}
                        id="length-filter"
                    >
    
                        {loading}
                        {content}
                    </DropdownButton>
                    <FormControl onChange={e => { this.props.updateLength(e.currentTarget.value, 'length') }} aria-label="Text input with dropdown button" />
    
                </InputGroup>
            </Col>
        )
    }

  
}

export default Length