import React from 'react'

export default function PostItemComponent({ title, text, img, temp}) {
    let styleListBox = {
        display: 'flex',
        width: "30%",
        height: "auto",
        padding: "15px",
        marginRight: "24px" ,
        marginBottom: "24px" ,
        boxSizing: "border-box",
        flexDirection: "column",
        color: "#000",
        background: "#FFFFFF",
        boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.09)",
        borderRadius: "6px"
    }

    return (
        <div style={styleListBox}>
            <div>
                <img style={{width:"100%"}} src={img} alt="" />
                <div>{temp}</div>
            </div>
            <h2 style={{fontSize: "14px", marginTop:"16px" }}>{title}</h2>
            <p  style={{fontSize: "12px"}}>{text}</p>
        </div>
    )
}
