import React from 'react';
import { articleJson, ArticleAPI, ArticleArrayJson } from '../services/api/articles';
import { Link } from 'react-router-dom';

export default function ArticleIndex() {
    const [articles, setArticles] = React.useState<ArticleArrayJson | []>([])

    React.useEffect(() => {
        ArticleAPI.getArticleList(
            (responseJson: ArticleArrayJson) => setArticles(responseJson),
        )
    }, [])

    return (
        <div>
            <h1>Articles</h1>
            <div className="posts-container">
                {articles.map((article: articleJson) => {
                    return (
                        <div className="article-card" key={article.id}>
                            <Link to={`blog/${article.id}`}>
                                <h2 className="article-title">{article.title}</h2>
                            </Link>
                            <p className="article-body">{article.summary}</p>
                            <hr />
                        </div>
                    );
                })}
            </div>
        </div>
    )

}
