import React from 'react'

export default function PostItemComponent({ title, text, img, temp }) {
    let styleListBox = {
        display: 'flex',
        width: "32%",
        height: "auto",
        padding: "15px",
        marginBottom: "24px",
        boxSizing: "border-box",
        flexDirection: "column",
        color: "#000",
        background: "#FFFFFF",
        boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.09)",
        borderRadius: "6px",
        justifyContent: "space-around",
    }

    let calen = {
        width: "101.94px",
        height: "27px" ,
        background: "rgba(0, 0, 0, 0.5)",
        borderRadius: "3px",
        display: "flex" ,
    }
    return (
        <div style={styleListBox}>
            <div>
                <img style={{ width: "100%" }} src={img} alt="" />
                <div style={calen}>
                    <img src={temp} alt="" />
                    <p>2min atras</p>
                </div>
            </div>
            <h2 style={{ fontSize: "12px", marginTop: "16px" }}>{title}</h2>
            <p style={{ fontSize: "10px" }}>{text}</p>
        </div>
    )
}
