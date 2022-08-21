import React from 'react'
import { Article } from './templates'
import { NavBar } from './navbar';
import ARTICLES, {IArticles} from './articles'
import {
  Routes,
  Route,
  HashRouter,
  Link
} from "react-router-dom";
import './App.css'

const default_url = process.env.REACT_APP_MEDIA_CENTRE_DEFAULT_URL

const fetchArticles = (articles: IArticles) => {
  let routes = []
  for(const [category, articles_] of Object.entries(articles)) {
    for(const article of articles_) {
      const article_path = `/${category}/${article}`
      const article_url = default_url + `/${category}/${article}`
      routes.push(
        <Route path={article_path} element={<Article article_url={article_url}></Article>} />
      )
    }
  }

  return routes
}

const App: React.FC = () => {
  const articles_routes = fetchArticles(ARTICLES)
  return (
    <div className="App">
      <NavBar />
      <HashRouter>
        <div>
          <Routes>
            {articles_routes}
          </Routes>
        </div>
        <Link to="/opinions/sample.md">Link to sample opinion</Link> <br/>
        <Link to="/interviews/sample.md">Link to sample interview</Link> <br/>
        <Link to="/stories/sample.md">Link to sample story</Link> <br/>
      </HashRouter>
    </div>

  )
}

export default App;
