import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import { RouterPathEnum } from './enums/RouterPathEnum';
import Home from './pages/Home/Home';
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

  getLastArticle(article_type: string) {
    const articles = (Articles as any)[article_type]
    const last_post = articles[articles.length - 1].post
    return last_post
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
      <Route path={RouterPathEnum.HIGHLIGHTS} element={<Post {...this.getLastArticle('highlights')} />} />,
      <Route path={RouterPathEnum.STORIES} element={<Post {...this.getLastArticle('stories')} />} />,
      <Route path={RouterPathEnum.INTERVIEWS} element={<Post {...this.getLastArticle('interviews')} />} />,
      <Route path={RouterPathEnum.OPINIONS} element={<Post {...this.getLastArticle('opinions')} />} />,
    ];
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar {...Articles} />
        <Routes>{this.state.articles_routes}</Routes>
      </Router>
    );
  }
}

export default App;
