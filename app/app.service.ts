import { TodoItem } from './todo.model'

export class TodoService {
    todoList: TodoItem[] = [];

    constructor()
    {
        this.todoList.push({id: 1, title: 'one'});
        this.todoList.push({id: 2, title: 'two'});
    }
}