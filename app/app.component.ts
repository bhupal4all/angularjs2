import { Component, provide } from 'angular2/core';
import { RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from 'angular2/router';

import { TodoListComponent } from './todo/components/list/todo.list.component'
import { AddTodoComponent } from './todo/components/add/todo.add.component'
import { ViewTodoComponent } from './todo/components/view/todo.view.component'
import { EditTodoComponent } from './todo/components/edit/todo.edit.component'

@Component({
    selector: 'todo-app',
    templateUrl: 'app/app.template.html', // With respective to index.html,
    directives: [TodoListComponent, ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        provide(LocationStrategy, { useClass: HashLocationStrategy }),
        provide(APP_BASE_HREF, { useValue: '/' })
    ]
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
    },
    {
        path: "/view/:id",
        name: "View",
        component: ViewTodoComponent,

    },
    {
        path: "/view/:id/edit",
        name: "Edit",
        component: EditTodoComponent,
    },
    {
        path:"**",
        redirectTo: ['List']
    }

])
export class AppComponent {
    public title: string = 'Todo Application';
    public description: string = 'This application is used to maintain todo tasks';
}