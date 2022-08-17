import React, { useState } from "react"
import ReactMarkdown from 'react-markdown'
import axios from 'axios'

const Article: React.FC<{article_url: string}> = ({article_url}) => {
    const [article, setArticle] = useState<string>("")

    const updateArticle = async () => {
        const article_response = await axios.get(article_url)
        const article_data = await article_response.data
        setArticle(article_data)
    }

    updateArticle()

    return <section>
        <ReactMarkdown>{article}</ReactMarkdown>
    </section>
}

export default Article
