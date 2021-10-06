import React from 'react'
import PostItemComponent from './PostItemComponent'

// imagens

import paisagemPng from "../assets/imagens/image 7.png"

export default function PostListComponent() {
    let postListBox = {display: "flex", flexWrap: "wrap",}
    return (
        <div style={postListBox}>
            <PostItemComponent
                img={paisagemPng}
                title="Lorem Ipsum is simply dummy text of the printing and typesettin..."
                text="Lorem Ipsum is simply dummy text of the printing and typesettin..."
            />
             <PostItemComponent
                title="Post 2"
                text="Esse é o post 2"
            />
             <PostItemComponent
                title="Post 3"
                text="Esse é o post 3"
            />
             <PostItemComponent
                title="Post 4"
                text="Esse é o post 4"
            />
            <PostItemComponent
                title="Post 5"
                text="Esse é o post 5"
            />
        </div>
    )
}
