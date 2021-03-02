// import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
// import { Alert } from 'react-bootstrap'
// import axios from "axios";
// import { useEffect, useRef, useState } from "react";
// import { Link, useHistory } from 'react-router-dom';







// axios.defaults.withCredentials = true;

// function Login() {
//     const url = "http://localhost:3001";
//     let email = useRef();
//     let password = useRef();
//     let [error, setError] = useState('')
//     let [yeserror, yessetError] = useState('')
//     let [loading, setLoading] = useState(false)
//     let history = useHistory()

//     async function login() {

//         if (email.current.state.innerValue === "") {
//             // alert('Password do not match')
//             return setError('email not found')

//         } else if (password.current.state.innerValue === "") {
//             return setError('password not found')
//         }
//         try {
//             yessetError("login succes full")
//             setLoading(true)
//             // yessetError("login succes full")
//             // await signup(email.current.state.innerValue, password.current.state.innerValue)
//             // history.push("/product")
//             axios({
//                 method: 'post',
//                 url: url + '/auth/Login',
//                 data: {
//                     //    name:name.current.state.innerValue,
//                     email: email.current.state.innerValue,
//                     password: password.current.state.innerValue,
//                 }
//             }).then((response) => {
//                 if (response.data.status === 200) {
//                     alert(response.data.message)
//                     console.log("error", response);
//                 } else {




//                 }
//             }).catch((error) => {
//                 console.log(error);
//             });
//         }
//         catch {
//             setError('Fail to craete an account')

//         }

//         setLoading(false)
//     }
//     return (

//         <MDBContainer className="singup_boader">
//             <MDBRow>
//                 <MDBCol md="6">
//                     <form noValidate
//                         onSubmit={(e) => {
//                             e.preventDefault();
//                             login();
//                         }}>
//                         <h1 className="h1 text-center mb-4">Log in</h1>
//                         {/* {currentUser.email} */}

//                         {yeserror && <Alert variant="success">{yeserror}</Alert>}
//                         {error && <Alert variant="danger">{error}</Alert>}
//                         <div className="grey-text">
//                             {/* <MDBInput label="Type your name" icon="user" type="text" ref={name} validate /> */}
//                             <MDBInput label="Type your email" icon="envelope" type="email" ref={email} />
//                             <MDBInput label="Type your password" icon="lock" type="password" ref={password} validate />
//                             {/* <MDBInput label="Type your RE-password" icon="lock" type="password" ref={passwordConfirm} validate /> */}
//                         </div>
//                         <div className="text-center">
//                             <MDBBtn disabled={loading} type="submit">Log in</MDBBtn>
//                             {/* <p>Alerady Have an account? <Link to="./Login">Log In</Link> </p> */}
//                         </div>
//                     </form>
//                 </MDBCol>
//             </MDBRow>
//         </MDBContainer >

//     )

// }
// export default Login
