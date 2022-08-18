import React from 'react'
import { Article } from './templates'
import ARTICLES, {IArticles} from './articles'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css'

const default_url = process.env.REACT_APP_MEDIA_CENTRE_DEFAULT_URL

const fetch_articles_routes = (articles: IArticles) => {
  let routes = []
  for(const [category, articles_] of Object.entries(articles)) {
    for(const article of articles_) {
      const article_path = `/gh-pages-url/${category}/${article}`
      const article_url = default_url + `/${category}/${article}`
      routes.push(
        <Route path={article_path} element={<Article article_url={article_url}></Article>} />
      )
    }
  }

  return routes
}

const App: React.FC = () => {
  const articles_routes = fetch_articles_routes(ARTICLES)
  console.log(articles_routes)
  return (
    <Router>
      <div className="App">
        <Routes>
          {articles_routes}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
