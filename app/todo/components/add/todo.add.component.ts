import {Component} from 'angular2/core'

@Component({
    selector: 'add-todo',
    template: `
    <div>
        <input type='text' class='text' [(ngModel)]='newTask' placeholder='Enter New Task'>
        <button class='button' (click)='add()' type='submit'>Add</button>
    </div>
    `
})
export class AddTodoComponent {
    constructor() { }

}