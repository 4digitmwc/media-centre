import React from 'react';
import styles from '../Post.module.scss';

export interface IHeader {
  title: string;
  subtitle: string;
}

class Header extends React.Component<IHeader> {
  render() {
    return (
      <section className={styles.header}>
        <h1>{this.props.title}</h1>
        <h4>{this.props.subtitle}</h4>
      </section>
    );
  }
}

export default Header;
