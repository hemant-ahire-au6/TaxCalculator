import React from 'react'
import { Navbar, Container,Button } from "react-bootstrap"
import {useHistory} from "react-router-dom"

function NavBar(props) {
    const history = useHistory()
    console.log(props)

    const handleRouteChange = ()=>{
        history.push("/")
    }
    return (

        <Navbar collapseOnSelect expand="lg" className="darkNavbar">
            <Container>
                <Navbar.Brand className="navbar-logo">JackFruit</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    {
                        props.match.path == "/" ?
                            null
                            :
                            <Button variant="primary" type="submit" onClick={handleRouteChange}>
                                Logout
                            </Button>
                    }

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;
