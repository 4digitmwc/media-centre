import React from "react";
import { IArticle } from "../../../articles/Articles"

interface IState {
    article_type: string
    articles: IArticle[]
    style: any
}

export interface IProps {
    article_type: string
    articles: IArticle[]
}

export default class Dropdown extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)

        this.state = {
            ...props,
            style: {
                display: 'block',
                textAlign: 'left',
                contentVisibility: 'visible',
            }
        }
    }

    render() {
        const {articles, article_type} = this.props
        const dropDownHTML = articles.map((article) => {
            const {post} = article
            const redirect_url = `${process.env.PUBLIC_URL}/${article_type}/${article.postName}`
            return <li key={post.header.title} style={{whiteSpace: 'nowrap'}}><a href={redirect_url}>{post.header.title}</a></li>
        })
        return <div style={this.state.style}>
            <ul>
                {dropDownHTML}
            </ul>
        </div>
    }
}
