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
    const content = this.state.showNomenclatures !== null ? this.state.showNomenclatures.map(item =>

      <div className="col-12 col-sm-6 col-md-3 p-4">
        <ul>
          <li>
            <b>Номенклатура: </b> {item.code}
          </li>
          <li>
            Название:
            <p>
              {item.title}
            </p>
          </li>
          <li>
            <b>Материал:</b> {item.material}
          </li>
          <li>
            <b>Ширина:</b> {item.width} <br />
          </li>
          <li>
            <b>Высота:</b> {item.height} <br />
          </li>
          <li>
            <b>Длина:</b> {item.length} <br />
          </li>
          <li>
            <b>Цена:</b> {item.price}
          </li>
        </ul>
      </div>

    ) : null

    console.log(content)

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
