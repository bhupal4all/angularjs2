import { Injectable } from 'angular2/core'

import { TodoItem } from './../model/todo.model'


export class TodoService {
    todoList: Array<TodoItem> = [];
    
    add(item: TodoItem) {}
    remove(id:number) {}
}

export class TodoServiceMock extends TodoService {
    constructor()
    {
        super();
        this.todoList.push({id: 1, title: 'one'});
        this.todoList.push({id: 2, title: 'two'});
    }

    add(item: TodoItem) {
        item.id = this.todoList.length + 1;
        this.todoList.push(item);
    }

    remove(id: number) {
        console.log('removing at server');
    }
}