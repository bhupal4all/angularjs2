System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var ListItemComponet;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ListItemComponet = (function () {
                function ListItemComponet(router) {
                    this.router = router;
                    this.remove = new core_1.EventEmitter();
                }
                ListItemComponet.prototype.delete = function () {
                    this.remove.emit(this.item.id);
                };
                ListItemComponet.prototype.view = function () {
                    this.router.navigate(['View', { id: this.item.id }]);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ListItemComponet.prototype, "item", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ListItemComponet.prototype, "remove", void 0);
                ListItemComponet = __decorate([
                    core_1.Component({
                        selector: 'todo-list-item',
                        template: "\n    <div>\n        <span>{{item?.title}}</span>\n        <button type='submit' (click)='view()'>View</button>\n        <button class='rounded-button' type='submit' (click)='delete()'>x</button>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], ListItemComponet);
                return ListItemComponet;
            }());
            exports_1("ListItemComponet", ListItemComponet);
        }
    }
});
//# sourceMappingURL=todo.list.item.component.js.map