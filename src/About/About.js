import { Container, Row, Col } from "react-bootstrap"

const About = () => {
    return (
        <>
            <Container>
                <Row className='mt-5'>
                    <Col className='about'>
                        <h2>
                        Остатки плитных материалов
                        </h2>
                        <hr className='mt-5 mb-5' />
                        <p>С помощью этого фильтра вы можете найти нужные вам остатки плитных материалов.</p>
                        <p>Размеры можно выбрать из выпадающего списка или ввести вручную.</p>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default About