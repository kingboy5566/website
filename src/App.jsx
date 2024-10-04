
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import laptop4 from './assets/pic/laptop4.jpg';
import laptop1 from './assets/pic/laptop1.jpg';
import laptop2 from './assets/pic/laptop2.jpg';
import laptop3 from './assets/pic/laptop3.webp';
import car     from './assets/pic/car.jpg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import abc from './assets/pic/saylani.svg';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';




function App() {


  return (
<>

<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Saylani-Walfare</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
       <img src= {abc} alt="" className='logo' />
      </Container>
    
    </Navbar>

 

 <Carousel fade className='mt-3 container  '>
      <Carousel.Item >
      <img src= {laptop4} alt="" className='laptop  '/>
        <Carousel.Caption className='text'>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  >
       <img src={laptop1} alt="" className='laptop   ' />
        <Carousel.Caption className='text'>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  >
        <img src={laptop3} alt="" className='laptop '/>
        <Carousel.Caption className='text'>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 

<div className="container mt-5">
  <div className='row '>
    <div className=' child1 col-lg-6 col-md-8 col-sm-4'>
    <h1 className=' text1 '>Before they sold out
                   <br />
                        readymade gluten
                               </h1>

 
                  <p className='pera mt-2 '> Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
        tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
        chambray.</p>  <br /> 
            <center>
        <Button variant="primary ">Button</Button>{' '}
        <Button variant="secondary mx-1 ">Button</Button>{' '}</center> 
    </div>
    <div className=' child2 col-lg-6  col-md-4 col-sm-4'><img src={car} alt="" className='imaf-fluid ' /></div>
  </div>
</div>

    <CardGroup className='mt-5 container'>
      <Card className='m-1'>
       <img src={laptop1} alt="" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className='m-1 '>
      <img src={laptop3} alt="" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className='m-1 '>
    <img src={laptop4} alt="" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup> 

   


</>

  )
}

export default App
