import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import NavBar from './components/NavBar/NavBar';
import { RouterPathEnum } from './enums/RouterPathEnum';
import Home from './pages/Home/Home';

class App extends React.Component {
  render() {
    return (
      <div className={styles.App}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <NavBar />
          <Routes>
            <Route path={RouterPathEnum.HOME} element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
