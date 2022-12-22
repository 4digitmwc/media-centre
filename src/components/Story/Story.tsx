import React from 'react';
import Article from '../Article/Article';
import Header, { IHeader } from './modules/Header';
import Profile, { IProfile } from './modules/Profile';

export interface IStory {
  image: string;
  header: IHeader;
  article_url: string;
  author: IProfile;
}

export interface IState {
  parallaxScrolling: {
    backgroundAttachment: string;
    bacckgroundPosition: string;
    backgroundRepeat: string;
    backgroundSize: string;
    backgroundImage: string;
  };
}

class Story extends React.Component<IStory, IState> {
  constructor(props: IStory) {
    super(props);

    this.state = {
      parallaxScrolling: {
        backgroundAttachment: 'fixed',
        bacckgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundImage: `url(${this.props.image})`,
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
            backgroundSize: '100% auto',
            backgroundColor: 'rgba(0,0,0,50%)',
            display: 'flex',
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

export default Story;
