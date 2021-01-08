import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import { Link, useHistory } from "react-router-dom";
import "./style.css";

const CreateCodeComponent = (props) => {
    
    let history = useHistory();

    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="12">
                    <div className="form-group code-inp">
                        <input type="email" className="code-inp form-control" placeholder="ENTER YOUR GAME CODE" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control code-inp" placeholder="ENTER YOUR MOBILE NUMBER" />
                    </div>

                    <div className="text-center mb-1 mt-1">
                        <MDBBtn
                            color="primary"
                            type="button"
                            style={{ width: '116px' }}
                            onClick={() => history.push('/question')}
                        >SUBMIT
                                </MDBBtn>
                    </div>
                    <p className="mt-4 mb-3" style={{ textAlign: 'center' }}>You will get an OTP on your mobile <br />
                            please enter the OTP and authenticate yourself!</p>
                    <div className="form-group code-inp" style={{ marginBottom: "5px" }}>
                        <input type="text" className="code-inp form-control" placeholder="Enter OTP" />
                    </div>
                    <div className="text-center mb-1 mt-0">
                        <MDBBtn
                            color="primary"
                            type="button"
                            style={{ width: '116px', paddingLeft: '0', paddingRight: '0' }}
                            onClick={() => history.push('/question')}
                        >AUTHENTICATE
                                </MDBBtn>
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default CreateCodeComponent;