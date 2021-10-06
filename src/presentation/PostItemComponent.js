import React from 'react'

export default function PostItemComponent({ title, text }) {
    let styleListBox = {
        display: 'flex',
        width: "33.333%",
        height: "auto",
        border: "1px solid",
        padding: "10px",
        boxSizing: "border-box",
        flexDirection: "column"
    }
    return (
        <div style={styleListBox}>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}
