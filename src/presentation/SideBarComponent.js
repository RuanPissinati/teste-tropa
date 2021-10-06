import React from 'react'
import { Link, useRouteMatch} from 'react-router-dom'

export default function SideBarComponent() {
    let { url } = useRouteMatch();
    
    return (
        <ul style={{width: "10%", borderRight: "1px solid #000", height: "100px"}}>
            <li>
                <Link to={`${url}/inicio`}>incio</Link>
            </li>
            <li>
                <Link to={`${url}/contatos`}>contato</Link>
            </li>
        </ul>
    )
}
