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
      <article style={{ textAlign: 'right', 
      marginLeft: 80, display: 'flex', marginTop: 40,
      backgroundColor: "rgba(255,255,255,0.1)" }}>
        <img
          src={this.props.profile_pic_url}
          alt={this.props.username}
          width={92}
          height={92}
        />
        <div style={{display: 'block'}}>
          <a href={this.props.profile_link} 
          style={{textDecoration: "none", fontSize: 30}}><b>{this.props.username}</b></a>
          <article style={{width: "200px"}}>{this.props.description}</article>
        </div>
      </article>
    );
  }
}

export default Profile;
