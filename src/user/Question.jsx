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
                    <a href="https://www.lipsum.com" target="_blank">
                    <img src="https://www.experianinfotech.com/images/JainPanchang-Banner1.png" style={{width: '100%', height: '200px'}} className="img-fluid" alt="" /></a>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="12">
                    <MDBRow>
                        <MDBCol md="6">
                            <MDBInput label="QUESTION" />        
                        </MDBCol>
                        <MDBCol md="6">
                            <MDBInput label="YOUR SCORE" />
                        </MDBCol>
                    </MDBRow>
                    <p className="mt-5 mb-5 text-center">Question Text</p>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="defaultUnchecked" />
                        <label className="custom-control-label ml-3 mb-3" for="defaultUnchecked">Answer1</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="defaultUnchecked" />
                        <label className="custom-control-label ml-3 mb-3" for="defaultUnchecked">Answer2</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="defaultUnchecked" />
                        <label className="custom-control-label ml-3 mb-3" for="defaultUnchecked">Answer3</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="defaultUnchecked" />
                        <label className="custom-control-label ml-3 mb-3" for="defaultUnchecked">Answer4</label>
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default CreateCodeComponent;