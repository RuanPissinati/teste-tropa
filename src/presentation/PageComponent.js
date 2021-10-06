import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PageTitleGenericComponent from './generics/PageTitleGenericComponent'
import PostListComponent from './PostListComponent';
import SideBarComponent from './SideBarComponent';

export default function PageComponent() {
    let { pageId = "inicio" } = useParams();
    let titulo = ["Olá Usuário"]

    const bodyRender = (pageId) => {
        switch (pageId) {
            case "inicio":
                return <PostListComponent />
            case "contatos":
                return <><h2>Contato</h2></>
            default:
                break;
        }
    }

    return (
        <div style={{width: "80%", padding:'0px 40px'}}>
            <PageTitleGenericComponent text={titulo}/>
            <br />
            {bodyRender(pageId)}
        </div>
    )
}
