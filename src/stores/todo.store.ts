import { observable, action, computed, reaction } from "mobx"
import { createContext } from "react"
import { v4 as uuidv4 } from 'uuid';

export interface Todo {
	id?: string;
	title: string;
	completed?: boolean;
}

class TodoStore {
	constructor() {
		reaction(() => this.todos, () => console.log(this.todos.length))
	}

	@observable todos: Todo[] = [
		{ id: uuidv4(), title: "Item #1", completed: false },
		{ id: uuidv4(), title: "Item #2", completed: false },
		{ id: uuidv4(), title: "Item #3", completed: false },
		{ id: uuidv4(), title: "Item #4", completed: false },
		{ id: uuidv4(), title: "Item #5", completed: true },
		{ id: uuidv4(), title: "Item #6", completed: false },
	]

	@action addTodo = (todo: Todo) => {
		todo.completed = todo.completed ?? false;
		todo.id = uuidv4();
		console.log(todo);
		this.todos.push(todo)
	}

	@action toggleTodo = (id: string) => {
		this.todos = this.todos.map(todo => {
			if (todo.id === id) {
				return {
					...todo,
					completed: !todo.completed,
				}
			}
			return todo
		})
	}

	@action removeTodo = (id: string) => {
		this.todos = this.todos.filter(todo => todo.id !== id)
	}

	@computed get info() {
		return {
			total: this.todos.length,
			completed: this.todos.filter(todo => todo.completed).length,
			notCompleted: this.todos.filter(todo => !todo.completed).length,
		}
	}
}

export default createContext(new TodoStore())