import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Board, Column,Task } from 'src/app/shared/model/model';
import { SharedService } from 'src/app/shared/service/shared.service';
import { v4 as uuidv4 } from 'uuid';
import { CdkDragDrop,moveItemInArray,transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  boardId:string;
  board!: Board;
  previousColId!:string;
  constructor(private route:ActivatedRoute,private sharedService:SharedService,private router:Router) { 
    const boardId = this.route.snapshot.paramMap.get('boardId');
    if(!boardId){
      throw new Error('Cant get board ID from the url')
    }
    this.boardId=boardId;
  }

  ngOnInit(): void {
    const board = this.sharedService.getBoard(this.boardId);
    if(!board){
      throw new Error('No board Present with this board ID')
    }
    this.board = board;
  }
  updateBoardTitle(title:string){
    this.sharedService.changeBoardTitle(this.boardId,title);

  }
  deleteBoard(){
    this.sharedService.deleteBoard(this.boardId);
    this.router.navigate(['/boards']);

  }
  updateColumnName(updatedColName:string,colId:string){
    const colIndex =this.board.columns.findIndex(item=>item.id === colId);
    this.board.columns[colIndex].title = updatedColName;
    this.sharedService.UpdateColumnName(this.boardId,colId,updatedColName)
  }
  deleteColumn(colId:string){
    this.board.columns=this.board.columns.filter(item=>item.id != colId);
    this.sharedService.deleteColumn(this.boardId,colId)
  }

  openTask(taskId:string,colId:string){
    this.router.navigate(['boards', this.boardId,'column',colId, 'tasks', taskId]);
  }
  createTask(taskName:string,colId:string){
    const task:Task={
      id :uuidv4(),
      title:taskName,
      description:'',
      columnId:colId
    }
    this.sharedService.createTask(this.boardId,colId,task);
  }
  createColumn(colName:string){
    const column:Column={
      id: uuidv4(),
      title: colName,
      boardId:this.boardId,
      tasks:[]
    }
    this.sharedService.createColumn(this.boardId,column)
  }
  onDragStarted(colId:string){
    this.previousColId = colId;
  }
  drop(event: CdkDragDrop<Task[]>,colId:string) {
    const colIndex = this.board.columns.findIndex(item=>item.id === colId)
    this.board.columns[colIndex].tasks = event.container.data;
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } 
    else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      const previousColIndex = this.board.columns.findIndex(item=>item.id === this.previousColId)
      this.board.columns[previousColIndex].tasks = event.previousContainer.data;
    }
    this.sharedService.updateBoard(this.boardId,this.board);
  }



}
