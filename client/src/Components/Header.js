import { Navbar, Nav } from "react-bootstrap";

function Header() {
    return (
        <div>
            <Navbar style={{backgroundColor: 'rgba(1, 1, 1, 0.8)'}} variant="dark">
                <Navbar.Brand style={{fontSize: 25, fontFamily: 'cursive', fontWeight: 'bolder'}} href="#home">mediator</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">Log In</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">SignUp</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Header;
