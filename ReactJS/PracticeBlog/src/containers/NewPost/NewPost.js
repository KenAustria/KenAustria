import React, { Component } from 'react';
import axios from 'axios';
import './NewPost.css';

class NewPost extends Component {
  state = {
    title: '',
    body: '',
    author: 'Max'
  };

  postDataHandler = () => {
    const post = {
      title: this.state.title,
      body: this.state.body,
      author: this.state.author
    };
    axios
      .post('https://jsonplaceholder.typicode.com/posts', post)
      .then(response => {
        console.log(response.data);
      });
  };

  render() {
    return (
      <div className="NewPost">
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={event => this.setState({ title: event.target.value })}
        />
        <label>Body</label>
        <textarea
          rows="4"
          value={this.state.body}
          onChange={event => this.setState({ body: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={event => this.setState({ author: event.target.value })}
        >
          <option value="Max">Max</option>
          <option value="Manu">Manu</option>
        </select>
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
