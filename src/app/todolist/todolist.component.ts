import { Component,ViewEncapsulation,Output,EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import {TodolistService} from '../shared/todolist.service';

@Component({
    selector: 'todo-list',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './todolist.component.html'
})
export class TodolistComponent {

    public todo:any; 
    private todoQty = 10;
	constructor(
		public todoListService: TodolistService
	){}
	public ngOnInit() {
		this.todoListService.getList().subscribe((data)=>{
			this.todoListService.updateList(data, this.todoQty);
		});
	}

	public addItem() {
		this.todo = prompt("Please enter new todo",'');
		if(this.todo !== null) {
			this.todoListService.items.unshift({title:this.todo});
		}
	}
}
