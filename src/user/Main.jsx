import { useSelector, useDispatch } from 'react-redux';
import * as actions from './../actions';
import React, { useState, useEffect } from 'react';
import { MDBCarousel, MDBContainer, MDBCarouselItem, MDBNavItem, MDBNavLink, MDBNav, MDBRow, MDBCol, MDBCarouselInner, MDBView, MDBMask, MDBCarouselCaption } from "mdbreact";
import { Link, useHistory } from 'react-router-dom';
import "./style.css";

const MainComponent = (props) => {

    let history = useHistory();

    const goGame = (param) => {
        history.push(param);
    }
    const dispatch = useDispatch();

    const sliderData = useSelector(state => state.fetchSliderDataReducer.fetch_slider_data);
    useEffect(() => {
        dispatch(actions.fetchSliderData());
    }, [])
    let sliderSect = [];
    if(sliderData) {
        sliderSect = sliderData.map((item, index) => {
            return (
                <MDBCarouselItem itemId={(index+1).toString()}>
                <MDBView>
                    <a key={index} href={item.url} target="blank">
                    <img
                        className="d-block w-100"
                        src={item.image}
                        alt="First slide"
                        width="300"
                        height="400"
                        style={{zIndex: '10000'}}
                    /></a>
                    <MDBMask overlay="black-light" />
                </MDBView>
            </MDBCarouselItem>
            )
        })
    }
    // (window.adsbygoogle = window.adsbygoogle || []).push({});
    return (

        /* this is Google Ads Section 
        <ins 
        className="adsbygoogle"
        style={{display: 'inline-block', width: "728px", height:'90px'}}
        data-ad-client="ca-pub-1234567890123456"
        data-ad-slot="989038934"
      /> */
        <MDBContainer>
            <MDBRow>
                <MDBCol md="3"></MDBCol>
                <MDBCol md='6'>
                <MDBCarousel
                    activeItem={1}
                    length={sliderData ? sliderData.length : 0}
                    showControls={true}
                    showIndicators={true}
                    className="z-depth-1"
                >
                    <MDBCarouselInner>
                        {sliderSect}
                    </MDBCarouselInner>
                </MDBCarousel>
                </MDBCol>
                <MDBCol md="3"></MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="3"></MDBCol>
                <MDBCol md="6">
                    <Link className="login-sec" to="/login">Log in</Link>
                </MDBCol>
                <MDBCol md="3"></MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default MainComponent;