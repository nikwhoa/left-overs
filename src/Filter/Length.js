
import React, { Component } from "react"
import { Col, InputGroup, DropdownButton, Dropdown, FormControl } from "react-bootstrap"

class Length extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: 'Длина',
            show: false,
            value: ''
        }
        this.dropdownRef = React.createRef();
        this.dropdownButtonRef = React.createRef();
    }
    setTitle(title) {
        this.setState({ title: title })
    }
    inputHandler(e) {
        this.setState({value: e})
        if (this.dropdownRef.current.value !== '') {
            this.setState({show: true})
        } else {
            this.setState({show: false})
        }
    }
    onDropDownButton(e) {
        if (e.toLowerCase() === 'button') {
            if (this.state.show === true) {
                this.setState({show: false})    
            } else {
                this.setState({show: true})
            }
        } else {
            this.setState({show: false})
        }
    }
    

    render() {
        
        const valuesLength = this.props.valuesLength.map((item, i) => <Dropdown.Item onClick={(e) => this.setTitle(item)} key={i} href="#">{item}</Dropdown.Item>)
        const loading = this.props.valuesLength === undefined ? 'loading' : null
        const content = this.props.valuesLength !== undefined ? valuesLength : null
        
        return (
            <Col className={`${this.props.class}`}>
                <InputGroup onClick={e => this.onDropDownButton(e.target.nodeName)}  className='mb-3'>
                    <DropdownButton
                        show={this.state.show}
                        className='test'
                        variant="outline-secondary"
                        title={this.state.title === 'Длина' ? 'Длина' : this.state.title + ' мм'}
                        id="length-filter"
                        
                    >
    
                        {loading}
                        {content}
                    </DropdownButton>
                    <FormControl type='number' value={this.state.title === 'Длина' ?  this.state.value  : ''} ref={this.dropdownRef} onChange={e => { this.props.updateLength(e.currentTarget.value, 'length'); this.inputHandler(e.currentTarget.value) }} aria-label="Text input with dropdown button" />
                </InputGroup>
            </Col>
        )
    }

  
}

export default Length