
import './App.css'

import food from './assets/food.jpg';
import burger from './assets/burger.jpg';
import pouring from './assets/pouring.jpg';
import veg from './assets/veg.jpg';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Footer from './Components/Footer';

function App() {

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className='text-warning'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeEMbiOH74v-MH9ySXPpKlEeater5-5mAezA&s" alt="" height={'30px'}width={'40px'} />RECIPIES DETAILS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto "style={{marginLeft:'45%'}}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">All Recipies</Nav.Link>
            <Nav.Link href="#link">About me </Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
           <div className=' ms-5 mt-2' > 
             <i  class="fa-brands fa-facebook"></i>&nbsp;&nbsp;
             <i  class="fa-brands fa-instagram"></i>&nbsp;&nbsp;
             <i class="fa-brands fa-youtube"></i>&nbsp;&nbsp;
             <i class="fa-brands fa-pinterest"></i>&nbsp;&nbsp;</div>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <div className='container landingsection'>
        <div className='row align-items-center my-5'>
          <div className="col-lg-5">
            <h1>welcome to <span className='text-warning'>food Reciepies</span></h1>
            <p style={{ textAlign: 'justify' }} className='mt-5'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia explicabo enim, numquam voluptates a commodi facere architecto fugit, fugiat tenetur omnis voluptatum odio ullam dicta ducimus ea, provident repellat esse.
            </p>
            <button  className='btn btn-info mt-4'>Get started</button>
          </div>
          <div className="col"></div>
          <div className="col-lg-6">
            <img style={{ height: '350px' }} src={food} alt="Food" />
          </div>
        </div>
      </div>
   <div style={{marginTop:'5%'}} >
   <i style={{marginLeft:'49%',fontSize:'30px',color:'orange',marginTop:'5%'}} class="fa-solid fa-heart"></i>
    <h2 className='text-center text-warning mt-5'> FOOD WORLD</h2>
    <div style={{float:'left',marginTop:'4%'}}><img style={{marginLeft:'9%'}} src="https://static.wixstatic.com/media/913019_cbe883e78e864578bae99b4a9b6a71c9~mv2_d_3411_4264_s_4_2.jpg/v1/fill/w_980,h_552,fp_0.50_0.50,q_90,enc_auto/913019_cbe883e78e864578bae99b4a9b6a71c9~mv2_d_3411_4264_s_4_2.jpg" alt="" height={'200px'}width={'250px'}/>
    <h5 style={{marginLeft:'14%'}}>Christmas</h5>
    <p style={{marginLeft:'12%'}}>All Chrsitmas Recipes</p>
    </div>
    <div style={{float:'left', marginLeft:'4%',marginTop:'5%'}}>
    <img style={{marginLeft:'9%'}} src="https://static.wixstatic.com/media/f1aac85a84944d07b6ddc06808475d5f.jpg/v1/fill/w_980,h_552,fp_0.50_0.50,q_90,enc_auto/f1aac85a84944d07b6ddc06808475d5f.jpg" alt="" height={'200px'}width={'250px'}/>
    <h5 style={{marginLeft:'14%'}}>Thanksgiving</h5>
    <p style={{marginLeft:'12%'}}>All Thanksgiving Recipes</p>
    </div>
   <div style={{float:'left', marginLeft:'4%',marginTop:'5%'}}>
   <img style={{marginLeft:'9%'}} src="https://static.wixstatic.com/media/913019_dd02934549b843dfa000c502bff89272~mv2_d_5600_3738_s_4_2.jpg/v1/fill/w_980,h_552,fp_0.50_0.50,q_90,enc_auto/913019_dd02934549b843dfa000c502bff89272~mv2_d_5600_3738_s_4_2.jpg" alt="" height={'200px'}width={'250px'}/>
    <h5 style={{marginLeft:'14%'}}>Halloween</h5>
    <p style={{marginLeft:'12%'}}>All Halloween Recipes</p>
   </div>
    <div style={{float:'left', marginLeft:'4%',marginTop:'5%'}}>
    <img style={{marginLeft:'9%'}} src="https://static.wixstatic.com/media/913019_2b78ad42f1194e9385eef5624d6ca50d~mv2.jpg/v1/fill/w_980,h_552,fp_0.50_0.50,q_90,enc_auto/913019_2b78ad42f1194e9385eef5624d6ca50d~mv2.jpg" alt="" height={'200px'}width={'250px'}/>
    <h5 style={{marginLeft:'14%'}}>Easter</h5>
    <p style={{marginLeft:'12%'}}>All Easter Recipes</p>
    </div>
    <div style={{float:'left', marginLeft:'4%',marginTop:'5%'}}>
    <img style={{marginLeft:'9%'}} src="https://static.wixstatic.com/media/913019_f7b7bd40c47f4fc99051871a6823b494~mv2.jpg/v1/fill/w_980,h_552,fp_0.50_0.50,q_90,enc_auto/913019_f7b7bd40c47f4fc99051871a6823b494~mv2.jpg" alt="" height={'200px'}width={'250px'}/>
    <h5 style={{marginLeft:'14%'}}>4th of july</h5>
    <p style={{marginLeft:'12%'}}>All 4th of july Recipes</p>
    </div>
   
   </div>
      <div className='future container mt-4'>
        <img style={{marginLeft:'49%',marginTop:'6%'}} src="https://cdn-icons-png.flaticon.com/512/7763/7763272.png" alt="" height={'40px'}width={'30px'} />
        <h2 className='text-center text-warning mt-3'>Latest Foods </h2>
        <div className='row'>
          <div className="col-lg-4">
            <Card style={{ width: '21rem' }} className='p-3' >
              <Card.Img variant="top" src={burger} />
              <Card.Body>
                <Card.Title>BURGER</Card.Title>
                <Card.Text>
                  Howdy, I am Martin from England, I am founder, CEO and working at Iceland company.
                  
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-4">
            <Card style={{ width: '21rem' }} className='p-3' >
              <Card.Img variant="top" src={pouring} />
              <Card.Body>
                <Card.Title>POURING</Card.Title>
                <Card.Text>
                  Howdy, I am Martin from England, I am founder, CEO and working at Iceland company.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-4">
            <Card style={{ width: '20rem' }} className='p-3' >
              <Card.Img style={{height:'19rem'}} variant="top" src={veg} />
              <Card.Body>
                <Card.Title>VEGETABLES</Card.Title>
                <Card.Text>
                  Howdy, I am Martin from England, I am founder, CEO and working at Iceland company.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>


    <div>
     <h5 > </h5>
    </div>

      <Footer />
    </>
  )
}

export default App
