import React from 'react'
import { Link, useRouteMatch} from 'react-router-dom'



// imagens 

import logoPng from "../assets/imagens/Prancheta-8 1.png" 
import iconinicioPng from "../assets/imagens/home.png" 
import iconContatoPng from "../assets/imagens/contatos.png" 
import iconrelaPng from "../assets/imagens/Frame.png" 

export default function SideBarComponent() {
    let { url } = useRouteMatch();
    
    return (
        <ul style={{width: "20%", height: "1080px", backgroundColor:"white"}}>

            <img style={{marginTop:'50px', marginLeft:'35px'}} className="logo-img" src={logoPng} alt="" />

            <li>
                <button style={{marginTop:'50px'}} className="btn ">
                <img style={{paddingLeft:'16px', paddingRight:'12px'}}src={iconinicioPng} alt=""/>
                <Link to={`${url}/inicio`}>incio</Link>
                </button>
            </li>
            <li>
                <button className="btn ">
                <img style={{paddingLeft:'16px', paddingRight:'12px'}}src={iconContatoPng} alt=""/>
                <Link to={`${url}/contatos`}>contato</Link>
                </button>
            </li>
            <li>
                <button className="btn ">
                <img style={{paddingLeft:'16px', paddingRight:'12px'}}src={iconrelaPng} alt=""/>
                <Link to={`${url}/relatorios`}>relatorios</Link>
                </button>
            </li>
            <li>
                <button className="btn ">
                <img style={{paddingLeft:'16px', paddingRight:'12px'}}src={iconContatoPng} alt=""/>
                <Link to={`${url}/contatos`}>contato</Link>
                </button>
            </li>
            <li>
                <button className="btn ">
                <img style={{paddingLeft:'16px', paddingRight:'12px'}}src={iconContatoPng} alt=""/>
                <Link to={`${url}/contatos`}>contato</Link>
                </button>
            </li>
            <li>
                <button className="btn ">
                <img style={{paddingLeft:'16px', paddingRight:'12px'}}src={iconContatoPng} alt=""/>
                <Link to={`${url}/contatos`}>contato</Link>
                </button>
            </li>
        </ul>
    )
}
