
import { Component, useState } from "react"
import { Col, InputGroup, DropdownButton, Dropdown, FormControl } from "react-bootstrap"

class Length extends Component {
    state = {
        title: 'Длина'
    }

    // const [title, setTitle] = useState('Длина')
    // const [showList, setShow] = useState(false)
    
    setTitle(title) {
        this.setState({ title: title })
    }


    render() {
        const valuesLength = this.props.valuesLength.map((item, i) => <Dropdown.Item onClick={(e) => this.setTitle(item)} key={i} href="#">{item}</Dropdown.Item>)
        const loading = this.props.valuesLength === undefined ? 'loading' : null
        const content = this.props.valuesLength !== undefined ? valuesLength : null

        return (
            <Col className={`${this.props.class}`}>
                <InputGroup className='mb-3'>
                    <DropdownButton
                        
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