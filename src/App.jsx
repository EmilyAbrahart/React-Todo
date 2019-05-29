import React from 'react';
import ToDoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';

const initialToDoList = [
	{
		task: 'Organize Garage',
		id: 1528817077286,
		completed: false,
	},
	{
		task: 'Bake Cookies',
		id: 1528817084358,
		completed: false,
	},
];

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toDoList: initialToDoList,
			toDoName: '',
		};
	}

	changeHandler = event => {
		this.setState({ toDoName: event.target.value });
	};

	addToDo = () => {
		const newToDo = {
			id: Date.now(),
			task: this.state.toDoName,
			completed: false,
		};

		this.setState({
			toDoList: this.state.toDoList.concat(newToDo),
			toDoName: '',
		});
	};

	keyPressHandler = event => (event.key === 'Enter' ? this.addToDo() : false);

	render() {
		return (
			<div>
				<h2>My To Do List</h2>
				<ToDoList toDoList={this.state.toDoList} />
				<ToDoForm
					toDoName={this.state.toDoName}
					changeHandler={this.changeHandler}
					keyPressHandler={this.keyPressHandler}
					addToDo={this.addToDo}
				/>
			</div>
		);
	}
}

export default App;
