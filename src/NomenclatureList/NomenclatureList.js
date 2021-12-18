import { Component } from 'react';
import { Container, Row } from 'react-bootstrap';


class NomenclatureList extends Component {
  state = {
    showNomenclatures: null,
  }

  componentDidMount() {
    console.log('mount list');
    this.toShowNomenclatures()
  }

  toShowNomenclatures = () => {
    let visibleNomenclatures = this.props.nomenclatures.filter(item => item.length > this.props.data.length && item.height > this.props.data.height && item.width > this.props.data.width && item.material === this.props.data.material).sort((a, b) => a.code - b.code)
    this.setState({ showNomenclatures: visibleNomenclatures })
  }

  render() {
    const loading = this.state.showNomenclatures === null ? 'loading' : null
    const content = this.state.showNomenclatures !== null ? this.state.showNomenclatures.map(item => <Row className='justify-content-center mt-5'> 
    <b>Номенклатура: </b> {item.code} {item.title}, <br /> 
    <b>Материал:</b> {item.material} <br /> 
    <b>Ширина:</b> {item.width} <br /> 
    <b>Высота:</b> {item.height} <br /> 
    <b>Длина:</b> {item.length} <br /> 
    <b>Цена:</b> {item.price}
    </Row>) : null

  console.log(content)
    
    // const nomenclatures = this.state.showNomenclatures.map(item => <Row>{item.code}</Row>)
    return (
      <Container>
        {loading}
        {content}
      </Container>
    );
  }
}



export default NomenclatureList;
