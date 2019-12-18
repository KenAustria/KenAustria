import React from 'react';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import Footer from './components/Footer';
import UndoRedo from './containers/UndoRedo';

const App = () => {
	return (
		<div>
			<AddTodo />
			<VisibleTodoList />
			<Footer />
			<UndoRedo />
		</div>
	);
};


export default App;