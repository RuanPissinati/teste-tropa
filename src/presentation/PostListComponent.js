import React from 'react'
import PostItemComponent from './PostItemComponent'

// imagens

import paisagemPng from "../assets/imagens/image 7.png"
import calenPng from "../assets/imagens/calen.png"

export default function PostListComponent() {
    let postListBox = {display: "flex", flexWrap: "wrap", justifyContent: "space-between"}
    return (
        <div style={postListBox}>
            <PostItemComponent
                img={paisagemPng}
                temp={calenPng}
                title="Lorem Ipsum is simply dummy text of the printing and typesettin..."
                text="Lorem Ipsum is simply dummy text of the printing and typesettin..."
            />
            <PostItemComponent
                img={paisagemPng}
                title="Lorem Ipsum is simply dummy text of the printing and typesettin..."
                text="Lorem Ipsum is simply dummy text of the printing and typesettin..."
            />
            <PostItemComponent
                img={paisagemPng}
                title="Lorem Ipsum is simply dummy text of the printing and typesettin..."
                text="Lorem Ipsum is simply dummy text of the printing and typesettin..."
            />
            <PostItemComponent
                img={paisagemPng}
                title="Lorem Ipsum is simply dummy text of the printing and typesettin..."
                text="Lorem Ipsum is simply dummy text of the printing and typesettin..."
            />
            <PostItemComponent
                img={paisagemPng}
                title="Lorem Ipsum is simply dummy text of the printing and typesettin..."
                text="Lorem Ipsum is simply dummy text of the printing and typesettin..."
            />
            <PostItemComponent
                img={paisagemPng}
                title="Lorem Ipsum is simply dummy text of the printing and typesettin..."
                text="Lorem Ipsum is simply dummy text of the printing and typesettin..."
            />
            <PostItemComponent
                img={paisagemPng}
                title="Lorem Ipsum is simply dummy text of the printing and typesettin..."
                text="Lorem Ipsum is simply dummy text of the printing and typesettin..."
            />
            <PostItemComponent
                img={paisagemPng}
                title="Lorem Ipsum is simply dummy text of the printing and typesettin..."
                text="Lorem Ipsum is simply dummy text of the printing and typesettin..."
            />
            <PostItemComponent
                img={paisagemPng}
                title="Lorem Ipsum is simply dummy text of the printing and typesettin..."
                text="Lorem Ipsum is simply dummy text of the printing and typesettin..."
            />
        </div>
    )
}
