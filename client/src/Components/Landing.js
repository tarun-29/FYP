import { Container, Row, Col } from "react-bootstrap";
import iam from '../assets/mediator0.png'
import iam1 from '../assets/mediator.png'
import iam2 from '../assets/mediator1.png'
import iam3 from '../assets/back2.jpg'
import iam4 from '../assets/back3.png'


function Landing() {
    return (
        <div style={{backgroundImage: `url(${iam3})`, backgroundRepeat:'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div style={{ background: 'rgba(1, 1, 1, 0.6)'}}>
            <Container>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
                    <div style={{ height: 165 }}></div>
                    <Row style={{height:400, justifyContent: 'center' }}>
                        <Col style={{ color: 'white', textAlign: 'center' }}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div></div>
                                <div>
                                    <h1>Welcome to Mediator</h1>
                                    <p>We are here to save you from online fraud and make your transaction very smooth. <br/>
                                    
                                    </p>
                                </div>
                                <div></div>
                            </div>
                        </Col>
                    </Row>
                    <div style={{ height: 165 }}></div>
                </div>
            </Container>
            </div>
        </div>
    );
}

export default Landing;





