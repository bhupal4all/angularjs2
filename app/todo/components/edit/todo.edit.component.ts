import { Component } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router'

import { TodoItem } from './../../model/todo.model'
import { TodoService } from './../../service/todo.service'

@Component({
    selector: 'todo-edit',
    template: `
    <table class='prop-table'>
        <tr>
            <td>Title</td>
            <td><input type='text' [(ngModel)]='item.title'></td>
        </tr>
        <tr>
            <td>Description</td>
            <td><textarea [(ngModel)]='item.description'></textarea></td>
        </tr>
        <tr>
            <td colspan='2' class='submit'><button type='submit' class='button' (click)='submit()'>Submit</button></td>
        </tr>
    </table>
    `,
    styles: [`
        .prop-table .submit {
            text-align: center;
        }
        .prop-table .submit button {
            width: 100px;
        }
    `]
})
export class EditTodoComponent {
    item: TodoItem;
    constructor(private service: TodoService, private router: Router, private rParms: RouteParams) {
        let id = rParms.params['id'];
        this.item = service.getItem(+id);
    }

    submit() {
        this.service.update(this.item);
        this.router.navigate(['List']);
    }
}