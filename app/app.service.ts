import { Injectable } from 'angular2/core'

import { TodoItem } from './todo.model'


export class TodoService {
    todoList: TodoItem[] = [];
    
    add(item: TodoItem) {
        console.log('add');
    }
}

export class TodoServiceMock extends TodoService {
    constructor()
    {
        super();
        this.todoList.push({id: 1, title: 'one'});
        this.todoList.push({id: 2, title: 'two'});
    }

    add(item: TodoItem) {
        this.todoList.push(item);
    }
}