import { Component, Input } from 'angular2/core'

import {TodoItem} from './todo.model'

@Component({
    selector: 'todo-list-item',
    template: `
    <div>
        <span>{{item.title}}</span>
        <button type='submit'>[x]</button>
    </div>
    `
})
export class ListItemComponet {
    @Input() item: TodoItem;

    constructor() {
        console.log('list-item');
    }
}