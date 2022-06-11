
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './NavbarComponent';
import { Button, Form } from 'react-bootstrap'
import axios from "axios";

function App() {


  const baseURL ="https://reqres.in/api/login";

  //  const handleSubmit = (event) => {
  //   axios.post(baseURL, {
  //     email: email,
  //     password: password
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }

  function handleSubmit(e) {
    e.preventDefault()
    const {email, password } = e.target.elements
    // console.log({email: email.value, password: password.value })
    axios.post(baseURL, {
      email: email.value,
      password: password.value
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error.response.data);
    });
}


  return (
    <div className="Container">
      <NavbarComponent />
      <div className="home-contain">
        <div className="login-contain">
          <h2 className="welcome-text">Welcome Back</h2>
          <h3 className="sub-text">Subtext which is of no need.</h3>

          <Form className='form' onSubmit={handleSubmit}>
            <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control id="email" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control id="password" type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="btn btn-dark button" type="submit">
             Login
            </Button>
          </Form>
          
        </div>
        <div className="image-contain">

        </div>
      </div>
      {/* <img alt='illustration' className='illustration' src={illustration}/> */}
    </div>
  );
}

export default App;
