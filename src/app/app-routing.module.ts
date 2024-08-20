import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './components/board/board.component';
import { BoardsComponent } from './components/boards/boards.component';
import { TaskComponent } from './components/task/task.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'boards',component:BoardsComponent},
  {path:'boards/:boardId',component:BoardComponent},
  {path: 'boards/:boardId/column/:columnId/tasks/:taskId',component: TaskComponent},
  {path:'**',redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
