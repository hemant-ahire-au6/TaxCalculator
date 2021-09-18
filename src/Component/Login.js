import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import LogoImage from "../Asset/logo.jpg";
import { useHistory } from "react-router-dom";
import NavBar from './NavBar';
import Typed from 'react-typed';
import validator from 'validator';

function Login(props) {
    console.log(props)

    const history = useHistory()

    const [loginDetails, setLoginDetails] = React.useState({
        email: "",
        password: ""
    })

    const [error, setError] = React.useState(false)
    const [emailError, setEmailError] = React.useState(false)
    const [passwordError, setPasswordError] = React.useState(false)


    const handleChange = (e) => {

        let name = e.target.name
        let value = e.target.value

        setLoginDetails({ ...loginDetails, [name]: value })

        if( validator.isEmail(loginDetails.email)){
            setEmailError(false)
        }else{
            setEmailError(true)
        }
    }


    
    const handlePasswordChange = (e) => {

        let name = e.target.name
        let value = e.target.value

        setLoginDetails({ ...loginDetails, [name]: value })

        if (validator.isStrongPassword(loginDetails.password, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
          })) {
            setPasswordError(false)
          } else {
            setPasswordError(true)
          }
        
    }

    const handleLogin = (e) => {
        console.log(loginDetails)
        if (loginDetails.email.length !== 0 && loginDetails.password.length !== 0) {
            history.push("/tax-calculator")
        } else {
            setError(true)
        }
    }

    return (
        <>
            <NavBar {...props} />
            <Container fluid>

                <Row className="login-row">
                    <Col xs={12} md={6} className="image-col">

                        <Typed
                        className="animation"
                        strings={['Learn Finance',"Learn tax","Learn Insurance","Your Destination for finacial needs"]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                        />
                        {/* <img src={LoginImage} className="login-image" alt="logo" /> */} 
                    </Col>
                    <Col className="mobile-col-1">
                    <Typed
                        className="animation1"
                        strings={['Learn Finance',"Learn tax","Learn Insurance","Your Destination for finacial needs"]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                        />
                    </Col>

                    <Col xs={12} md={6} className="login-column">
                        <div className="login-div">
                            <div className="logo">
                                <img src={LogoImage} alt="logo" />
                            </div>
                            <div className="title">Finance, Taxes, Insurance</div>
                            <div className="sub-title">Made Easy!</div>

                            <div className="fields">
                                <div className="userName">
                                    <svg class="svg-icon" viewBox="0 0 20 20">
                                        <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
                                    </svg>
                                    <input
                                        type="username"
                                        className="user-input"
                                        placeholder="username"
                                        name="email"
                                        value={loginDetails.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                {
                                        emailError ?
                                        <div className="errorMessage">
                                            <p> please enter valid email id</p>
                                        </div> : null
                                    }
                                <div className="password">
                                    <svg class="svg-icon" viewBox="0 0 20 20">
                                        <path d="M17.308,7.564h-1.993c0-2.929-2.385-5.314-5.314-5.314S4.686,4.635,4.686,7.564H2.693c-0.244,0-0.443,0.2-0.443,0.443v9.3c0,0.243,0.199,0.442,0.443,0.442h14.615c0.243,0,0.442-0.199,0.442-0.442v-9.3C17.75,7.764,17.551,7.564,17.308,7.564 M10,3.136c2.442,0,4.43,1.986,4.43,4.428H5.571C5.571,5.122,7.558,3.136,10,3.136 M16.865,16.864H3.136V8.45h13.729V16.864z M10,10.664c-0.854,0-1.55,0.696-1.55,1.551c0,0.699,0.467,1.292,1.107,1.485v0.95c0,0.243,0.2,0.442,0.443,0.442s0.443-0.199,0.443-0.442V13.7c0.64-0.193,1.106-0.786,1.106-1.485C11.55,11.36,10.854,10.664,10,10.664 M10,12.878c-0.366,0-0.664-0.298-0.664-0.663c0-0.366,0.298-0.665,0.664-0.665c0.365,0,0.664,0.299,0.664,0.665C10.664,12.58,10.365,12.878,10,12.878"></path>
                                    </svg>
                                    <input
                                        type="password"
                                        className="pass-input"
                                        placeholder="password"
                                        name="password"
                                        value={loginDetails.password}
                                        onChange={handlePasswordChange}
                                    />
                                </div>
                                {
                                        passwordError ?
                                        <div className="errorMessage">
                                            <p> Min 8 letter,1 no,1 uppercase,1 symbol</p>
                                        </div> : null
                                    }
                                <button className="signin-button" onClick={handleLogin}>
                                    Login
                                </button>
                                {
                                    error ?
                                        <div className="error">
                                            <p> please enter details to login</p>
                                        </div> : null
                                }

                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>

        </>


    )
}

export default Login;
