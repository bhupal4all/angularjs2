import { Component, Input, Output, EventEmitter } from 'angular2/core'


import {TodoItem} from './../../model/todo.model'

@Component({
    selector: 'todo-list-item',
    template: `
    <div>
        <span>{{item?.title}}</span>
        <button type='submit' (click)='clicked()'>[x]</button>
    </div>
    `
})
export class ListItemComponet {
    @Input() item: TodoItem;
    @Output() remove = new EventEmitter();

    constructor() {
    }

    clicked() {
        this.remove.emit(this.item.id);
    }
}