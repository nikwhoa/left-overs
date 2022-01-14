import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';


const NomenclatureList = (props) => {
  const [showNomenclatures, setNomenclatures] = useState(null)
  const [sortNomenclatures, setSort] = useState('code')
  const [loadMore, setLoadMore] = useState(9)
  
  useEffect(() => {
    toShowNomenclatures()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    toShowNomenclatures()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortNomenclatures])

  useEffect(() => {
    toShowNomenclatures()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props])

  const toShowNomenclatures = () => {
    
    let visibleNomenclatures = props.nomenclatures.filter(item =>
      item.length > props.data.length
      && item.height === props.data.height
      && item.width > props.data.width
      && item.material === props.data.material)
      .sort((a, b) => a[sortNomenclatures] - b[sortNomenclatures])

    setNomenclatures(visibleNomenclatures)
  }

  const sorting = (sort) => {
    setSort(sort)
  }

  const loading = showNomenclatures === null ? 'loading' : null
  const content = showNomenclatures !== null ? showNomenclatures.map((item, i) =>

    <div key={`${item.code}_${i}`} className="col-12 col-sm-6 col-md-4 p-4">
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
          <b>Толщина:</b> {item.height} мм<br />
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
  const sortBtns = <Row>
    <Col className='col-12'>Сортировать по:
      <Button className='sort-btn' onClick={() => sorting('width')} variant='light'>Ширине</Button>
      <Button className='sort-btn' onClick={() => sorting('length')} variant='light'>Длине</Button>
      <Button className='sort-btn' onClick={() => sorting('price')} variant='light'>Цене</Button>
    </Col>
  </Row>
  const contentToShow = content === null ? <Col>По вашим параметрам ничего не найдено</Col> : content.filter((item, index) => {
    while (index < loadMore) {
      return item
    } 
    return false    
  })
  console.log(contentToShow);
  return (
    <Container style={{paddingBottom: '24px'}}>
      {loading}
      <Row className='mt-5'>
        {content === null || content.length < 1 ? <Col>По вашим параметрам ничего не найдено</Col> : sortBtns}
        {content === null ? null : contentToShow}
        {content === null || content.length < 9 ? null : <Col className='col-2 mx-auto'><Button onClick={() => setLoadMore(loadMore + 9)}>Показать еще</Button></Col> }
      </Row>
    </Container>
  );
}


export default NomenclatureList;
