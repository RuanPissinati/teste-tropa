import React, { useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'



// imagens 

import logoPng from "../../assets/imagens/Prancheta-8 1.png"
import iconinicioPng from "../../assets/imagens/home.png"
import iconContatoPng from "../../assets/imagens/contatos.png"
import iconrelaPng from "../../assets/imagens/Frame.png"
import './style.css'

export default function SideBarComponent() {
    let { url } = useRouteMatch();

    const [menujson, setMenuJson] = useState([
        { image: iconinicioPng, text: 'inicio', active: true },
        { image: iconContatoPng, text: 'contato', active: false },
        { image: iconrelaPng, text: 'relatorios', active: false },
        { image: iconContatoPng, text: 'contato', active: false },
        { image: iconContatoPng, text: 'contato', active: false },
        { image: iconContatoPng, text: 'contato', active: false }
    ]);

    const handleClick = (indexmenu) => {
        menujson.map((value, index) => {
            if (value.active === true) {
                value.active = false;
            }
            if(index === indexmenu){
                value.active = true;
            }
        });
    }
    return (
        <div className={'menu-side-bar'}>
            <img className="logo-img" src={logoPng} alt="" />
            <ul className={'menu-list'}>


                {
                    menujson.map((value, index) => <li className={`${value.active ? 'active' : ''}`}>
                        <Link to={`${url}/${value.text}`} className={`btn`} onClick={()=>handleClick(index)}>
                            <img style={{ paddingLeft: '16px', paddingRight: '12px' }} src={value.image} alt="" />
                            <span>{value.text}</span>
                        </Link>
                    </li>)
                }


            </ul>
        </div>
    )
}
