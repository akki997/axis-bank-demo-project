import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, NavDropdown, Navbar, Carousel, Jumbotron, Card, Row, Col } from 'react-bootstrap';
class HomeComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }

  }
  render() {
    return (
      <div>
        <Container>
          <Navbar collapseOnSelect expand="lg" fixed="top" style={{ 'backgroundColor': 'rgb(153, 0, 77)' }}>
            <Navbar.Brand href="#home" style={{ 'color': 'white' }}>Bank Of People</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home" style={{ 'color': 'white' }}>Home</Nav.Link>
                <Nav.Link href="#aboutUs" id="about" style={{ 'color': 'white' }}>About Us</Nav.Link>
                <NavDropdown title="Serivces" id="collasible-nav-dropdown" style={{ 'text-color': 'white' }}>
                  <NavDropdown.Item href="#services">Deposit</NavDropdown.Item>
                  <NavDropdown.Item href="#services">Withdraw</NavDropdown.Item>
                  <NavDropdown.Item href="#services">Loan</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#services">Money Transfer</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#contact" id="contactus" style={{ 'color': 'white' }}>Contact Us</Nav.Link>
                <Nav.Link eventKey={2} href="/register" id="sign" style={{ 'color': 'white' }}>
                  SignUp/SignIn
      </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
        <hr /><hr />

        <Carousel fluid id="home">
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100 h-10"
              src="crousal1.jpg"
              alt="First slide" height="450px"
            />
           
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100 h-10"
              src="crousal2.jpg"
              alt="Third slide" height="450px"
            />
           
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100 h-10"
              src="crousal3.jpg"
              alt="Third slide" height="450px"
            />
           
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100 h-10"
              src="crousal4.jpg"
              alt="Third slide" height="450px"
            />
            
          </Carousel.Item>

        </Carousel>

        <Row>
          <Col>
            <Card style={{ width: '23rem', 'border-radius': '10%', 'marginLeft': '30px' }}>
              <h6 style={{ 'marginLeft': '25px', 'marginTop': '5px' }}>Apply Online</h6>
              <Row>
                <Col>
                  <figure>
                    <img src="card1.png" height="50px" width="50px" alt="Card1" style={{ 'marginLeft': '30px' }} />
                    <figcaption className="text-muted" style={{ 'marginLeft': '25px' }}>Savings Account</figcaption>
                  </figure>
                </Col>
                <Col>
                  <figure>
                    <img src="card2.png" height="50px" width="50px" alt="Card2" style={{ 'marginLeft': '15px' }} />
                    <figcaption className="text-muted">Home Loan</figcaption>
                  </figure>
                </Col>
                <Col>
                  <figure>
                    <img src="card3.png" height="50px" width="50px" alt="Card3" style={{ 'marginLeft': '15px' }} />
                    <figcaption className="text-muted">Credit Card</figcaption>
                  </figure>
                </Col>

              </Row>

              <Row>
                <Col>
                  <figure>
                    <img src="card4.png" height="50px" width="50px" alt="Card4" style={{ 'marginLeft': '30px' }} />
                    <figcaption className="text-muted" style={{ 'marginLeft': '25px' }}>Personal Loan</figcaption>
                  </figure>
                </Col>
                <Col>
                  <figure>
                    <img src="card5.png" height="50px" width="50px" alt="Card5" style={{ 'marginLeft': '15px' }} />
                    <figcaption className="text-muted">Life Insurance</figcaption>
                  </figure>
                </Col>
                <Col>
                  <figure>
                    <img src="card6.png" height="50px" width="50px" alt="Card6" style={{ 'marginLeft': '15px' }} />
                    <figcaption className="text-muted">Car Loan</figcaption>
                  </figure>
                </Col>

              </Row>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: '27rem', height: '16.2rem', 'border-radius': '10%', 'marginLeft': '30px' }}>
              <h4 style={{ 'marginLeft': '25px', 'marginTop': '5px' }}>Must Try</h4>
              <Row>
                <Col>
                  <img src="card7.png" height="60px" width="110px" alt="Card7" style={{ 'marginLeft': '15px' }} />

                </Col>
                <Col>
                  <p className="text-muted"> Go digital with new iPLAY digital banking videos. Watch and learn</p>
                </Col>
              </Row>
              <span>
                -------------------------------------------------------------------
              </span>
              <Row>
                <Col>
                  <img src="card8.png" height="60px" width="110px" alt="Card8" style={{ 'marginLeft': '15px' }} />

                </Col>
                <Col>
                  <p className="text-muted"> Now, you can open Fixed Deposit using WhatsApp. Say 'Hi' to 8987567964 to Start.</p>
                </Col>
              </Row>

            </Card>
          </Col>


          <Col>
            <Card style={{ width: '23rem', height: '16.2rem', 'border-radius': '10%', 'marginLeft': '30px' }}>
              <h6 style={{ 'marginLeft': '25px', 'marginTop': '5px' }}>Popular Products</h6>
              <Row>
                <Col>
                  <img src="card9.png" height="90px" width="90px" alt="Card9" style={{ 'marginLeft': '15px' }} />

                </Col>
                <Col>
                  <p className="text-muted"> Cancer cover. Get secured against the rist at 100/month.</p>
                </Col>
              </Row>
              <span>
                ---------------------------------------------------------
              </span>
              <Row>
                <Col>
                  <img src="card10.png" height="90px" width="90px" alt="Card10" style={{ 'marginLeft': '15px' }} />


                </Col>
                <Col>
                  <p className="text-muted">Home Loan satrting @ 8 p.a</p>
                </Col>
              </Row>

            </Card>
          </Col>



        </Row>

        <Jumbotron id="aboutUs" fluid style={{ 'background-color': 'rgb(255, 226, 192)', marginTop: '10px' }}>

          <h1 className="text-center" style={{ 'color': 'rgb(173, 62, 55)' }}>About Us</h1>
          <p className="lead text-center" style={{ 'color': 'rgb(116, 156, 180)', fontWeight: 'bold' }}>Bank Of People is an Indian private sector bank headquatered in Mumbai, Maharashtra. It sells financial services to large and mid-size companies, SMEs and retail businesses.

          As of 30 June 2016, 30.81% shares are owned by the promoters and the promoter group (United India Insurance Company Limited,
          Oriental Insurance Company Limited, National Insurance Company Limited, New India Assurance Company Ltd, GIC, LIC and UTI). The remaining 69.19% shares are owned by mutual funds, FIIs, banks, insurance companies, corporate bodies and individual investors.
           </p>


        </Jumbotron>
        <Jumbotron id="services" style={{ 'background-color': 'rgb(222, 171, 159)' }}>
          <h1 className="text-center" style={{ color: 'rgb(173, 62, 55)' }}>Services We Offer</h1>
          <Row style={{ marginBottom: '10px' }}>

            <Col>
              <Card style={{ width: '15rem', 'border-radius': '5%', 'marginLeft': '30px' }}>
                <figure>
                  <img src="card11.png" height="150px" width="200px" alt="Card6" style={{ 'marginLeft': '15px', float: 'center' }} />
                  <figcaption className="text-muted text-center">Digital Saving Account</figcaption>
                </figure>
              </Card>
            </Col>




            <Col>
              <Card style={{ width: '15rem', 'border-radius': '5%', 'marginLeft': '30px' }}>
                <figure>
                  <img src="credit.png" height="150px" width="200px" alt="Card6" style={{ 'marginLeft': '15px', float: 'center' }} />
                  <figcaption className="text-muted text-center">Credit Card</figcaption>
                </figure>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: '15rem', 'border-radius': '5%', 'marginLeft': '30px' }}>
                <figure>
                  <img src="car.jpg" height="150px" width="200px" alt="Card6" style={{ 'marginLeft': '15px', float: 'center' }} />
                  <figcaption className="text-muted text-center">Car Loan</figcaption>
                </figure>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: '15rem', 'border-radius': '5%', 'marginLeft': '30px' }}>
                <figure>
                  <img src="money.jpg" height="150px" width="239px" alt="Card6" />
                  <figcaption className="text-muted text-center">Money Transfer</figcaption>
                </figure>
              </Card>
            </Col>




          </Row>
        </Jumbotron>

        <Jumbotron id="contact" fluid style={{ 'background-color': 'rgb(255, 226, 192)', marginTop: '10px' }}>

        <h1 className="display-4 text-center" style={{'color': 'rgb(173, 62, 55)',fontWeight:'bold'}}>Contact Us</h1>
        <form style={{'color': 'rgb(116, 156, 180)'}}>
          <div className="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"></input>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Email</label>
            <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Email Id"></input>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Subject</label>
            <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Subject"></input>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Comment</label>
            <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Comment"></input>
          </div>
          
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>


        </Jumbotron>
      </div>




    );
  }
}

export default HomeComponent;