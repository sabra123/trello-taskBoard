import { Component, OnInit } from '@angular/core';
import { Board } from 'src/app/shared/model/model';
import { SharedService } from 'src/app/shared/service/shared.service';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css'],
})
export class BoardsComponent implements OnInit {

  boards: Board[] =[];
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    if (this.sharedService.getBoards()!=null)
      this.boards = this.sharedService.getBoards()
  }

  createBoard(boardTitle: string): void {
    const newBoard:Board = {
      id:uuidv4(),
      title: boardTitle,
      columns:[]
    }
    console.log(newBoard)
    this.sharedService.CreateBoard(newBoard);
  }

}
