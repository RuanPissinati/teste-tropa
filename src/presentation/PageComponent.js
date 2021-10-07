import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PageTitleGenericComponent from './generics/PageTitleGenericComponent'
import PostListComponent from './PostListComponent';
import SideBarComponent from './SideBarComponent';

export default function PageComponent() {
    let { pageId = "inicio" } = useParams();

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
        <div style={{ height: '100vh',width: '100%', padding:' 0px 40px 0px calc(20% + 40px)'}}>
            
            <PageTitleGenericComponent text={"ola"} textBold={"Usuario"} />
            <br />
            {bodyRender(pageId)}
        </div>
    )
}
