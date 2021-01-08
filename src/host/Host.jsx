import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBCard, MDBCardBody, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';

import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import * as actions from './../actions';

const Host = () => {

    let history = useHistory();
    return (
        <MDBContainer>
            <MDBCard>
                <div className="header pt-3 grey lighten-2">
                    <MDBRow className="d-flex justify-content-center">
                        <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                            Game Lists
                                </h3>
                    </MDBRow>
                </div>
                <MDBCardBody>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md="3">
                                <MDBDropdown>
                                    <MDBDropdownToggle caret color="success" style={{ width: "97%" }}>
                                        Game Title
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu basic>
                                        <MDBDropdownItem>Question1</MDBDropdownItem>
                                        <MDBDropdownItem>Question2</MDBDropdownItem>
                                        <MDBDropdownItem>Question3</MDBDropdownItem>
                                        <MDBDropdownItem>Question4</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBCol>
                            <MDBCol md="3">
                                <MDBDropdown>
                                    <MDBDropdownToggle caret color="success" style={{ width: "97%" }}>
                                        Game Title
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu basic>
                                        <MDBDropdownItem>Question1</MDBDropdownItem>
                                        <MDBDropdownItem>Question2</MDBDropdownItem>
                                        <MDBDropdownItem>Question3</MDBDropdownItem>
                                        <MDBDropdownItem>Question4</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBCol>
                            <MDBCol md="3">
                                <MDBDropdown>
                                    <MDBDropdownToggle caret color="success" style={{ width: "97%" }}>
                                        Game Title
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu basic>
                                        <MDBDropdownItem>Question1</MDBDropdownItem>
                                        <MDBDropdownItem>Question2</MDBDropdownItem>
                                        <MDBDropdownItem>Question3</MDBDropdownItem>
                                        <MDBDropdownItem>Question4</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBCol>
                            <MDBCol md="3">
                                <MDBDropdown>
                                    <MDBDropdownToggle caret color="success" style={{ width: "97%" }}>
                                        Game Title
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu basic>
                                        <MDBDropdownItem>Question1</MDBDropdownItem>
                                        <MDBDropdownItem>Question2</MDBDropdownItem>
                                        <MDBDropdownItem>Question3</MDBDropdownItem>
                                        <MDBDropdownItem>Question4</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBCol>
                            <MDBCol md="3">
                                <MDBDropdown>
                                    <MDBDropdownToggle caret color="success" style={{ width: "97%" }}>
                                        Game Title
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu basic>
                                        <MDBDropdownItem>Question1</MDBDropdownItem>
                                        <MDBDropdownItem>Question2</MDBDropdownItem>
                                        <MDBDropdownItem>Question3</MDBDropdownItem>
                                        <MDBDropdownItem>Question4</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBCardBody>
            </MDBCard>
            <MDBRow>
                <MDBCol md="9"></MDBCol>
                <MDBCol md="3"><div className="text-center mt-4">
                <MDBBtn color="unique" type="button" className="btn-block z-depth-2" onClick={() => { history.push('view')}}>
                    Host
                </MDBBtn>
            </div></MDBCol>
            </MDBRow>
            
        </MDBContainer>
    );
};

export default Host;