import { useEffect, useRef, useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, Typography } from 'mdbreact';
import { Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";
import { json } from "body-parser";
import url from "../core/index";    



const Signup = () => {
    // const url = "http://localhost:3001";
    let name = useRef();
    let email = useRef();
    let password = useRef();
    let passwordConfirm = useRef();
    let [error, setError] = useState('')
    let [yeserror, yessetError] = useState('')
    let [loading, setLoading] = useState(false)
    let [validateEmail, setValidateEmail] = useState("");
    const [validateMessage, setValidateMessage] = useState("");
    // let history = useHistory()


    async function signup() {
        // e.preventDefault()

        console.log(email.current.state.innerValue);
        // console.log(password.current.value );
        // console.log(passwordConfirm.current.value );
        if (email.current.state.innerValue === "") {
            return setError('email not found')
        } else if (password.current.state.innerValue !== passwordConfirm.current.state.innerValue) {
            // alert('Password do not match')
            return setError('Password do not match')

        }
        try {
            yessetError("Sign up succes full")
            setLoading(true)
            // await signup(email.current.state.innerValue, password.current.state.innerValue)
            // history.push("/product")
            axios({
                method: 'post',
                url: url + '/auth/signup',
                data: {
                    name: name.current.state.innerValue,
                    email: email.current.state.innerValue,
                    password: password.current.state.innerValue,
                }
            }).then((response) => {
                if (response.data.status === 200) {
                    alert(response.data.message)
                } else {
                    alert(response.data.message);
                }
            }).catch((error) => {
                console.log(error);
            });
        }
        catch {
            setError('Fail to craete an account')

        }

        setLoading(false)
    }

    useEffect(() => {
        // console.log(validateEmail,"validateEmail");

        axios({
            method: "post",
            // url: `${url}/auth/validateEmail`,
            url: url + '/auth/validateEmail',
            data: {
                email: validateEmail,
            },
        }).then((res) => {
           
            // console.log(res, "res");
           
                if (res.data.data === null) {
                    setValidateMessage("email valid");

                } else if (res.data.data) {
                    setValidateMessage("email already registered");

                }
        });
    }, [validateEmail]);

    return (
        <MDBContainer className="singup_boader">
            <MDBRow>
                <MDBCol md="6">
                    <form noValidate
                        onSubmit={(e) => {
                            e.preventDefault();
                            signup();
                        }}>
                        <h1 className="h1 text-center mb-4">Sign up</h1>
                        {/* {currentUser.email} */}
                        {error && <Alert variant="danger">{error}</Alert>}
                        {yeserror && <Alert variant="success">{yeserror}</Alert>}
                        <div className="grey-text">
                        {/* className={transaction.amount < 0 ? 'minus' : 'plus'} */}
                            <MDBInput label="Type your name" icon="user" type="text" ref={name} validate />

                            <div>
                                <MDBInput label="Type your email" icon="envelope" type="email" ref={email} onChange={(e) => setValidateEmail(e.target.value)} />
                                <span class="text-primary">{validateMessage}</span>
                            </div>

                            <MDBInput label="Type your password" icon="lock" type="password" ref={password} validate />
                            <MDBInput label="Type your RE-password" icon="lock" type="password" ref={passwordConfirm} validate />
                            <br />
                            <Typography className="text-muted" className="float-right">
                              
                              </Typography>
                            <br />
                        </div>
                        <div className="text-center">
                            <MDBBtn disabled={loading} type="submit">Sign up</MDBBtn>
                            <p>Alerady Have an account? <Link to="./Login">Log In</Link> </p>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer >

    );
};

export default Signup;