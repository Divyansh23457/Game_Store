import React from 'react'
import ".//css/GamesCard.css"
function GamesCard(props) {

    const imagestyle = {
        backgroundImage : `url(${props.imgg})`,
        backgroundPosition : "center",
        backgroundSize: "cover",
        height : "300px",
        width : "100%",
        margin : "10px",
        borderRadius: "15px",
        border: "1px solid rgba(255,255,255, 0.255)"
    };

    return (
        <div style ={{"margin" : "20px"}}>
            <div className="container">
                <div className="wrapper">
                    <div style = {imagestyle}></div>
                    <h1>{props.name}</h1>
                    <p> About: <br />
                        {props.desc}</p>
                </div>
                <div className="button-wrapper">
                    <a href = {props.detailUrl} target = "_blank" className="btn outline">DETAILS</a>
                    <a href = {props.buyURL} target = "_blank" className="btn fill">BUY NOW</a>
                </div>
            </div>
        </div>
  )
}

export default GamesCard
