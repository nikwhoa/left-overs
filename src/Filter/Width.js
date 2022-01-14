import React, { Component } from "react"
import { Col, InputGroup, DropdownButton, Dropdown, FormControl } from "react-bootstrap"



class Width extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: 'Ширина',
            show: false,
            value: ''
        }
        this.dropdownRef = React.createRef();
        this.dropdownButtonRef = React.createRef();
    }
    setTitle(title) {
        this.setState({title: title})
        this.props.getDataToDisplay(title, 'width')
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
            this.setState({show: !this.state.show})
        } else {
            this.setState({show: false})
        }
    }


    render() {
        
        const ValuesWidth = () => this.props.valuesWidth.map((item, i) => <Dropdown.Item onClick={(e) => this.setTitle(item)} key={i} href="#">{item}</Dropdown.Item>)
            
        const loading = this.props.valuesWidth === undefined ? 'loading' : null
        const content = this.props.valuesWidth !== undefined ? <ValuesWidth /> : null
        
        return (
            <Col className='col-12 col-lg-3'>
                <InputGroup onClick={e => this.onDropDownButton(e.target.nodeName)} className="mb-3">
                    <DropdownButton
                        show={this.state.show}
                        variant="outline-secondary"
                        title={this.state.title === 'Ширина' ? 'Ширина' : this.state.title + ' мм'}
                        id="width-filter"
                    >
                        {loading}
                        {content}
                    </DropdownButton>
                    <FormControl type='number' value={this.state.title === 'Ширина' ? this.state.value : this.state.value === this.state.title ? '' : this.state.value} ref={this.dropdownRef} onChange={(e) => { this.props.updateWidth(e.currentTarget.value, 'width'); this.inputHandler(e.currentTarget.value) }} aria-label="Text input with dropdown button" />
                </InputGroup>
            </Col>
        )
    }


}



export default Width