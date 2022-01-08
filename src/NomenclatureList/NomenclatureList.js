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
    let visibleNomenclatures = this.props.nomenclatures.filter(item =>
      item.length > this.props.data.length
      && item.height > this.props.data.height
      && item.width > this.props.data.width
      && item.material === this.props.data.material)
      .sort((a, b) => a.width - b.width)
    this.setState({ showNomenclatures: visibleNomenclatures })
  }

  render() {
    const loading = this.state.showNomenclatures === null ? 'loading' : null
    const content = this.state.showNomenclatures !== null ? this.state.showNomenclatures.map(item =>

      <div className="col-12 col-sm-6 col-md-4 p-4">
        <ul className='result-item'>
          <li>
            <p style={{ textAlign: 'center', fontWeight: 'bold', margin: '0 auto' }}>
              {item.title}
            </p>
          </li>
          <li>
            <b>Номенклатура: </b> {item.code}
          </li>
          <li>
            <b>Материал:</b> {item.material}
          </li>
          <li>
            <b>Ширина:</b> {item.width} мм <br />
          </li>
          <li>
            <b>Высота:</b> {item.height} мм<br />
          </li>
          <li>
            <b>Длина:</b> {item.length} мм<br />
          </li>
          <li>
            <b>Цена:</b> {item.price} &#8372;
          </li>
        </ul>
      </div>

    ) : null

    // const nomenclatures = this.state.showNomenclatures.map(item => <Row>{item.code}</Row>)
    return (
      <Container>
        {loading}
        <Row className='mt-5'>
          {content === null ? 'ыыы' : content}
        </Row>
      </Container>
    );
  }
}



export default NomenclatureList;
