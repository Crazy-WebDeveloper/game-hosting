import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import './../user/style.css';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';

const QuestionAdd = () => {

    let history = useHistory();
    const [questionAry, setQuestionAry] = useState([""]);
    const qstData = questionAry.map((item, index) => {
        return (
            <MDBRow>
                <MDBCol md="12"><MDBInput key={index} label="Add Answer" group type="text" validate error="wrong" success="right" /></MDBCol>
            </MDBRow>
        )
    })
    const addQuestion = () => {
        let tmpAry = questionAry.slice();
        tmpAry.push("");
        setQuestionAry(tmpAry);
    }
    const removeQuestion = () => {
        let tmpAry = questionAry.slice();
        if(tmpAry.length === 1) return;
        tmpAry.pop();
        setQuestionAry(tmpAry)
    }
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="3"></MDBCol>
                <MDBCol md="6">
                    <form>
                    <MDBCard>
                        <div className="header pt-3 grey lighten-2">
                            <MDBRow className="d-flex justify-content-center">
                                <h3 className="deep-grey-text mt-3 mb-2 pb-1 mx-5">
                                    Question Name
                                </h3>
                            </MDBRow>
                        </div>
                        <MDBCardBody>
                        <MDBContainer>
                            {qstData}
                            <MDBRow>
                                <MDBCol md="12" className="pr-0">
                                    <MDBBtn color="info" type="button" size="ms" style={{float: 'right'}} onClick={() => { removeQuestion() }}>
                                        <MDBIcon icon="minus" />
                                    </MDBBtn>
                                    <MDBBtn color="info" type="button" size="ms" style={{float: 'right'}} onClick={() => { addQuestion() }}>
                                        <MDBIcon icon="plus" />
                                    </MDBBtn>
                                    
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                        <div className="text-center mt-3">
                            <MDBBtn color="unique" type="button" className="btn-block z-depth-2" onClick={() => { }}>
                                 Create
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

export default QuestionAdd;