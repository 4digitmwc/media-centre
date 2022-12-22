import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import NavBar from './components/NavBar/NavBar';
import { RouterPathEnum } from './enums/RouterPathEnum';
import Home from './pages/Home/Home';
import Stories from './pages/Stories/Stories';
import Interviews from './pages/Interviews/Interviews';
import Opinions from './pages/Opinions/Opinions';
import ARTICLES, { IArticles } from './articles/Articles';
import Article from './components/Article/Article';

const default_url = process.env.REACT_APP_MEDIA_CENTRE_DEFAULT_URL;

interface IState {
  articles_routes: JSX.Element[];
}

class App extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      articles_routes: this.fetchArticles(ARTICLES),
    };
  }

  fetchArticles(articles: IArticles) {
    let routes = [];
    for (const [category, articles_] of Object.entries(articles)) {
      for (const article of articles_) {
        const article_path = `/${category}/${article}`;
        const article_url = default_url + `/${category}/${article}`;
        routes.push(
          <Route
            path={article_path}
            element={<Article article_url={article_url} />}
          />
        );
      }
    }

    return [
      ...routes,
      <Route path={RouterPathEnum.HOME} element={<Home />} />,
      <Route path={RouterPathEnum.STORIES} element={<Stories />} />,
      <Route path={RouterPathEnum.INTERVIEWS} element={<Interviews />} />,
      <Route path={RouterPathEnum.OPINIONS} element={<Opinions />} />,
    ];
  }

  render() {
    return (
      <div className={styles.App}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <NavBar />
          <Routes>{this.state.articles_routes}</Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
