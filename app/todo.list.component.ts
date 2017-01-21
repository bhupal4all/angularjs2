import { Component } from 'angular2/core'

import { TodoItem } from './todo.model'
import { TodoService } from './app.service'

@Component({
    selector: 'todo-list',
    template: `
    <div>
        <ol>
            <li *ngFor='#item of todoList'>
                {{item.title}}
            </li>
        </ol>
    </div>
    `
})
export class TodoListComponent {
    todoList: TodoItem[] = [];

    constructor() {
        this.todoList = new TodoService().todoList;
    }
}