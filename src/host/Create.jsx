import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBCard, MDBCardBody } from 'mdbreact';
import './../user/style.css';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';

const Create = () => {

    let history = useHistory();
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="3"></MDBCol>
                <MDBCol md="6">
                    <form>
                    <MDBCard>
                        <div className="header pt-3 grey lighten-2">
                            <MDBRow className="d-flex justify-content-center">
                                <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                                    Create Game
                                </h3>
                            </MDBRow>
                        </div>
                        <MDBCardBody>
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol><MDBInput label="Game Title" group type="text" validate error="wrong" success="right" /></MDBCol>
                                <MDBCol><MDBInput label="Game Code" group type="text" validate error="wrong" success="right" /></MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol><MDBInput label="Youtube" group type="email" validate error="wrong" success="right" /></MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol><MDBInput label="User Name" group type="text" validate error="wrong" success="right" /></MDBCol>
                                <MDBCol><MDBInput label="Game Time" group type="text" validate error="wrong" success="right" /></MDBCol>
                            </MDBRow>
                        </MDBContainer>
                        <div className="text-center mt-3">
                            <MDBBtn color="unique" type="button" className="btn-block z-depth-2" onClick={() => { history.push('./questionadd')}}>
                                 Next
                            </MDBBtn>
                        </div>
                        </MDBCardBody>
                        </MDBCard>
                    </form>
                </MDBCol>
                <MDBCol md="3"></MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Create;