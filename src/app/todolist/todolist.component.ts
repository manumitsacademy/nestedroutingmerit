import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tasks=['clean car','pay bills','start marketing'];
  task;
  addTask(){
    this.tasks.push(this.task);
  }
}
