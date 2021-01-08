import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import { Link, useHistory } from "react-router-dom";
import "./../user/style.css";

const ViewComponent = (props) => {

    let history = useHistory();
    const scoreAry = [
        {
            "order": "1ST Position",
            "score": "154"
        },
        {
            "order": "2ST Position",
            "score": "143"
        },
        {
            "order": "3ST Position",
            "score": "132"
        },
        {
            "order": "4ST Position",
            "score": "128"
        },
        {
            "order": "5ST Position",
            "score": "120"
        }
    ]
    const [scoreData, setScoreData] = useState(scoreAry)

    const data = scoreData.map((item, index) => {

        return (
            <div key={index} className="d-flex justify-content-between align-items-center mb-1" style={{ background: "#33b5e5", fontWeight: "500", height: "50px", padding: "0 15px" }}>
                <p className="text-left mt-0 mb-0" style={{ width: "200px", color: "white", fontSize: "20px" }}>{item.order}</p>
                <p className="text-right mt-0 mb-0" style={{ width: "80px", color: "white", fontSize: "20px" }}>{item.score}</p>
            </div>
        )
    })
    return (
        <div className="view-section">
            <div>
                <a href="https://www.lipsum.com" target="_blank">
                    <img src="https://www.experianinfotech.com/images/JainPanchang-Banner1.png" style={{ width: '100%', height: '200px' }} className="img-fluid" alt="" /></a>
            </div>
            <div style={{position: "absolute", bottom: '0', left: "3px", right: '3px'}}>
                <div className="d-flex justify-content-between align-items-center mt-5 mb-1" style={{ background: "rgb(25 101 130)", height: "50px", padding: "0 15px" }}>
                    <p className="text-left mt-0 mb-0" style={{ width: "80px", color: "white", fontSize: "20px" }}>WINNERS</p>
                    <p className="text-right mt-0 mb-0" style={{ width: "80px", color: "white", fontSize: "20px" }}>SCORES</p>
                </div>
                {data}
            </div>
        </div>

    )
}

export default ViewComponent;