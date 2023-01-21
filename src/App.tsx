import React from 'react';
import logo from './logo.svg';
import './App.css';

type articleJson = {
  id: number,
  title: string,
  summary: string,
  body: string,
  date_of_creation: string,
  date_of_last_update: string,
  author: number,
  tags: number[],
}

type ArticleArrayJson = articleJson[]

async function makeReq(success: Function, fail: Function){
  try {
    const response: Response = await fetch("http://localhost:8000/blog//api/");
    const responseJson: ArticleArrayJson = await response.json();

    console.log(responseJson);

    success(responseJson)
  } catch (error) {
    fail(error)
  }
}

function App() {

  const [articlesText, setArticlesText] = React.useState<ArticleArrayJson | []>([])

  React.useEffect(() => {
    makeReq(
      (responseJson: ArticleArrayJson) => setArticlesText(responseJson),
      (error: Error) => console.log(error)
    )
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Articles</h1>
        <div className="posts-container">
          {articlesText.map((article) => {
            return (
              <div className="article-card" key={article.id}>
                <h2 className="article-title">{article.title}</h2>
                <p className="article-body">{article.summary}</p>
              </div>
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
