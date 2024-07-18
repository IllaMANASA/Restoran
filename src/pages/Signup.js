// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';

// const SignupContainer = styled.div`
//   background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
//   color: white;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   min-height: 100vh;
//   padding: 20px;
// `;

// const FormContainer = styled.div`
//   background-color: white;
//   padding: 4rem;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   border-radius: 10px;
//   width: 100%;
//   max-width: 400px;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
// `;

// const InputContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 10px;
//   padding: 10px;
//   border-radius: 20px;
//   border: 1px solid #ddd;
// `;

// const Input = styled.input`
//   flex: 1;
//   border: none;
//   outline: none;
//   padding-left: 10px;
//   font-size: 16px;
//   border-radius: 20px;
// `;

// const Button = styled.button`
//   padding: 10px;
//   font-size: 16px;
//   background-color: #6a11cb;
//   color: white;
//   border: none;
//   cursor: pointer;
//   border-radius: 20px;
//   margin-top: 10px;

//   &:hover {
//     background-color: #2575fc;
//   }
// `;

// const ErrorText = styled.div`
//   font-weight: bold;
//   color: #d9534f;
// `;

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const [error, setError] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle signup logic here
//     console.log('User signed up with data:', formData);
//   };

//   return (
//     <SignupContainer>
//       <FormContainer>
//         <h2 className="text-center mb-4">Sign Up</h2>
//         <Form onSubmit={handleSubmit}>
//           <InputContainer>
//             <FaUser className="me-2" />
//             <Input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//             />
//           </InputContainer>
//           <InputContainer>
//             <FaEnvelope className="me-2" />
//             <Input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </InputContainer>
//           <InputContainer>
//             <FaLock className="me-2" />
//             <Input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//           </InputContainer>
//           <Button type="submit">Sign Up</Button>
//           {error && <ErrorText className="mt-3">Error signing up. Please try again.</ErrorText>}
//         </Form>
//         <div className="text-center mt-3">
//           <p>Already have an account? <Link to="/login">Login here</Link></p>
//         </div>
//       </FormContainer>
//     </SignupContainer>
//   );
// };

// export default Signup;
// // import React, { useState, useEffect } from 'react'
// // import { Button, Form } from 'react-bootstrap'
// // import { useNavigate, Link } from 'react-router-dom'
// // import { useFirebase } from '../context/Firebase'

// // const Login = () => {

// //   const firebase = useFirebase();
// //   const navigate = useNavigate();

// //   const [error, setError] = useState(false);
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   useEffect(() => {
// //     if (firebase.isLoggedIn) {
// //       navigate("/");
// //     }
// //   }, [firebase, navigate])

// //   //console.log(firebase)

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     try {
// //       console.log("Log in an user")
// //       await firebase.signinUserWithEmailAndPassword(email, password);
// //       console.log("Log in successfull");
// //     }
// //     catch (error) {
// //       setError(error);
// //       console.log(error);
// //     }
// //   }

// //   return (
// //     <>
// //       <Form className='h-100 min-vh-100 d-flex flex-column align-items-center justify-content-center' onSubmit={handleLogin}>
// //         <Form.Group className="mb-3" controlId="formGroupEmail">
// //           <Form.Label>Email address</Form.Label>
// //           <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} />
// //         </Form.Group>
// //         <Form.Group className="mb-3" controlId="formGroupPassword">
// //           <Form.Label>Password</Form.Label>
// //           <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
// //         </Form.Group>
// //         <Button onClick={handleLogin}>Login</Button>
// //         {
// //           error && <span className='mt-3 text-danger'>Wrong Email and password</span>
// //         }
// //         <p>Don't have an account</p>
// //         <Link to="/register">Sign up here</Link>
// //       </Form>

// //     </>
// //   );
// // }
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #097969;
  color: white;
  border: none;
  cursor: pointer;
`;

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('User logged in with data:', formData);
  };

  return (
    <FormContainer>
      <h2>Sign Up</h2>
      <Form onSubmit={handleSubmit}>
        <Input
        type="text"
        name="text"
        placeholder="First Name"
        ></Input>
        <Input
        type="text"
        name="text"
        placeholder="Last Name"
        ></Input>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <Button type="submit">Login</Button>
      </Form>
      <p>
        Already Have an account? <Link to="/login">Login</Link>
      </p>
    </FormContainer>
  );
};

export default Signup;
