import { Component, provide } from 'angular2/core'

import { TodoService } from './../../service/todo.service'

@Component({
    selector: 'add-todo',
    template: `
    <div>
        <input type='text' class='text' [(ngModel)]='newTask' placeholder='Enter New Task'>
        <button class='button' (click)='add()' type='submit'>Add</button>
    </div>
    `})
export class AddTodoComponent {
    newTask: any;

    constructor(private service: TodoService) { }

    add() {
        this.service.add({ title: this.newTask });
        this.newTask = '';
    }
}