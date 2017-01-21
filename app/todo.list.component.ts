import { Component, provide, Input } from 'angular2/core'

import { TodoItem } from './todo.model'
import { TodoService, TodoServiceMock } from './app.service'

import { ListItemComponet } from './todo.list.item.component'

@Component({
    selector: 'todo-list',
    template: `
    <label>Enter New Task<label><input type='text' [(ngModel)]='newTask'><button (click)='add()' type='submit'>Add</button>
    <div>
        <ol>
            <li *ngFor='#item of todoList'>
                <todo-list-item [item]="item">
                </todo-list-item>
            </li>
        </ol>
    </div>
    `,
    directives: [ListItemComponet],
    providers: [provide(TodoService, { useClass: TodoServiceMock })]
})
export class TodoListComponent {
    todoList: TodoItem[] = [];
    newTask: string;

    constructor(private service: TodoService) {
        this.todoList = service.todoList;
    }

    add() {
        this.service.add({ title: this.newTask });
        this.newTask = '';
    }
}
