import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from './loading'
import { articleJson, ArticleAPI } from '../services/api/articles';

export default function ArticleDetail() {
    const { id } = useParams()

    const [article, setArticle] = React.useState<articleJson>()

    React.useEffect(() => {
        ArticleAPI.getArticle(
            (responseJson: articleJson) => setArticle(responseJson),
            Number(id)
        )
    }, [id])

    console.log(article);

    if (article) {
        return (
            <div>
                <h1>{article.title}</h1>
                <h3>{article.summary}</h3>
                <h5>Written on {article.date_of_creation}</h5>
                <p>{article.body}</p>
            </div>
        )
    }

    return (
        <Loading />
    )
}