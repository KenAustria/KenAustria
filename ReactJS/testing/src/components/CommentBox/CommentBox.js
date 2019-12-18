import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class CommentBox extends Component {
	state = {
		comment: ''
	}

	onHandleChange = (e) => {
		this.setState({comment: e.target.value});
	}

	onHandleSubmit = (e) => {
		e.preventDefault();
		this.props.saveComment(this.state.comment);
		this.setState({comment: ''});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onHandleSubmit}>
					<h4>Add a Comment</h4>
					<textarea type='text' onChange={this.onHandleChange} value={this.state.comment} />
					<div>
						<button>Submit</button>
					</div>
				</form>
				<button className='fetch-comments' onClick={this.props.fetchComments}>Fetch Comments</button>
			</div>
		);
	}
}

export default connect(null, actions)(CommentBox);