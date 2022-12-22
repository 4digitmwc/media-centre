import React from 'react';

export interface IProfile {
  username: string;
  profile_link: string;
  profile_pic_url: string;
  description: string;
}

class Profile extends React.Component<IProfile> {
  render() {
    return (
      <section style={{ textAlign: 'right', marginLeft: 40 }}>
        <img
          src={this.props.profile_pic_url}
          alt={this.props.username}
          width={64}
          height={64}
        />
        <a href={this.props.profile_link}>{this.props.username}</a>
        <article>{this.props.description}</article>
      </section>
    );
  }
}

export default Profile;
