import React from 'react'

export default function PageTitleGenericComponent({text}) {
    let titleStyle = {
        padding: "30px 10px",
        borderBottom: "1px solid"

    }
    return (
        <h2 style={titleStyle}>{text}</h2>
    )
}
