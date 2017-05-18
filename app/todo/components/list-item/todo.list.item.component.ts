import { Component, Input, Output, EventEmitter } from 'angular2/core'
import {Router} from 'angular2/router'

import {TodoItem} from './../../model/todo.model'

@Component({
    selector: 'todo-list-item',
    template: `
    <div>
        <span><strong>Title: </strong>{{item?.title}}</span>
        <button type='submit' (click)='view()'>View</button>
        <button class='rounded-button' type='submit' (click)='delete()'>x</button>
        <span *ngIf='item?.description'><br/><strong>Desc: </strong>{{item?.description}}</span>
    </div>
    `
})
export class ListItemComponet {
    @Input() item: TodoItem;
    @Output() remove = new EventEmitter();

    constructor(private router: Router) {
    }

    delete() {
        this.remove.emit(this.item);
    }

    view(){
        this.router.navigate(['View', {id: this.item.id}]);
    }
}