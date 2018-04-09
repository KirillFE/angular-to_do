import { Component,OnInit, Input,ViewEncapsulation,Output,EventEmitter,ChangeDetectionStrategy } from '@angular/core';
import {TodolistService} from '../shared/todolist.service';

@Component({
    selector: 'todo-item',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './todoitem.component.html'
})
export class TodoItemComponent implements OnInit {
	public isDone:boolean;
	@Input() item:any;	
	@Input() tracked:any;
	constructor(
		public todoListService: TodolistService
	){}
  	public ngOnInit() {
  	
  	}

	public deleteItem(id:number) {
		this.todoListService.removeItem(id);
	}  
}
