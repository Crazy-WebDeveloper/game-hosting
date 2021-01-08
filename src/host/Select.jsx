import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBCard, MDBCardBody } from 'mdbreact';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';

const SelectComponent = () => {

    let history = useHistory();
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="3"></MDBCol>
                <MDBCol md="6">
                    <MDBCard>
                        <div className="header pt-3 grey lighten-2">
                            <MDBRow className="d-flex justify-content-center">
                                <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                                    What are you doing?
                                </h3>
                            </MDBRow>
                        </div>
                        <MDBCardBody>
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol md="6"><MDBBtn type="button" color="primary" style={{width: '97%'}} onClick={() => {history.push('creategame')}}>Create Game</MDBBtn></MDBCol>
                                <MDBCol md='6'><MDBBtn type="button" color="primary" style={{width: "97%"}} onClick={() => {history.push('host')}}>Host Game</MDBBtn></MDBCol>
                            </MDBRow>
                        </MDBContainer>
                        </MDBCardBody>
                        </MDBCard>
                </MDBCol>
                <MDBCol md="3"></MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default SelectComponent;