import { Component, provide, Input } from 'angular2/core'

import { TodoItem } from './../../model/todo.model'
import { TodoService, TodoServiceMock } from './../../service/todo.service'

import { ListItemComponet } from './../list-item/todo.list.item.component'

@Component({
    selector: 'todo-list',
    template: `
    <div>
        <ol>
            <li *ngFor='#item of todoList'>
                <todo-list-item [item]="item" (remove)="removeItem($event)">
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

    removeItem(id: number) {
        console.log('removing id'+id);
        this.service.remove(id);
    }
}
