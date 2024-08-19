import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared/service/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private sharedService:SharedService) { }

  ngOnInit(): void {
  }
  removeLocalStorage(){
    this.sharedService.deleteAllBoards();
  }
}
