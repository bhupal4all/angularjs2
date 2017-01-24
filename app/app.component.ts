import { Component } from 'angular2/core';
import { RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { TodoListComponent } from './todo/components/list/todo.list.component'
import { AddTodoComponent } from './todo/components/add/todo.add.component'

@Component({
    selector: 'todo-app',
    templateUrl: 'app/app.template.html', // With respective to index.html,
    directives: [TodoListComponent, ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
    {
        path: "/list",
        name: "List",
        component: TodoListComponent
    },
    {
        path: "/add",
        name: "Add",
        component: AddTodoComponent
    }

])
export class AppComponent {
    public title: string = 'Todo Application';
    public description: string = 'This application is used to maintain todo tasks';
}