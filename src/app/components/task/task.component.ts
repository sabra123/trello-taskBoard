import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared/service/shared.service';
import { Task } from 'src/app/shared/model/model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  task!:Task;
  boardId:string;
  colId:string;
  taskId:string;
  columnForm = this.fb.group({
    columnId: [null],
  });
  constructor(private route:ActivatedRoute,private shareService:SharedService,private router:Router,private fb: FormBuilder) {
    const boardId = this.route.snapshot.paramMap.get('boardId');
    if(!boardId){
      throw new Error('Cant get board ID from the url')
    }
    const colId = this.route.snapshot.paramMap.get('columnId');
    if(!colId){
      throw new Error('Cant get board ID from the url')
    }
    const taskId = this.route.snapshot.paramMap.get('taskId');
    if(!taskId){
      throw new Error('Cant get board ID from the url')
    }
    this.boardId= boardId;
    this.colId =colId;
    this.taskId = taskId;
   }
  

  ngOnInit(): void {
    this.task= this.shareService.getTaskById(this.boardId,this.colId,this.taskId);
    this.columnForm.valueChanges.subscribe(
      values=>  {
        console.log(values.columnId)
        this.task.columnId= values.columnId
        this.shareService.createTask(this.boardId,values.columnId,this.task);
        this.shareService.deleteTask(this.boardId,this.colId,this.taskId)
        this.colId = values.columnId
      }
    )
  }
  
  getColumn(){
    return this.shareService.getBoard(this.boardId)?.columns;
  }
  goToBoard(): void {
    this.router.navigate(['boards', this.boardId]);
  }
  updateTaskName(updatedTaskName:string){
    this.shareService.updateTaskName(this.boardId,this.colId,this.taskId,updatedTaskName)
  }
  updateTaskDescription(updatedDescription:string){
    this.shareService.updateTaskDescription(this.boardId,this.colId,this.taskId,updatedDescription)
  }
  deleteTask(){
    this.shareService.deleteTask(this.boardId,this.colId,this.taskId)
    this.router.navigate(['boards/',this.boardId])
  }

}
