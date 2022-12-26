import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import NavBar from './components/NavBar/NavBar';
import { RouterPathEnum } from './enums/RouterPathEnum';
import Home from './pages/Home/Home';
import Stories from './pages/Stories/Stories';
import Interviews from './pages/Interviews/Interviews';
import Opinions from './pages/Opinions/Opinions';
import { IArticles, Articles } from './articles/Articles';
import Post from './components/Post/Post';

interface IState {
  articles_routes: JSX.Element[];
}

class App extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      articles_routes: this.fetchArticles(Articles),
    };
  }

  fetchArticles(articles: IArticles) {
    let routes = [];
    for (const [category, articles_] of Object.entries(articles)) {
      for (const article of articles_) {
        const {postName, post} = article
        const route = `${category}/${postName}`
        routes.push(
          <Route
            path={route}
            element={<Post {...post} />}
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
          <NavBar {...Articles} />
          <Routes>{this.state.articles_routes}</Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
