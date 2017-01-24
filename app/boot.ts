import { bootstrap } from 'angular2/platform/browser'
import { ROUTER_PROVIDERS, APP_BASE_HREF } from 'angular2/router'
import { provide } from 'angular2/core'

import { AppComponent } from './app.component'
import { TodoService, TodoServiceMock } from './todo/service/todo.service'


bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    provide(APP_BASE_HREF, { useValue: '/' }),
    provide(TodoService, { useClass: TodoServiceMock })
]);