import { Injectable } from '@angular/core';
import { Board, Column ,Task} from '../model/model';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private key:string = 'boards'
  private boards:Board[]=[];
  constructor() { 
    this.boards = this.getFromLocalStorage(this.key)?this.getFromLocalStorage(this.key):[];
  }
  getBoards(){
    return this.boards;
  }
  getBoard(id:string){
    const board = this.boards.find(item => item.id === id);
    if (board == null){
      throw new Error("Board is not available with this id ")
    }
    return board;
  }
  getBoardIndexById(id:string){
    const boardIndex= this.boards.findIndex(item=>item.id ===id);
    if(boardIndex ==-1){
      throw new Error("Board with defined Id Does not exist");
    }
    return boardIndex;
  }
  CreateBoard(newBoard:Board){
    this.boards.push(newBoard);
    console.log(this.boards);
    this.setItemToLocalStorage(this.key,this.boards);
  }
  changeBoardTitle(id:string,title:string){
    const index = this.boards.findIndex(item=>item.id == id);
    this.boards[index].title = title;
    this.setItemToLocalStorage(this.key,this.boards);
  }

  deleteBoard(id:string){
    this.boards = this.boards.filter(item=>item.id !== id);
    this.setItemToLocalStorage(this.key,this.boards);
  }
  deleteAllBoards(){
    this.boards = []
    localStorage.clear();
  }
  updateBoard(boardId:string,board:Board){
    const boardIndex = this.getBoardIndexById(boardId)
    this.boards[boardIndex]= board;
    this.setItemToLocalStorage(this.key,this.boards);

  }

  getColIndexById(colId:string,boardIndex:number){
    const colIndex= this.boards[boardIndex].columns.findIndex(item=>item.id ===colId);
    if(colIndex ==-1){
      throw new Error("Board with defined Id Does not exist");
    }
    return colIndex;
  }

  UpdateColumnName(boardId:string,colId:string,colName:string){
    const boardIndex = this.getBoardIndexById(boardId);
    const colIndex = this.getColIndexById(colId,boardIndex)
    this.boards[boardIndex].columns[colIndex].title = colName;
    this.setItemToLocalStorage(this.key,this.boards)
  }
  deleteColumn(boardId:string,colId:string){
    const boardIndex = this.getBoardIndexById(boardId);
    this.boards[boardIndex].columns=this.boards[boardIndex].columns.filter(item=>item.id!=colId);
    this.setItemToLocalStorage(this.key,this.boards)
  }
  
  createColumn(boardId:string,column:Column){
    const boardIndex = this.getBoardIndexById(boardId);
    this.boards[boardIndex].columns.push(column);
    this.setItemToLocalStorage(this.key,this.boards);

  }

  createTask(boardId:string,colId:string,task:Task){
    const boardIndex = this.getBoardIndexById(boardId);
    const colIndex = this.getColIndexById(colId,boardIndex);
    this.boards[boardIndex].columns[colIndex].tasks.push(task);
    this.setItemToLocalStorage(this.key,this.boards);
  }

  getTaskById(boardId:string,colId:string,taskId:string){
    const boardIndex = this.getBoardIndexById(boardId);
    const colIndex = this.getColIndexById(colId,boardIndex);
    var task= this.boards[boardIndex].columns[colIndex].tasks.find(item=>item.id === taskId);
    if(task== undefined){
      throw new Error("Task not found ")
    }
    return task;
  }
  updateTaskName(boardId:string,colId:string,taskId:string,updatedTaskName:string){
    const boardIndex = this.getBoardIndexById(boardId);
    const colIndex = this.getColIndexById(colId,boardIndex);
    const taskIndex= this.boards[boardIndex].columns[colIndex].tasks.findIndex(item=>item.id === taskId);
    if(taskIndex== -1){
      throw new Error("Task not found ")
    }
    this.boards[boardIndex].columns[colIndex].tasks[taskIndex].title = updatedTaskName;
    this.setItemToLocalStorage(this.key,this.boards);
    
  }
  updateTaskDescription(boardId:string,colId:string,taskId:string,updatedTaskDesc:string){

    const boardIndex = this.getBoardIndexById(boardId);
    const colIndex = this.getColIndexById(colId,boardIndex);
    const taskIndex= this.boards[boardIndex].columns[colIndex].tasks.findIndex(item=>item.id === taskId);
    if(taskIndex== -1){
      throw new Error("Task not found ")
    }
    this.boards[boardIndex].columns[colIndex].tasks[taskIndex].description = updatedTaskDesc;
    this.setItemToLocalStorage(this.key,this.boards);
  }
  deleteTask(boardId:string,colId:string,taskId:string){
    const boardIndex = this.getBoardIndexById(boardId);
    const colIndex = this.getColIndexById(colId,boardIndex);
    this.boards[boardIndex].columns[colIndex].tasks =this.boards[boardIndex].columns[colIndex].tasks.filter(item=>item.id!=taskId);
    this.setItemToLocalStorage(this.key,this.boards);
  }

  setItemToLocalStorage(key:string,value:any){
    localStorage.setItem(key,JSON.stringify(value));
  }
  getFromLocalStorage(key:string){
    const value = localStorage.getItem(key)
    return value? JSON.parse(value):null;
  }
}
