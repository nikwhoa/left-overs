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
      let visibleNomenclatures = this.props.nomenclatures.filter(item => item.length === this.props.data.length && item.height === this.props.data.height && item.width === this.props.data.width)
      this.setState({ showNomenclatures: visibleNomenclatures })
  }

  render() {
    const loading = this.state.showNomenclatures === null ? 'loading' : null
    const content = this.state.showNomenclatures !== null ? this.state.showNomenclatures.map(item => <Row className='justify-content-center'> Номенклатура: {item.code} {item.title}, <br /> Материал: {item.material} <br /> Цена: {item.price}</Row>) : null 
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
