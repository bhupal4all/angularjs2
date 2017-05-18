System.register(['angular2/core', './../../service/todo.service', './../list-item/todo.list.item.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todo_service_1, todo_list_item_component_1;
    var TodoListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            },
            function (todo_list_item_component_1_1) {
                todo_list_item_component_1 = todo_list_item_component_1_1;
            }],
        execute: function() {
            TodoListComponent = (function () {
                function TodoListComponent(service) {
                    this.service = service;
                    this.todoList = [];
                    this.todoList = service.todoList;
                }
                TodoListComponent.prototype.removeItem = function (item) {
                    this.service.remove(item);
                };
                TodoListComponent = __decorate([
                    core_1.Component({
                        selector: 'todo-list',
                        template: "\n    <div>\n        <ol>\n            <li *ngFor='#item of todoList'>\n                <todo-list-item [item]=\"item\" (remove)=\"removeItem($event)\">\n                </todo-list-item>\n            </li>\n        </ol>\n    </div>\n    ",
                        directives: [todo_list_item_component_1.ListItemComponet]
                    }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService])
                ], TodoListComponent);
                return TodoListComponent;
            }());
            exports_1("TodoListComponent", TodoListComponent);
        }
    }
});
//# sourceMappingURL=todo.list.component.js.map