import { Component, Input } from 'angular2/core'
import { Router, RouteParams } from 'angular2/router'

import { TodoItem } from './../../model/todo.model'
import { TodoService } from './../../service/todo.service'

@Component({
    selector: 'view-todo',
    template: `
    <button class='button' type='submit' (click)='edit()'>Edit</button>
    <table class='prop-table'>
        <tr>
            <td>Id</td>
            <td>{{item?.id}}</td>
        </tr>
        <tr>
            <td>Title</td>
            <td>{{item?.title}}</td>
        </tr>
        <tr>
            <td>Description</td>
            <td>{{item?.description}}</td>
        </tr>
    </table>
    `
})
export class ViewTodoComponent {
    item: TodoItem;
    constructor(private rourter: Router, private rParams: RouteParams, private service: TodoService) {
        let id = rParams.params['id'];
        this.item = service.getItem(+id);
    }

    edit() {
        this.rourter.navigate(['Edit', {id: 1}]);
    }
}