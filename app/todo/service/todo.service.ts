import { Injectable } from 'angular2/core'

import { TodoItem } from './../model/todo.model'


export class TodoService {
    todoList: Array<TodoItem> = [];

    add(item: TodoItem) { }
    remove(item: TodoItem) { }
    getItem(id: number): TodoItem { return; }
    update(item:TodoItem) {}
}

export class TodoServiceMock extends TodoService {
    constructor() {
        super();
        this.todoList.push({ id: 1, title: 'one' });
        this.todoList.push({ id: 2, title: 'two' });
    }

    add(item: TodoItem) {
        item.id = this.todoList.length + 1;
        this.todoList.push(item);
    }

    remove(item: TodoItem) {
        let idx = this.todoList.indexOf(item);
        if (idx > -1) {
            this.todoList.splice(idx, 1);
        }
    }

    getItem(id: number): TodoItem {
        let found: boolean = false;
        let foundItem: TodoItem;
        this.todoList.forEach((item) => {
            if (!found && item.id == id) {
                found = true;
                foundItem = item;
            }
        })

        return foundItem;
    }

    update(item:TodoItem){
        let itm = this.getItem(item.id);
        itm.title = item.title;
        itm.description = item.description;
    }
}