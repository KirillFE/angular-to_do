import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class TodolistService{
	public items:any;
	private apiUrl = 'https://jsonplaceholder.typicode.com/todos'

	constructor(
    	public http: Http
    ) {

    }

	getList() {
		return this.http.get(this.apiUrl).map((res)=>res.json());
    }

    updateList(data, num:number) {
    	this.items = data.splice(0,num);
    }

    removeItem(id:number) {
    	this.items.splice(id, 1);
    }
}