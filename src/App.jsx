import React from 'react';

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

  changeHandler = event => {this.setState({ toDoName: event.target.value })};
  
	addToDo = () => {
		const newToDo = {
			id: Date.now(),
			name: this.state.toDoName,
			completed: false,
		};

		this.setState({ toDoList: this.state.toDoList.concat(newToDo), toDoName: '' });
	};

	render() {
		return (
			<div>
				{this.state.toDoList.map(todo => (
					<div key={todo.id}>{todo.task}</div>
				))}
				<input value={this.state.toDoName} onChange={this.changeHandler} type="text" />
				<button className="addToDo" onClick={this.addToDo}>
					Add ToDo
				</button>
			</div>
		);
	}
}

export default App;
