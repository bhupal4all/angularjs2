System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var TodoService, TodoServiceMock;
    return {
        setters:[],
        execute: function() {
            TodoService = (function () {
                function TodoService() {
                    this.todoList = [];
                }
                TodoService.prototype.add = function (item) { };
                TodoService.prototype.remove = function (id) { };
                TodoService.prototype.getItem = function (id) { return; };
                return TodoService;
            }());
            exports_1("TodoService", TodoService);
            TodoServiceMock = (function (_super) {
                __extends(TodoServiceMock, _super);
                function TodoServiceMock() {
                    _super.call(this);
                    this.todoList.push({ id: 1, title: 'one' });
                    this.todoList.push({ id: 2, title: 'two' });
                }
                TodoServiceMock.prototype.add = function (item) {
                    item.id = this.todoList.length + 1;
                    this.todoList.push(item);
                };
                TodoServiceMock.prototype.remove = function (id) {
                    console.log('removing at server');
                };
                TodoServiceMock.prototype.getItem = function (id) {
                    var found = false;
                    var foundItem;
                    this.todoList.forEach(function (item) {
                        if (!found && item.id == id) {
                            found = true;
                            foundItem = item;
                        }
                    });
                    return foundItem;
                };
                return TodoServiceMock;
            }(TodoService));
            exports_1("TodoServiceMock", TodoServiceMock);
        }
    }
});
//# sourceMappingURL=todo.service.js.map