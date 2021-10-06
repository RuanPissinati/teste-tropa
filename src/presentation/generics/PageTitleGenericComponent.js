import React from 'react'

export default function PageTitleGenericComponent({text}) {
    let titleStyle = {
        padding: "40px 0px 20px 0px",
        borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
        fontFamily: 'Advent Pro',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '25px',
        color: 'rgba(0, 0, 0, 0.44)',

    }
    return (
        <h2 style={titleStyle}>{text}</h2>
    )
}
