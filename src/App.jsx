import React from 'react';
import ToDoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';
import ToDoSearch from './components/TodoComponents/TodoSearch';
import './App.css';

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
			searchQuery: '',
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

	markComplete = id => {
		this.setState(state => ({
			toDoList: state.toDoList.map(task => {
				if (task.id === id) {
					task.completed = true;
				}
				return task;
			}),
		}));
	};

	clearCompleted = () => {
		this.setState(state => ({
			toDoList: state.toDoList.filter(task => !task.completed),
		}));
	};

	searchChangeHandler = event => {
		this.setState({ searchQuery: event.target.value });
	};

	searchKeyPressHandler = event => (event.key === 'Enter' ? this.searchToDo() : false);

	searchToDo = () => {
		this.setState(state => ({
			toDoList: state.toDoList.filter(task => task.task.includes(state.searchQuery))
		}))
	};

	render() {
		return (
			<div className="appContainer">
				<ToDoSearch
					searchChangeHandler={this.searchChangeHandler}
					searchQuery={this.searchQuery}
					searchToDo={this.searchToDo}
					searchKeyPressHandler={this.searchKeyPressHandler}
				/>
				<h2>- To Do List -</h2>
				<ToDoForm
					toDoName={this.state.toDoName}
					changeHandler={this.changeHandler}
					keyPressHandler={this.keyPressHandler}
					addToDo={this.addToDo}
					clearCompleted={this.clearCompleted}
				/>
				<div className="toDoListContainer">
					<ToDoList toDoList={this.state.toDoList} markComplete={this.markComplete} />
				</div>
			</div>
		);
	}
}

export default App;
