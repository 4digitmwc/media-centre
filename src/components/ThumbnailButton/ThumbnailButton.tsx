import React from 'react';
import styles from './ThumbnailButton.module.scss';

export interface IThumbnail {
  redirect_url: string;
  thumbnail_url: string;
  size: {
    width: number;
    height: number;
  };
  text: string;
}

interface IState {
  textStyle: {};
  imageStyle: {};
}

class ThumbnailButton extends React.Component<IThumbnail, IState> {
  constructor(props: IThumbnail) {
    super(props);

    this.state = {
      textStyle: {
        right: '3%',
        fontSize: props.size.width / 15,
        margin: 0,
        padding: 0,
      },
      imageStyle: {
        opacity: 1,
        margin: 0,
        padding: 0,
      },
    };

    this.toggleImageBlur = this.toggleImageBlur.bind(this);
    this.toggleImageDefault = this.toggleImageDefault.bind(this);
    this.toggleTextUnderline = this.toggleTextUnderline.bind(this);
    this.toggleTextDefault = this.toggleTextDefault.bind(this);
    this.openArticle = this.openArticle.bind(this);
  }

  toggleImageBlur() {
    this.setState(() => ({
      imageStyle: { opacity: 0.7 },
    }));
  }

  toggleImageDefault() {
    this.setState(() => ({
      imageStyle: { opacity: 1 },
    }));
  }

  toggleTextUnderline() {
    this.setState((prevState) => ({
      ...prevState,
      imageStyle: {
        textDecoration: 'underline',
      },
    }));
  }

  toggleTextDefault() {
    this.setState((prevState) => ({
      ...prevState,
      imageStyle: {
        textDecoration: 'none',
      },
    }));
  }

  openArticle() {
    window.location.replace(this.props.redirect_url);
  }

  render() {
    return (
      <article className={styles.card} onClick={this.openArticle}>
        <img
          src={this.props.thumbnail_url}
          width={this.props.size.width}
          height={this.props.size.height}
          style={this.state.imageStyle}
          onMouseOver={this.toggleImageBlur}
          onMouseLeave={this.toggleImageDefault}
          alt='background'
        />
        <div
          className={styles.thumbnailText}
          style={this.state.textStyle}
          onMouseOver={this.toggleTextUnderline}
          onMouseLeave={this.toggleTextDefault}
        >
          {this.props.text}
        </div>
      </article>
    );
  }
}

export default ThumbnailButton;
