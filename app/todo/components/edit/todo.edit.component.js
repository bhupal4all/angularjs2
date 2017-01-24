System.register(['angular2/core', 'angular2/router', './../../service/todo.service'], function(exports_1, context_1) {
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
    var core_1, router_1, todo_service_1;
    var EditTodoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            }],
        execute: function() {
            EditTodoComponent = (function () {
                function EditTodoComponent(service, router, rParms) {
                    this.service = service;
                    this.router = router;
                    this.rParms = rParms;
                    var id = rParms.params['id'];
                    this.item = service.getItem(+id);
                }
                EditTodoComponent.prototype.submit = function () {
                    this.service.update(this.item);
                    this.router.navigate(['List']);
                };
                EditTodoComponent = __decorate([
                    core_1.Component({
                        selector: 'todo-edit',
                        template: "\n    <table class='prop-table'>\n        <tr>\n            <td>Title</td>\n            <td><input type='text' [(ngModel)]='item.title'></td>\n        </tr>\n        <tr>\n            <td>Description</td>\n            <td><textarea [(ngModel)]='item.description'></textarea></td>\n        </tr>\n        <tr>\n            <td colspan='2' class='submit'><button type='submit' class='button' (click)='submit()'>Submit</button></td>\n        </tr>\n    </table>\n    ",
                        styles: ["\n        .prop-table .submit {\n            text-align: center;\n        }\n        .prop-table .submit button {\n            width: 100px;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService, router_1.Router, router_1.RouteParams])
                ], EditTodoComponent);
                return EditTodoComponent;
            }());
            exports_1("EditTodoComponent", EditTodoComponent);
        }
    }
});
//# sourceMappingURL=todo.edit.component.js.map