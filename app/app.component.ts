import {Component} from 'angular2/core';

import { TodoListComponent } from './todo.list.component'

@Component({
    selector: 'todo-app',
    templateUrl: 'app/app.template.html', // With respective to index.html,
    directives: [ TodoListComponent ]
})
export class AppComponent { 
    public title: string = 'Todo Application';
    public description: string = 'This application is used to maintain todo tasks';
}