import { Container, Row, Col } from "react-bootstrap"

const About = () => {
    return (
        <>
            <Container>
                <Row className='mt-5'>
                    <Col className='about'>
                        <h2>
                            Здесь можно найти остатки ДСП, МДФ или чего-то еще
                        </h2>
                        <hr className='mt-5 mb-5' />
                        <p>Ниже вы можете с помощью фильтра найти нужный вам остаток. Фильтровать можно по материалу, декору или толщине</p>
                        <p>Чтобы найти материалы по длине, можно выбрать их из списка или же ввести вручную</p>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default About