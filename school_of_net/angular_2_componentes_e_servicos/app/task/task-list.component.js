"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var task_service_1 = require('./task.service');
var TaskListComponent = (function () {
    function TaskListComponent(taskService, router) {
        this.taskService = taskService;
        this.router = router;
    }
    TaskListComponent.prototype.goToEdit = function (id) {
        this.router.navigate(['tasks', id, 'edit']);
    };
    TaskListComponent.prototype.deleteTask = function (id) {
        this.taskService.deleteTask(id);
    };
    TaskListComponent.prototype.ngOnInit = function () {
        this.tasks = this.taskService.getTasks();
    };
    TaskListComponent = __decorate([
        core_1.Component({
            selector: 'task-list',
            templateUrl: 'task-list.component.html',
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService, router_1.Router])
    ], TaskListComponent);
    return TaskListComponent;
}());
exports.TaskListComponent = TaskListComponent;
// [] binding - propriedade do html
// () alteracoes da view para o component 
//# sourceMappingURL=task-list.component.js.map