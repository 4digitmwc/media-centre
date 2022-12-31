import React from 'react';
import Article from '../Article/Article';
import Header, { IHeader } from './modules/Header';
import Profile, { IProfile } from './modules/Profile';

export interface IPost {
  image: string;
  header: IHeader;
  article_url: string;
  author: IProfile;
}

export interface IState {
  parallaxScrolling: {
    backgroundImage: string;
    backgroundRepeat: string;
    backgroundSize: string
  };
}

class Post extends React.Component<IPost, IState> {
  constructor(props: IPost) {
    super(props);

    this.state = {
      parallaxScrolling: {
        backgroundImage: `url(${this.props.image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      },
    };
  }

  render() {
    return (
      <div style={this.state.parallaxScrolling}>
        {/* Header */}
        <Header {...this.props.header} />
        {/* Story */}
        <div
          style={{
            backgroundColor: 'rgba(0,0,0,20%)',
            display: 'flex',
            minHeight: "100vh"
          }}
        >
          <Article article_url={this.props.article_url} />
          {/* Profile */}
          <Profile {...this.props.author} />
        </div>
      </div>
    );
  }
}

export default Post;
