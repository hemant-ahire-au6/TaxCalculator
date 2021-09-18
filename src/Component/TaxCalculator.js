import React from 'react'
import { Container, Row, Col, Form, Button, Card} from "react-bootstrap"

import TaxLogo from "../Asset/CAGR.svg"
import NavBar from './NavBar'


function TaxCalculator(props) {

    const [taxDetails, setTaxDetails] = React.useState({
        basicSalary: "",
        leaveTravelAllowance: "",
        houseRentAllowance: "",
        foodAllowance: "",
        investmentUnder80C: "",
        rentPaid: "",
        typeOfCity: "",
        mediclaimPolicyPremium: ""
    })

    const [reset, setReset] = React.useState(false)
    const [incomeDisplay, setIncomeDisplay] = React.useState(false)
    const [taxAmount, setTaxAmount] = React.useState(0)
    const [error, setError] = React.useState(false)

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setTaxDetails({ ...taxDetails, [name]: value })
        console.log(taxDetails.basicSalary.length)
    }

    React.useEffect(() => {

        if (taxDetails.basicSalary.length !== 0 ||
            taxDetails.leaveTravelAllowance.length !== 0 ||
            taxDetails.houseRentAllowance.length !== 0 ||
            taxDetails.foodAllowance.length !== 0 ||
            taxDetails.investmentUnder80C.length !== 0 ||
            taxDetails.rentPaid.length !== 0 ||
            taxDetails.mediclaimPolicyPremium.length !== 0
        ) {
            setReset(true)
        }else{
            setReset(false)
        }
    }, [taxDetails])

    const handleCalculation = () => {

        var applicableHRA;
        if(
            taxDetails.basicSalary.length === 0||
            taxDetails.leaveTravelAllowance.length === 0||
            taxDetails.houseRentAllowance.length === 0||
            taxDetails.foodAllowance.length === 0||
            taxDetails.investmentUnder80C.length === 0||
            taxDetails.rentPaid.length === 0||
            taxDetails.typeOfCity.length === 0||
            taxDetails.mediclaimPolicyPremium.length === 0
        ){
                setError(true)
        }else{
            setError(false)
            if (taxDetails.typeOfCity === "metro") {
                let applicableHRA1 = 0.5 * taxDetails.basicSalary
                let applicableHRA2 = taxDetails.rentPaid - 0.1 * taxDetails.basicSalary
                let applicableHRA3 = parseInt(taxDetails.houseRentAllowance)
    
                console.log(applicableHRA1, applicableHRA2, applicableHRA3)
                applicableHRA = Math.min(applicableHRA1, applicableHRA2, applicableHRA3)
            } else {
                let applicableHRA1 = 0.4 * taxDetails.basicSalary
                let applicableHRA2 = taxDetails.rentPaid - 0.1 * taxDetails.basicSalary
                let applicableHRA3 = parseInt(taxDetails.houseRentAllowance)
    
                console.log(applicableHRA1, applicableHRA2, applicableHRA3)
                applicableHRA = Math.min(applicableHRA1, applicableHRA2, applicableHRA3)
            }

            let Bas = parseInt(taxDetails.basicSalary)
            let LTA = parseInt(taxDetails.leaveTravelAllowance)
            let HRA = parseInt(taxDetails.houseRentAllowance)
            let FA = parseInt(taxDetails.foodAllowance)
            let INV = parseInt(taxDetails.investmentUnder80C)
            let MED = parseInt(taxDetails.mediclaimPolicyPremium)
    
            let taxableIncome = (Bas + LTA + HRA + FA) - applicableHRA - INV - MED
    
            console.log("taxable income", taxableIncome)
    
            setIncomeDisplay(true)
            setTaxAmount(taxableIncome)
        }
       
    }

    const handleReset = () => {
        setTaxDetails({
            basicSalary: "",
            leaveTravelAllowance: "",
            houseRentAllowance: "",
            foodAllowance: "",
            investmentUnder80C: "",
            rentPaid: "",
            typeOfCity: "",
            mediclaimPolicyPremium: ""
        })
        setIncomeDisplay(false)
    }
    return (
        <>

            <NavBar {...props}/>
            <Container>

                <Row >
                    <Col xs={12} md={12} className="title-col">
                    <h1 > Tax Calculator</h1>
                    </Col>
                </Row>
                <Row className="main-div">
                    <Col xs={12} md={6} >
                        {/* <Row >
                            <Col xs={12} md={12} className="title-col">
                                <h1 > Tax Calculator</h1>
                            </Col>
                        </Row> */}
                        <Card className="shadow p-3 mb-1 bg-white rounded inputCard">
                                {
                                    error ?
                                        <div className="error">
                                            <p> Please enter all details</p>
                                        </div> : null
                                }
                            {/* <Card.Header as="h5">
                                <Row>
                                    <Col xs={12} md={12}>
                                        <p>To Calculate your tax please enter all the details </p>
                                    </Col>
                                </Row>
                            </Card.Header> */}
                            <Card.Body>
                                <Row>
                                    <Col xs={12} md={6} >
                                        <Form>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="form-lable">Basic Salary</Form.Label>
                                                <Form.Control
                                                    className="form-input"
                                                    type="number"
                                                    placeholder="Ex:96000"
                                                    value={taxDetails.basicSalary}
                                                    name="basicSalary"
                                                    onChange={handleChange}
                                                />
                                                {/* <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                                </Form.Text> */}
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label className="form-lable">House Rent Allowance(HRA)</Form.Label>
                                                <Form.Control
                                                    className="form-input"
                                                    type="number"
                                                    placeholder="Ex:48000"
                                                    value={taxDetails.houseRentAllowance}
                                                    name="houseRentAllowance"
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="form-lable">Investments under 80C</Form.Label>
                                                <Form.Control
                                                    className="form-input"
                                                    type="number"
                                                    placeholder="Ex:50000"
                                                    value={taxDetails.investmentUnder80C}
                                                    name="investmentUnder80C"
                                                    onChange={handleChange}
                                                />
                                                {/* <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                                </Form.Text> */}
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label className="form-lable">Type of city</Form.Label>
                                                <Form.Select
                                                    aria-label="Default select example"
                                                    value={taxDetails.typeOfCity}
                                                    name="typeOfCity"
                                                    onChange={handleChange}
                                                >
                                                    <option>select</option>
                                                    <option value="metro">Metro</option>
                                                    <option value="nonMetro">Non-Metro</option>

                                                </Form.Select>
                                            </Form.Group>

                                            {/* <Button variant="primary" type="submit">
                                        Submit
                                     </Button> */}
                                        </Form>

                                    </Col>

                                    <Col xs={12} md={6} >
                                        <Form>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="form-lable">Leave Travel Allowance</Form.Label>
                                                <Form.Control
                                                    className="form-input"
                                                    type="number"
                                                    placeholder="Ex:5000"
                                                    value={taxDetails.leaveTravelAllowance}
                                                    name="leaveTravelAllowance"
                                                    onChange={handleChange}
                                                />
                                                {/* <Form.Text className="text-muted">
                                         We'll never share your email with anyone else.
                                          </Form.Text> */}
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label className="form-lable">Food Allowance</Form.Label>
                                                <Form.Control
                                                    className="form-input"
                                                    type="number"
                                                    placeholder="Ex:70000"
                                                    value={taxDetails.foodAllowance}
                                                    name="foodAllowance"
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="form-lable">Rent paid</Form.Label>
                                                <Form.Control
                                                    className="form-input"
                                                    type="number"
                                                    placeholder="Ex:60000"
                                                    value={taxDetails.rentPaid}
                                                    name="rentPaid"
                                                    onChange={handleChange}
                                                />
                                                {/* <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                            </Form.Text> */}
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label className="form-lable">Mediclaim policy premium</Form.Label>
                                                <Form.Control
                                                    className="form-input"
                                                    type="number"
                                                    placeholder="Ex:36000"
                                                    value={taxDetails.mediclaimPolicyPremium}
                                                    name="mediclaimPolicyPremium"
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        </Form>

                                    </Col>
                                </Row>

                            </Card.Body>

                            <Card.Footer className="text-muted">
                                <Row>
                                    <Col xs={12} md={12}>
                                        <Button
                                            variant="primary"
                                            type="submit" style={{ marginRight: "20px" }}
                                            onClick={handleCalculation}
                                        >
                                            Calculate
                                        </Button>

                                        {
                                            reset?
                                            <Button variant="primary" type="submit" onClick={handleReset}>
                                            Reset
                                             </Button>
                                        :
                                        null
                                        }

                                        

                                        {/* {
                                        rest?console.log(rest,"true"):(console.log(rest,"false"))
                                    } */}


                                    </Col>
                                </Row>

                            </Card.Footer>
                        </Card>
                    </Col>

                    <Col xs={12} md={5} >
                        <Row>

                            <Col xs={12} md={12}>
                                <img src={TaxLogo} alt="calculation" className="calculation" />

                                {
                                    incomeDisplay ?
                                        <>
                                            <div className="taxable-income">
                                                <h1> Taxable Income </h1>
                                                <p>your Taxable Income based on given details will be <b> {taxAmount}</b>.</p>
                                            </div>
                                        </>
                                        : null
                                }

                            </Col>

                            {/* <Col xs={12} md={12}>
                            <Card>
                            <Card.Header>
                            <img src={TaxLogo} alt="calculation" />
                            </Card.Header>
                                <Card.Body>
                                    <Card.Title>
                                        Taxable Income 
                                    </Card.Title>
                                    <Card.Text>
                                       your Taxable Income based on given details will be .
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col> */}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default TaxCalculator;
