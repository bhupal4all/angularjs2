System.register(['angular2/core', './../../service/todo.service'], function(exports_1, context_1) {
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
    var core_1, todo_service_1;
    var AddTodoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            }],
        execute: function() {
            AddTodoComponent = (function () {
                function AddTodoComponent(service) {
                    this.service = service;
                }
                AddTodoComponent.prototype.add = function () {
                    this.service.add({ title: this.newTask });
                    this.newTask = '';
                };
                AddTodoComponent = __decorate([
                    core_1.Component({
                        selector: 'add-todo',
                        template: "\n    <div>\n        <input type='text' class='text' [(ngModel)]='newTask' placeholder='Enter New Task'>\n        <button class='button' (click)='add()' type='submit'>Add</button>\n    </div>\n    " }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService])
                ], AddTodoComponent);
                return AddTodoComponent;
            }());
            exports_1("AddTodoComponent", AddTodoComponent);
        }
    }
});
//# sourceMappingURL=todo.add.component.js.map