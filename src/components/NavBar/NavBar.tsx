import React from 'react';

import logo from '../../assets/images/logo.svg';
import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';
import { RouterPathEnum } from '../../enums/RouterPathEnum';

class NavBar extends React.Component {
  render() {
    return (
      <div className={styles.navbar}>
        <Link className={styles.stories} to={RouterPathEnum.STORIES}>
          Stories
        </Link>
        <Link className={styles.stories} to={RouterPathEnum.INTERVIEWS}>
          Interviews
        </Link>
        <Link to={RouterPathEnum.HOME}>
          <img className={styles.logo} src={logo} alt='4dm2023-logo' />
        </Link>
        <Link className={styles.stories} to={RouterPathEnum.OPINIONS}>
          Opinions
        </Link>
        <a
          className={styles.stories}
          href='https://4digitmwc.github.io/skillban-articles/'
        >
          Skillbans
        </a>
      </div>
    );
  }
}

export default NavBar;
