// src/components/Post/index.js

//imports
import React, {Component} from 'react';
import "./Post.css";

/* post class
header = user {avatar, nickname}
image = image
caption = caption */
class Post extends Component {
  render() {
    const nickname = this.props.nickname;
    const avatar = this.props.avatar;
    const image = this.props.image;
    const caption = this.props.caption;
    return (
    <article className="Post">
      <header>
        <div className="Post-user">
          <div className="Post-user-avatar">
            <img src={avatar} alt={nickname}/>
          </div>
          <div className="Post-user-nickname">
            <span>{nickname}</span>
          </div>
        </div>
      </header>
      <div className="Post-image">
        <div className="Post-image-bg">
          <img alt={caption} src={image}/>
        </div>
      </div>
      <div className="Post-buttons">
        <a className="heart" src='/' alt="Like"/>
        <a className="comment" src="/" alt="Comment"/>
        <a className="dm" src="/" alt="Direct Message" />
        <a className="save" src="/" alt="save" />
      </div>
      <div className="Post-caption">
        <strong>{nickname}</strong> {caption}
      </div>
      </article>);
  }
};

//export
export default Post;
