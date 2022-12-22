import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import NavBar from './components/NavBar/NavBar';
import { RouterPathEnum } from './enums/RouterPathEnum';
import Home from './pages/Home/Home';
import Stories from './pages/Stories/Stories';
import Interviews from './pages/Interviews/Interviews';
import Opinions from './pages/Opinions/Opinions';

class App extends React.Component {
  render() {
    return (
      <div className={styles.App}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <NavBar />
          <Routes>
            <Route path={RouterPathEnum.HOME} element={<Home />} />
            <Route path={RouterPathEnum.STORIES} element={<Stories />} />
            <Route path={RouterPathEnum.INTERVIEWS} element={<Interviews />} />
            <Route path={RouterPathEnum.OPINIONS} element={<Opinions />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
