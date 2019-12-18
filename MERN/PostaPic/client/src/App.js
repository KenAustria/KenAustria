import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Feed from './components/Feed/Feed';
import UserPosts from './components/UserPosts/UserPosts';
import NewPost from './components/NewPost/NewPost';
import UpdatePost from './components/UpdatePost/UpdatePost';

function App() {
  return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<Feed />
				</Route>
				<Route path="/users/:userId" exact>
					<UserPosts />
				</Route>
				<Route path="/posts/new" exact>
					<NewPost />
				</Route>
				<Route path="/posts/1" exact>
					<UpdatePost />
				</Route>
				<Redirect to="/" />
			</Switch>
		</BrowserRouter>
  );
}

export default App;
