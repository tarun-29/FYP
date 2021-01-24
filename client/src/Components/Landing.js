import { Container, Row, Col, Button } from "react-bootstrap";
import iam3 from '../assets/back2.jpg'
import iam from '../assets/kiss.png'
import iam2 from '../assets/kiss2.png'


function Landing() {
    return (
        <div style={{backgroundImage: `url(${iam3})`, backgroundRepeat:'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div style={{ background: 'rgba(1, 1, 1, 0.7)'}}>
            <Container>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
                    <div style={{ height: 162 }}></div>
                    <Row style={{height:400, justifyContent: 'center' }}>
                        <Col style={{ color: 'white', textAlign: 'center' }}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div></div>
                                <div>
                                    <img src={iam2} height={150}/>
                                    <h1>Welcome to Mediator</h1>
                                    <p>We are here to save you from online fraud and make your transaction very smooth. <br/>
                                    If you don't trust the deal please don't loose your assets on that deal. <br/>
                                    We will help you to finalize your deal with full protection.
                                    </p>
                                    <Button style={{marginRight: 10}} variant="primary">Log In</Button>
                                    <Button style={{marginLeft: 10}} variant="info">Sign Up</Button>
                                </div>
                                <div></div>
                            </div>
                        </Col>
                    </Row>
                    <div style={{ height: 163 }}></div>
                </div>
            </Container>
            </div>
        </div>
    );
}

export default Landing;





