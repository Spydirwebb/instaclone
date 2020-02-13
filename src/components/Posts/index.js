//src/components/Posts/index.js
//imports
import React, { Component } from "react";
import "./Posts.css";
import gql from "graphql-tag";
import Post from "../Post";

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    //request permission
    Notification.requestPermission();

    //fetch initial Posts
    this.props.apollo_client.query({query: gql `
          {
            posts(user_id: "a"){
              id
              user{
                nickname
                avatar
              }
              image
              caption
            }
          }
        `}).then(response => {
      this.setState({posts: response.data.posts});
    });

  //subscribe to posts channel
  this.posts_channel = this.props.pusher.subscribe('posts-channel');

  // listen for a new posts
  this.posts_channel.bind("new_post", data => {
    //update states
    this.setState({
      posts: this.state.posts.concat(data.post)
    });
    if(Notification.permission ==='granted'){
      try{
        //notify user of new posts
        let notification = new Notification('Pusher Instagram Clone', {
          body: `New post from ${data.post.user.nickname}`,
          icon: 'https://cdn.freebiesupply.com/logos/large/2x/pusher-logo-png-transparent.png',
          image: `${data.post.image}`
        });
        //open the website when the notification is clicked
        notification.onclick = function(event){
          window.open('http://localhost:3000','_blank');
        }
      } catch(e){
        console.log("Error displaying notification");
      }
    }
  }, this);
}
  render() {
    return (
      <div className="Posts">
        {this.state.posts
          .map(post => (
            <Post
              nickname={post.user.nickname}
              avatar={post.user.avatar}
              image={post.image}
              caption={post.caption}
              key={post.id}
            />
          ))}
      </div>);
  };
}
//export
export default Posts;
