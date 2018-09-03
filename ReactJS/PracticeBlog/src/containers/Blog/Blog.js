import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './Blog.css';
import Post from '../Post/Post';
import FullPost from '../FullPost/FullPost';
import NewPost from '../NewPost/NewPost';

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: null
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log(response.data);
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: 'KungFuKenny'
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: true });
      });
  }

  selectedPostHandler = id => {
    this.setState({ selectedPostId: id });
  };

  render() {
    let posts = this.state.posts.map(post => {
      return (
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.selectedPostHandler(post.id)}
        />
      );
    });
    if (this.state.error) {
      posts = <p style={{ textAlign: 'center' }}>Something went wrong..</p>;
    }
    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <div className="text-xs-right">
          <Link className="btn-btn-primary" to="/new">
            Add a Post
          </Link>
        </div>
        {/* <section>
          <NewPost />
        </section> */}
      </div>
    );
  }
}

export default Blog;
